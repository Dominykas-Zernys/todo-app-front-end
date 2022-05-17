import styled from 'styled-components';
import pageColors from '../../helpers/pageColors';

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  flex: 1;

  & label {
    color: ${pageColors.primary};
    font-size: 1.25rem;
    font-weight: 900;
  }

  & input {
    padding: 0.25rem 0;
    border: none;
    border-bottom: 1px solid ${pageColors.primary};
    background-color: inherit;

    &:focus {
      outline: none;
    }
  }
`;
