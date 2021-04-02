import React from 'react';

import { render } from '@testing-library/react';
import { withFormik } from 'formik';

import Form, { FormProps } from 'components/form';
import Input from 'components/input';

type TestFormValues = {
  firstName: string;
  lastName: string;
};

const TestForm = withFormik<FormProps, TestFormValues>({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
  }),
  handleSubmit: (values: TestFormValues) => JSON.stringify(values, null, 2),
})(Form);

const fields = [
  {
    id: 'firstName',
    element: <Input id='firstName' label='First name' />,
  },
  {
    id: 'lastName',
    element: <Input id='lastName' label='Last name' />,
  },
];

test('Default select', () => {
  expect(render(<TestForm fields={fields} buttonLabel='Confirm' />)).toMatchSnapshot();
});
