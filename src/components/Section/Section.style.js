import styled from 'styled-components';
import pageColors from '../../helpers/pageColors';

export const Section = styled.div`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: auto;
  background-color: ${(props) => props.background};
  box-shadow: ${(props) => props.shadow};
  height: ${(props) => props.height};

  & .flex-table {
    display: flex;
    align-items: center;
  }

  & .success-text {
    font-size: 0.85rem;
    color: ${pageColors.hover};
  }

  & .fail-text {
    font-size: 0.85rem;
    color: ${pageColors.secondary};
  }

  & .absolute {
    position: absolute;
    padding: 0 1rem;
  }
`;
