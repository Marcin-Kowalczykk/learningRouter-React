import styled from 'styled-components';

export const Text = styled.h1`
  color: ${(props) => props.theme.color.text};
`;

export const Wrapper = styled.div`
  background: ${(props) => props.theme.color.background};
`;
