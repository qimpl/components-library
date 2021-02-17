enum TitleVariant {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
}

type TitleProps = {
  variant: TitleVariant;
  children: React.ReactNode;
  color?: string;
};

type StyledTitleProps = {
  fontSize: string;
  titleColor: string;
};

export { TitleVariant, TitleProps, StyledTitleProps };
