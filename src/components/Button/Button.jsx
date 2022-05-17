import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ children, color, activeColor }) => {
  return (
    <S.Button color={color} activeColor={activeColor}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  activeColor: PropTypes.string,
};

export default Button;
