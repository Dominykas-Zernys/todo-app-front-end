import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Task = styled.div`
  padding: 0.1rem 0;
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  align-items: center;
  justify-items: center;

  & p {
    justify-self: left;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #e73832;
  cursor: pointer;
`;
