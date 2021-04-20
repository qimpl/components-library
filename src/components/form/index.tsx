import React from 'react';

import { Form as FormikForm, FormikProps } from 'formik';

import Button from '../button';

type Field = {
  id: string;
  element: React.ReactElement;
};

type FormProps = {
  fields: Field[];
  buttonLabel: string;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const Form = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  values,
  isSubmitting,
  setFieldValue,
  fields,
  buttonLabel,
}: FormProps & FormikProps<any>): React.ReactElement => (
  <FormikForm>
    {fields.map(
      (field: Field): React.ReactElement => (
        <div key={field.id}>
          {React.cloneElement(field.element, {
            onChange:
              field.element.props.type === 'file'
                ? (event: React.ChangeEvent<HTMLInputElement>) => {
                    setFieldValue(field.id, event.target.files);
                  }
                : handleChange,
            onBlur: handleBlur,
            value: field.element.props.type === 'file' ? undefined : values[field.id],
            error: touched[field.id] && errors[field.id] ? errors[field.id] : null,
          })}
        </div>
      )
    )}
    <Button type='submit' isDisabled={isSubmitting}>
      {buttonLabel}
    </Button>
  </FormikForm>
);
/* eslint-enable @typescript-eslint/no-explicit-any */

export { FormProps };
export default Form;
