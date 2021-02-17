import React from 'react';

import styled from 'styled-components';

import LinkProps from 'components/link/link';
import Theme from 'theme/theme';

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
  color = Theme.colors.primary,
}: LinkProps): React.ReactElement => (
  <Anchor href={href} title={title} target={target} color={color}>
    {children}
  </Anchor>
);

export default Link;
