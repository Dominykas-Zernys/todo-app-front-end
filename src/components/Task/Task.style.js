import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pageColors from '../../helpers/pageColors';

export const Task = styled.div`
  padding: 0.1rem 0;
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  align-items: center;
  justify-items: center;
  border-top: 1px solid ${pageColors.primary};

  & input {
    cursor: pointer;
  }

  & p {
    margin: 0;
    padding: 16px 0;
    justify-self: left;
    width: 100%;
    cursor: pointer;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${pageColors.secondary};
  cursor: pointer;
`;
