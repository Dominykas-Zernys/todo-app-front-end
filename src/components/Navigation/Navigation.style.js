import styled from 'styled-components';
import pageColors from '../../helpers/pageColors';

export const Navigation = styled.div`
  background-color: ${pageColors.primary};
  box-shadow: 0 5px 10px ${pageColors.shadow};

  & .nav-wrapper {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: right;
    padding: 1rem 0;
  }

  & nav {
    height: 100%;
  }

  & nav > a {
    padding: 1rem;
    height: 100%;
    text-decoration: none;
    color: ${pageColors.background};
    :hover {
      background-color: ${pageColors.hover};
    }
  }

  & .active {
    background-color: ${pageColors.secondary};
  }
`;
