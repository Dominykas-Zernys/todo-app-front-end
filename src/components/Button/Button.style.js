import styled from 'styled-components';

export const Button = styled.button`
  padding: 1rem 2rem;
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  font-family: inherit;

  &:hover {
    opacity: 0.65;
  }

  &:active {
    background-color: ${(props) => props.activeColor};
  }
`;
