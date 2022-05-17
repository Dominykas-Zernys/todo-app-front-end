import styled from 'styled-components';

export const Navigation = styled.div`
  background-color: green;
  & .nav-wrapper {
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: right;
    padding: 0.75rem 0;
  }

  & nav {
    height: 100%;
  }

  & nav > a {
    padding: 0.75rem 0.5rem;
    height: 100%;
    text-decoration: none;
    color: white;
    :hover {
      background-color: #063806;
    }
  }
`;
