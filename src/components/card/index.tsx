import React from 'react';

import styled from 'styled-components';

import Theme from 'theme';

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 220px;
  padding: 20px 0 20px 0;
  border-bottom: 1px solid ${Theme.colors.lightGray};
`;

type CardProps = {
  children: React.ReactElement;
};

const Card = ({ children }: CardProps): React.ReactElement => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
export { CardProps };
