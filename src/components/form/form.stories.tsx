import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withFormik } from 'formik';

import Form, { FormProps } from 'components/form';
import Input from 'components/input';

export default {
  title: 'Qimpl/Form',
  component: Form,
} as Meta;

type MyFormValues = {
  firstName: string;
  lastName: string;
};

const MyForm = withFormik<FormProps, MyFormValues>({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
  }),
  handleSubmit: (values: MyFormValues) => JSON.stringify(values, null, 2),
})(Form);

const fields = [
  {
    id: 'firstName',
    element: <Input id='firstName' label='First name' type='text' />,
  },
  {
    id: 'lastName',
    element: <Input id='lastName' label='Last name' type='text' />,
  },
];

export const simpleForm: Story<FormProps> = (): React.ReactElement => <MyForm fields={fields} buttonLabel='Confirm' />;
