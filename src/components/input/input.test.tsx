import React from 'react';

import { render } from '@testing-library/react';

import Input from 'components/input';

test('Default Input', () => {
  expect(
    render(
      <Input id='username' label='Username' type='text' onChange={() => 'changed'} onBlur={() => 'blurred'} value='' />
    )
  ).toMatchSnapshot();
});

test('Error Input', () => {
  expect(
    render(
      <Input
        id='email'
        label='Email'
        type='email'
        onChange={() => 'changed'}
        onBlur={() => 'blurred'}
        value='test.foo.com'
        error='Invalid Email'
      />
    )
  ).toMatchSnapshot();
});

test('Input With no label', () => {
  expect(render(<Input id='nolabel' onChange={() => 'changed'} onBlur={() => 'blurred'} value='' />)).toMatchSnapshot();
});

test('Input With placeholder', () => {
  expect(
    render(
      <Input
        id='placeholder'
        onChange={() => 'changed'}
        onBlur={() => 'blurred'}
        value=''
        placeholder='My placeholder'
      />
    )
  ).toMatchSnapshot();
});
