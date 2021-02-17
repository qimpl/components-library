import { ColorVariant } from 'theme/theme';

type LinkProps = {
  href: string;
  title: string;
  children: React.ReactNode;
  target?: string;
  color?: ColorVariant;
};

export default LinkProps;
