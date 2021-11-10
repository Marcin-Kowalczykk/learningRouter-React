import styled from 'styled-components';

export const Button = styled.button`
  color: ${(props) => props.theme.color.normal};
  border: none;
  background: tomato;
  padding: 1em;
  cursor: pointer;
`;
