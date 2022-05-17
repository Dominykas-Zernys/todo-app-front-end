import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Section.style';

const Section = ({ children, width, padding, background, shadow, height }) => {
  return (
    <S.Section
      background={background}
      shadow={shadow}
      width={width}
      padding={padding}
      height={height}
    >
      {children}
    </S.Section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  padding: PropTypes.string,
  background: PropTypes.string,
  shadow: PropTypes.string,
  height: PropTypes.string,
};

export default Section;
