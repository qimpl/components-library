import React from 'react';

import styled from 'styled-components';

import LinkProps from 'link/link.d';
import { ColorVariant, getColorString } from 'theme/theme';

const Anchor = styled.a`
  color: ${(props) => props.color};
  line-height: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Link = ({
  href,
  title,
  children,
  target = '_self',
  color = ColorVariant.PRIMARY,
}: LinkProps): React.ReactNode => (
  <Anchor href={href} title={title} target={target} color={getColorString(color)}>
    {children}
  </Anchor>
);

export default Link;
