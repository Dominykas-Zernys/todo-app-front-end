import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.style';

const Input = ({ labelText, placeHolder }) => {
  return (
    <S.Input>
      <label htmlFor=''>{labelText}</label>
      <input type='text' placeholder={placeHolder} />
    </S.Input>
  );
};

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
};

export default Input;
