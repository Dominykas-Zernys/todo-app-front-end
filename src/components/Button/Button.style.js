import styled from 'styled-components';

export const Button = styled.button`
  padding: 1rem 2rem;
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  font-family: inherit;
  cursor: pointer;
  margin: 0 1rem;

  &:hover {
    opacity: 0.75;
  }

  &:active {
    opacity: 1;
  }
`;
