# Qimpl Components

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-airbnb-brightgreen.svg)](https://airbnb.io/javascript/)

## Install

```bash
npm install --save components-library
```

## Components

- Anchor
- Button
- Text
- Title

## Usage

JavaScript :

```jsx
import React from 'react';

import { Button, Theme } from '@qimpl/components-library';

const Example = () => (
  <Button handleClick={() => console.log('clicked')} color={Theme.colors.primary}>
    My button
  </Button>
);

export default Example;
```

TypeScript :

```tsx
import React from 'react';

// Components props type can be imported
// import { ButtonProps } from '@qimpl/components-library';
import { Button, Theme } from '@qimpl/components-library';

const Example = (): React.ReactElement => (
  <Button handleClick={() => console.log('clicked')} color={Theme.colors.primary}>
    My button
  </Button>
);

export default Example;
```
