import React from 'react';

import { darken } from 'polished';
import styled from 'styled-components';

import { LinkProps } from 'components/link/link.d';
import Theme from 'theme/theme';

const Anchor = styled.a`
  color: ${({ linkStyle }: LinkProps) => linkStyle?.color};
  line-height: 20px;
  text-decoration: none;
  transition: color ease-in-out 0.2s;

  &:after {
    content: '';
    background-color: ${({ linkStyle }: LinkProps) => linkStyle?.color};
    height: 1px;
    width: 0;
    display: block;
    transition: all ease-in-out 0.2s;
  }

  &:hover {
    color: ${({ linkStyle }: LinkProps) => linkStyle?.hoverColor};

    &::after {
      background-color: ${({ linkStyle }: LinkProps) => linkStyle?.hoverColor};
      width: 100%;
    }
  }
`;

const Link = ({
  href,
  title,
  children,
  target = '_self',
  linkStyle = {
    color: Theme.colors.primary,
    hoverColor: darken(0.1, Theme.colors.primary),
  },
}: LinkProps): React.ReactElement => (
  <Anchor href={href} title={title} target={target} linkStyle={linkStyle}>
    {children}
  </Anchor>
);

export default Link;
