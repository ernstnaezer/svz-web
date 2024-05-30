'use client';
import { Form, Formik, FormikHelpers } from 'formik';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import * as Yup from 'yup';
import {
  TextInput,
  DatePickerInput,
  TextAreaInput,
  SelectInput,
} from './forms/Elements';
import Link from 'next/link';
import React from 'react';

interface FormValues {
  primaryAttendee: {
    firstName: string;
    lastName: string;
    placeOfLiving: string;
    dateOfBirth: Date | null;
    handPreference: string;
  };
  additionalAttendees: Array<{
    firstName: string;
    lastName: string;
    placeOfLiving: string;
    dateOfBirth: Date | null;
    handPreference: string;
  }>;
  telephone: string;
  email: string;

  discoveryMethod: string;
  message: string;
}

type IntroductionFormProps = {
  contentMode?: boolean; // Optional prop for dark mode
};

const IntroductionForm: React.FC<IntroductionFormProps> = ({
  contentMode = false,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const initialValues: FormValues = {
    primaryAttendee: {
      firstName: '',
      lastName: '',
      placeOfLiving: '',
      dateOfBirth: null,
      handPreference: '',
    },
    additionalAttendees: [],
    telephone: '',
    email: '',
    discoveryMethod: '',
    message: '',
  };

  // Regular expression for Dutch phone numbers
  const dutchPhoneNumberRegex =
    /^(\+31|0031|0)(6|1\d|2\d|3\d|4\d|5\d|7\d|8\d|9\d)[\s\-]?(\d{2}[\s\-]?){3,4}\d{2}$/;

  const attendeeSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(100, 'Maximum of 50 characters')
      .required('First name is required'),
    lastName: Yup.string()
      .max(100, 'Maximum of 50 characters')
      .required('Last name is required'),
    placeOfLiving: Yup.string()
      .max(100, 'Maximum of 100 characters')
      .required('Place of living is required'),
    handPreference: Yup.string()
      .oneOf(['rechts', 'links', 'geen voorkeur'])
      .required('Hand preference is required'),
    dateOfBirth: Yup.date().required('Date of birth is required'),
  });

  const validationSchema = Yup.object({
    primaryAttendee: attendeeSchema,
    additionalAttendees: Yup.array()
      .of(attendeeSchema)
      .max(2, 'A maximum of two additional attendees is allowed'),
    telephone: Yup.string()
      .matches(dutchPhoneNumberRegex, 'Invalid Dutch phone number')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .max(100, 'Maximum of 100 characters')
      .required('Verplicht'),
    discoveryMethod: Yup.string()
      .required('Required')
      .max(200, 'Maximaal 200 tekens'),
    message: Yup.string()
      .required('Required')
      .max(1500, 'Maximaal 1500 tekens'),
  });

  const EMAILJS_SERVICEID = 'service_uejo26w';
  const EMAILJS_TEMPLATEID = 'template_6ml810o';
  const EMAILJS_APIKEY = 'fNAyIUzB40Pe-KqxG';

  const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    const formatDutchDate = (date: Date | null): string => {
      if (!date) return '';
      return date.toLocaleDateString('nl-NL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    };

    const { primaryAttendee, additionalAttendees } = values;

    // Initialize the object to be sent with primary attendee's data
    const submissionData: Record<string, any> = {
      firstName: primaryAttendee.firstName,
      lastName: primaryAttendee.lastName,
      placeOfLiving: primaryAttendee.placeOfLiving,
      dateOfBirth: formatDutchDate(primaryAttendee.dateOfBirth),
      handPreference: primaryAttendee.handPreference,
      telephone: values.telephone,
      email: values.email,
      message: values.message,
      discoveryMethod: values.discoveryMethod,
    };

    // Add additional attendees' data
    additionalAttendees.forEach((attendee, index) => {
      submissionData[`firstName_${index + 2}`] = attendee.firstName;
      submissionData[`lastName_${index + 2}`] = attendee.lastName;
      submissionData[`placeOfLiving_${index + 2}`] = attendee.placeOfLiving;
      submissionData[`dateOfBirth_${index + 2}`] = formatDutchDate(
        attendee.dateOfBirth
      );
      submissionData[`handPreference_${index + 2}`] = attendee.handPreference;
    });

    emailjs
      .send(
        EMAILJS_SERVICEID,
        EMAILJS_TEMPLATEID,
        submissionData,
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

  const textColorClass = contentMode ? 'text-gray-700' : 'text-gray-100';

  return (
    <>
      {formSubmitted ? (
        <div className={` ${contentMode ? '' : 'pl-8'}`}>
          <article className={`prose lg:prose-lg ${textColorClass}`}>
            <h3 className={textColorClass}>Bedankt voor je aanmelding!</h3>
            <p>
              We hebben je registratie goed ontvangen. Binnenkort ontvang je een
              een bevestigingsmail van ons. In deze mail vind je meer details
              over je aanmelding en wat je verder kunt verwachten.
            </p>
            <p>
              We nemen snel contact met je op om een datum af te spreken voor de
              introductieavond. Onze introducties zijn over het algemeen op
              dinsdagavond.
            </p>
            <p>
              Let op: de minimumleeftijd voor deelname aan de introductieavond
              is 14 jaar. We vragen je ook om een geldig legitimatiebewijs mee
              te nemen naar de vereniging.
            </p>
            <p>
              Wil je alvast meer weten over wat je kunt verwachten tijdens de
              introductieavond? Neem dan een kijkje op{' '}
              <Link
                className={textColorClass}
                href='/lidmaatschap/introductieavond'
              >
                deze pagina
              </Link>{' '}
              waar je uitgebreide informatie vindt over de avond, wat je gaat
              leren en hoe alles in zijn werk gaat.
            </p>
            <p>
              We kijken er naar uit om je binnenkort te verwelkomen en je te
              laten kennismaken met de schietsport.
            </p>
            <p>
              Met vriendelijke groet, <br />
              Simone.
            </p>
          </article>
        </div>
      ) : (
        <>
          {!contentMode && (
            <h2 className={`mb-6 text-2xl ${textColorClass}`}>
              Meld je aan voor een introductieavond
            </h2>
          )}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ setFieldValue, values, isSubmitting }) => (
              <Form className='flex flex-col space-y-4'>
                <TextInput
                  tabIndex={1}
                  placeholder='Voornaam'
                  name='primaryAttendee.firstName'
                  type='text'
                />
                <TextInput
                  tabIndex={2}
                  placeholder='Achternaam'
                  name='primaryAttendee.lastName'
                  type='text'
                />
                <TextInput
                  tabIndex={3}
                  placeholder='Woonplaats'
                  name='primaryAttendee.placeOfLiving'
                  type='text'
                />
                <DatePickerInput
                  onChange={(date) =>
                    setFieldValue('primaryAttendee.dataOfBirth', date)
                  }
                  tabIndex={4}
                  placeholder='Geboortedatum'
                  name='primaryAttendee.dateOfBirth'
                />
                <SelectInput
                  tabIndex={5}
                  placeholder='Voorkeurshand voor het schieten'
                  name='primaryAttendee.handPreference'
                  options={[
                    { label: 'Rechts', value: 'rechts' },
                    { label: 'Links', value: 'links' },
                    { label: 'Geen voorkeur', value: 'geen voorkeur' },
                  ]}
                ></SelectInput>
                <TextInput
                  tabIndex={6}
                  placeholder='Telefoonnummer'
                  name='telephone'
                  type='tel'
                />
                <TextInput
                  tabIndex={7}
                  placeholder='Email'
                  name='email'
                  type='email'
                />
                <TextInput
                  tabIndex={8}
                  placeholder='Waar heb je ons gevonden?'
                  name='discoveryMethod'
                  type='text'
                />
                <TextAreaInput
                  tabIndex={9}
                  name='message'
                  placeholder='Vertel ons iets over jezelf en je interesse in de schietsport'
                />

                {/* Fields for additional attendees */}
                {values.additionalAttendees.map((_, index) => (
                  <div
                    key={index}
                    className='!mt-10 border-t border-gray-300 pt-4'
                  >
                    <div className='flex items-baseline justify-between'>
                      <h3
                        className={`mt-4 text-lg font-semibold ${textColorClass}`}
                      >
                        Extra introducee {index + 1}
                      </h3>
                      <h3>
                        <button
                          className={`underline ${textColorClass} whitespace-nowrap`}
                          disabled={isSubmitting}
                          onClick={() => {
                            const newAttendees =
                              values.additionalAttendees.filter(
                                (_, idx) => idx !== index
                              );
                            setFieldValue('additionalAttendees', newAttendees);
                          }}
                        >
                          verwijderen
                        </button>
                      </h3>
                    </div>

                    <div className='flex flex-col space-y-4 '>
                      <TextInput
                        name={`additionalAttendees[${index}].firstName`}
                        placeholder={`Voornaam`}
                        type='text'
                      />
                      <TextInput
                        name={`additionalAttendees[${index}].lastName`}
                        placeholder={`Achternaam`}
                        type='text'
                      />
                      <TextInput
                        name={`additionalAttendees[${index}].placeOfLiving`}
                        placeholder={`Woonplaats`}
                        type='text'
                      />
                      <DatePickerInput
                        onChange={(date) =>
                          setFieldValue(
                            `additionalAttendees[${index}].dateOfBirth`,
                            date
                          )
                        }
                        tabIndex={4}
                        placeholder='Geboortedatum'
                        name={`additionalAttendees[${index}].dateOfBirth`}
                      />
                      <SelectInput
                        tabIndex={5}
                        placeholder='Voorkeurshand voor het schieten'
                        name={`additionalAttendees[${index}].handPreference`}
                        options={[
                          { label: 'Rechts', value: 'rechts' },
                          { label: 'Links', value: 'links' },
                          { label: 'Geen voorkeur', value: 'geen voorkeur' },
                        ]}
                      ></SelectInput>
                    </div>
                  </div>
                ))}

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
                  <button
                    type='button'
                    disabled={
                      values.additionalAttendees.length >= 2 || isSubmitting
                    }
                    className={`btn btn-primary disabled: w-fit whitespace-nowrap`}
                    onClick={() => {
                      const newAttendee = {
                        firstName: '',
                        lastName: '',
                        placeOfLiving: '',
                        dateOfBirth: null,
                        handPreference: '',
                      };
                      const newAttendees =
                        values.additionalAttendees.concat(newAttendee);
                      setFieldValue('additionalAttendees', newAttendees);
                    }}
                  >
                    Introducee toevoegen
                  </button>
                </div>
                <p className={textColorClass}>
                  Voor onze introductieavonden geldt een minimumleeftijd van 14
                  jaar en we vragen deelnemers een geldig legitimatiebewijs mee
                  te nemen. De kosten voor deelname bedragen €25,00. De avonden
                  vinden meestal plaats op dinsdagavond. Voor vragen over
                  persoonsgevens, zie onze{' '}
                  <Link
                    className={`underline ${textColorClass} underline`}
                    href='/organisatie/stukken'
                  >
                    informatiebrochure.
                  </Link>
                </p>
                {!contentMode && (
                  <p className={textColorClass}>
                    Wil je meer weten voordat je je aanmeldt?{' '}
                    <Link
                      className={`underline ${textColorClass} underline`}
                      href='/lidmaatschap/introductieavond'
                    >
                      Lees dan hier alle details
                    </Link>
                    .
                  </p>
                )}
              </Form>
            )}
          </Formik>
        </>
      )}
    </>
  );
};

export default IntroductionForm;
