import styled from 'styled-components';

export const Section = styled.section`
  max-width: ${(props) => props.maxWidth};
  padding: ${(props) => props.padding};
  margin: auto;
  background-color: ${(props) => props.background};
  box-shadow: ${(props) => props.shadow};
`;
