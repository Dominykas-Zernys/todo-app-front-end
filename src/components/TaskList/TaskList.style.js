import styled from 'styled-components';
import pageColors from '../../helpers/pageColors';

export const TaskList = styled.div`
  & h3 {
    color: ${pageColors.primary};
    font-size: 1.25rem;
  }

  & div:first-child {
    border: none;
  }
`;
