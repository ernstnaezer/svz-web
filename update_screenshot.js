const puppeteer = require('puppeteer');
const terminate = require('terminate');
const { exec } = require('child_process');
const util = require('util');
const fs = require('fs');
const glob = require('glob-promise');

// Promisify the necessary functions
const globAsync = util.promisify(glob);
const unlinkAsync = util.promisify(fs.unlink);

async function deleteMatchingFiles(pattern) {
  try {
    // Find files matching the pattern
    const files = await globAsync(pattern);

    // Create an array of promises for each file deletion
    const deletePromises = files.map((file) => unlinkAsync(file));

    // Wait for all deletions to complete
    await Promise.all(deletePromises);

    console.log(`Deleted ${files.length} file(s) matching pattern: ${pattern}`);
  } catch (err) {
    console.error('Error occurred:', err);
  }
}

async function updateDocument(screenshotFilename) {
  const documentFilePath = './app/layout.tsx';
  const content = await fs.promises.readFile(documentFilePath, 'utf8');
  const updatedContent = content.replace(
    /content='\/img\/[^"]+'/,
    `content='\/img\/${screenshotFilename}'`
  );

  await fs.promises.writeFile(documentFilePath, updatedContent);
}

// Function to start the Next.js application
function startNextApp() {
  return new Promise((resolve, reject) => {
    const process = exec('yarn run dev', (error) => {
      if (error) {
        console.error(`Error starting Next.js app: ${error}`);
        return reject(error);
      }
    });

    // Wait for the server to start
    setTimeout(() => {
      console.log('Next.js app started');
      resolve(process);
    }, 10000); // Adjust this time as needed
  });
}

// Function to format the current date and time
function formatDate() {
  const now = new Date();
  return now.toISOString().replace(/:/g, '-').replace(/\..+/, '');
}

// Function to take a screenshot with Puppeteer
async function takeScreenshot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport size for mobile
  await page.setViewport({ width: 500, height: 525 });

  // Navigate to your local server
  await page.goto('http://localhost:3000');

  // Wait for a few seconds to let the website load
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // Generate a filename with the current date and time
  const filename = `website_screenshot_${formatDate()}.png`;

  // Take a screenshot
  await page.screenshot({ path: `./public/img/screenshot/${filename}` });

  await browser.close();
  return filename;
}

// Main function to run the script
async function main() {
  console.log('Deleting old screenshots');
  const pattern = './public/img/screenshot/website_screenshot_*';
  await deleteMatchingFiles(pattern);

  const serverProcess = await startNextApp();
  const screenshotFilename = await takeScreenshot();
  await terminate(serverProcess.pid);

  console.log(`Screenshot taken and saved as ${screenshotFilename}`);

  await updateDocument(screenshotFilename);
  console.log(
    `Updated _document.js with latest screenshot: ${screenshotFilename}`
  );
}

main().catch(console.error);
