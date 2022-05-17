import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Section.style';

const Section = ({ children, maxWidth, padding, background, shadow }) => {
  return (
    <S.Section
      background={background}
      shadow={shadow}
      maxWidth={maxWidth}
      padding={padding}
    >
      {children}
    </S.Section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
  background: PropTypes.string,
  shadow: PropTypes.string,
};

export default Section;
