import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.color.background};
`;

const BoxWrapper = ({ children, className, id }) => {
  return (
    <Wrapper className={className} id={id}>
      {children}
    </Wrapper>
  );
};

export default BoxWrapper;
