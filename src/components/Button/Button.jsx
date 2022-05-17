import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ children, handleClick, color, activeColor }) => {
  return (
    <S.Button color={color} onClick={handleClick} activeColor={activeColor}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  activeColor: PropTypes.string,
};

export default Button;
