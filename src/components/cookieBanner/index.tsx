import React from 'react';

import CookieConsent from 'react-cookie-consent';
import useWindowSize from 'react-use/lib/useWindowSize';

import Theme from 'theme';

import Title, { TitleVariant } from '../title';

type CookieBannerProps = {
  message: string;
  buttonText: string;
  ariaAcceptLabel: string;
  titleContent?: string | React.ReactElement | null;
  debug?: boolean;
};

const CookieBanner = ({
  message,
  buttonText,
  ariaAcceptLabel,
  titleContent = null,
  debug = false,
}: CookieBannerProps): React.ReactElement => {
  const { width } = useWindowSize();

  const ContainerStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    margin: '10px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '22px',
    boxShadow: '0 0 19px 3px rgba(0, 0, 0, 0.2)',
    flexDirection: width <= 768 ? 'column' : 'row',
  };

  const ContentStyle = {
    color: Theme.colors.primary,
    flex: width <= 768 ? '1' : '1 0 300px',
  };

  const ButtonStyle = {
    width: '150px',
    height: '40px',
    padding: '13px 10px',
    color: 'white',
    backgroundColor: Theme.colors.primary,
    borderRadius: '50px',
  };

  return (
    <CookieConsent
      debug={debug}
      cookieName='AcceptQimplCookie'
      ariaAcceptLabel={ariaAcceptLabel}
      buttonText={buttonText}
      style={ContainerStyle}
      contentStyle={ContentStyle}
      buttonStyle={ButtonStyle}
    >
      <Title variant={TitleVariant.H3}>{titleContent}</Title>
      {message}
    </CookieConsent>
  );
};

CookieBanner.defaultProps = {
  titleContent: null,
  debug: false,
};

export default CookieBanner;
export { CookieBannerProps };
