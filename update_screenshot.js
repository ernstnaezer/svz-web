const puppeteer = require('puppeteer');
const terminate = require('terminate');
const { exec } = require('child_process');

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

// Function to take a screenshot with Puppeteer
async function takeScreenshot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport size for mobile
  await page.setViewport({ width: 1280, height: 525 });

  // Navigate to your local server
  await page.goto('http://localhost:3000');

  // Wait for a few seconds to let the website load
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // Generate a filename with the current date and time
  const filename = `opengraph-image.png`;

  // Take a screenshot
  await page.screenshot({ path: `./public/img/${filename}` });

  await browser.close();
  return filename;
}

// Main function to run the script
async function main() {
  const serverProcess = await startNextApp();
  const screenshotFilename = await takeScreenshot();
  await terminate(serverProcess.pid);

  console.log(`Screenshot taken and saved as ${screenshotFilename}`);
}

main().catch(console.error);
