import React, { forwardRef } from 'react';

import { darken } from 'polished';
import styled from 'styled-components';

import Theme from 'theme';

type AnchorProps = {
  title: string;
  children: React.ReactNode;
  href?: string;
  target?: string;
  anchorStyle?: AnchorStyleProps;
  noUnderline?: boolean;
};

type AnchorStyleProps = {
  color: string;
  hoverColor?: string;
};

const A = styled.a`
  color: ${({ anchorStyle }: AnchorProps) => anchorStyle?.color};
  line-height: 20px;
  text-decoration: none;
  transition: color ease-in-out 0.2s;

  &::after {
    display: ${({ noUnderline }: AnchorProps) => (noUnderline ? 'none' : 'block')};
    width: 0;
    height: 1px;
    background-color: ${({ anchorStyle }: AnchorProps) => anchorStyle?.color};
    transition: all ease-in-out 0.2s;
    content: '';
  }

  &:hover {
    color: ${({ anchorStyle }: AnchorProps) => anchorStyle?.hoverColor};

    &::after {
      width: 100%;
      background-color: ${({ anchorStyle }: AnchorProps) => anchorStyle?.hoverColor};
    }
  }
`;

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  (
    {
      href,
      title,
      children,
      target = '_self',
      anchorStyle = {
        color: Theme.colors.primary,
        hoverColor: darken(0.1, Theme.colors.primary),
      },
      noUnderline = false,
    },
    ref
  ): React.ReactElement => (
    <A ref={ref} href={href} title={title} target={target} anchorStyle={anchorStyle} noUnderline={noUnderline}>
      {children}
    </A>
  )
);

Anchor.defaultProps = {
  href: '#',
  target: '_self',
  anchorStyle: {
    color: Theme.colors.primary,
    hoverColor: darken(0.1, Theme.colors.primary),
  },
  noUnderline: false,
};

Anchor.displayName = 'Anchor';

export default Anchor;
export { AnchorProps };
