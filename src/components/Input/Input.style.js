import styled from 'styled-components';

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;

  & label {
    color: blue;
  }

  & input {
    padding: 0.25rem 0;
    border: none;
    border-bottom: 1px solid blue;
  }
`;
