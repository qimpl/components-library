const Colors = {
  Primary: {
    color: 'rgb(1, 60, 99)',
  },
  Secondary: {
    color: 'rgb(255,255,255)',
  },
};

type ColorsProps = {
  color: string;
};

enum ColorVariant {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export { Colors, ColorsProps, ColorVariant };
