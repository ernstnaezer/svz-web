'use client';
import { FormikHelpers, Formik, Form } from 'formik';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import { useState } from 'react';
import { TextInput, TextAreaInput } from './forms/Elements';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(100, 'Maximum of 50 characters')
      .required('Name is required'),

    email: Yup.string()
      .email('Invalid email address')
      .max(100, 'Maximum of 100 characters')
      .required('Verplicht'),

    message: Yup.string()
      .required('Verplicht')
      .max(1500, 'Maximaal 1500 tekens'),
  });

  const EMAILJS_SERVICEID = 'service_uejo26w';
  const EMAILJS_TEMPLATEID = 'template_n0yo9pb';
  const EMAILJS_APIKEY = 'fNAyIUzB40Pe-KqxG';

  const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    emailjs
      .send(
        EMAILJS_SERVICEID,
        EMAILJS_TEMPLATEID,
        values as any,
        EMAILJS_APIKEY
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.status, result.text);
          setFormSubmitted(true);
          setTimeout(() => {
            actions.resetForm();
            actions.setSubmitting(false);
            setFormSubmitted(false);
          }, 120000);
        },
        (error) => {
          console.log('Failed to send email. Error: ', error.text);
        }
      );
  };

  const initialValues: FormValues = {
    name: '',
    email: '',
    message: '',
  };

  return (
    <div className='w-full '>
      <h3>Stuur ons een bericht</h3>

      {formSubmitted ? (
        <article className={`prose lg:prose-lg`}>
          <p>
            Bedankt voor je bericht. We hebben je bericht goed ontvangen en
            zullen zo snel mogelijk contact met je opnemen.
          </p>
        </article>
      ) : (
        <>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ setFieldValue, values, isSubmitting }) => (
              <Form className='flex flex-col space-y-4'>
                <TextInput
                  tabIndex={1}
                  placeholder='Naam'
                  name='name'
                  type='text'
                />
                <TextInput
                  tabIndex={6}
                  placeholder='Email'
                  name='email'
                  type='email'
                />
                <TextAreaInput
                  tabIndex={9}
                  name='message'
                  placeholder='Bericht'
                />

                <div className='flex gap-4'>
                  <button
                    disabled={isSubmitting}
                    className={`btn btn-secondary w-fit ${
                      isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                    type='submit'
                    tabIndex={10}
                  >
                    {isSubmitting ? 'Verzonden...' : 'Verzenden'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};

export default ContactForm;
