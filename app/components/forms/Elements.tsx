'use client';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useField } from 'formik';
import Select, { CSSObjectWithLabel, StylesConfig } from 'react-select';

interface TextInputProps {
  name: string;
  type?: string;
  placeholder?: string;
  tabIndex?: number;
}

export const TextInput: React.FC<TextInputProps> = ({
  name,
  placeholder,
  tabIndex,
  type = 'text',
  ...props
}) => {
  const [field, meta] = useField(name);
  const isError = meta.touched && meta.error;

  return (
    <input
      {...field}
      {...props}
      type={type}
      tabIndex={tabIndex}
      placeholder={placeholder}
      className={`block w-full p-2 ${
        isError ? 'placeholder:text-red-700 italic' : ''
      }`}
    />
  );
};

//  component for the date picker
interface DatePickerInputProps extends ReactDatePickerProps {
  name: string;
  tabIndex?: number;
  placeholder?: string;
}

export const DatePickerInput: React.FC<DatePickerInputProps> = ({
  name,
  tabIndex,
  placeholder,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);
  const isError = meta.touched && meta.error;
  return (
    <div className='relative'>
      <DatePicker
        {...field}
        {...props}
        tabIndex={tabIndex}
        placeholderText={placeholder}
        className={`block w-full p-2 ${
          isError ? 'placeholder:text-red-700 italic' : ''
        }`}
        selected={(field.value && new Date(field.value)) || null}
        locale='nl'
        dateFormat='dd-MM-yyyy'
        onChange={(val) => helpers.setValue(val)}
      />
    </div>
  );
};

interface SelectInputProps {
  name: string;
  placeholder?: string;
  tabIndex?: number;
  options: { value: string; label: string }[];
}

export const SelectInput: React.FC<SelectInputProps> = ({
  name,
  tabIndex,
  placeholder,
  options,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);
  const isError = meta.touched && meta.error;

  const customStyles: StylesConfig = {
    control: (base: CSSObjectWithLabel) => ({
      ...base,
      //      padding: '0.5rem',
      fontSize: '18px',
      border: 'none',
      borderRadius: '0',
    }),
    menu: (base: CSSObjectWithLabel) => ({
      ...base,
      fontSize: '18px', // Set font size for the menu items to 18px
    }),
    valueContainer: (base: CSSObjectWithLabel) => ({
      ...base,
      // padding: 0, // Remove padding from the ValueContainer
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: isError ? '#b91c1c' : '#a0aec0',
    }),
  };

  return (
    <Select
      {...field}
      {...props}
      tabIndex={tabIndex}
      onChange={(val: any) => helpers.setValue(val.value)}
      placeholder={placeholder}
      name={name}
      options={options}
      value={
        options ? options.find((option) => option.value === field.value) : ''
      }
      onBlur={() => helpers.setTouched(true, false)}
      styles={customStyles}
      className={`box-border w-full text-base
      ${isError ? 'italic' : ''}`}
    />
  );
};

interface TextAreaInputProps {
  name: string;
  tabIndex?: number;
  placeholder?: string;
}

export const TextAreaInput: React.FC<TextAreaInputProps> = ({
  name,
  tabIndex,
  placeholder,
}) => {
  const [field, meta] = useField(name);
  const isError = meta.touched && meta.error;

  return (
    <textarea
      {...field}
      tabIndex={tabIndex}
      placeholder={placeholder}
      className={`block w-full border p-2 ${
        isError ? 'placeholder:text-red-700 italic' : ''
      }`}
      rows={4}
    />
  );
};
