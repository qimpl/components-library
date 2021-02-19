type LinkProps = {
  href: string;
  title: string;
  children: React.ReactNode;
  target?: string;
  linkStyle?: AnchorStyleProps;
};

type AnchorStyleProps = {
  color: string;
  hoverColor?: string;
};

export { AnchorStyleProps, LinkProps };
