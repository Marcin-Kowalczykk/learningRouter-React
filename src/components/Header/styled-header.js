import styled from 'styled-components';

export const Text = styled.h1`
  color: ${(props) => props.theme.color.text};
  padding: 1em;
`;

export const Wrapper = styled.div`
  background: ${(props) => props.theme.color.background};
  padding: 1em;
`;

export const Button = styled.button`
  border: none;
  background: tomato;
  padding: 1em;
  cursor: pointer;
`;
