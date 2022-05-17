import styled from 'styled-components';
import pageColors from '../../helpers/pageColors';

export const Header = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background};
  color: ${pageColors.background};

  & h1 {
    margin: 0;
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
  }
`;
