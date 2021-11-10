import React from 'react';

import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${(props) => props.theme.color.main};
  font-size: ${(props) => props.theme.font.extraLarge};
`;

const BoxWrapper = ({ children, className }) => {
  return <H1 className={className}>{children}</H1>;
};

export default BoxWrapper;
