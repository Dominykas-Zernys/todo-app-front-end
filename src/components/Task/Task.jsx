import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Task.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function handleIconClick() {
  console.log('handleIconClick');
}

const Task = ({ task }) => {
  const [checked, setChecked] = useState(false);

  function handleCheckClick() {
    setChecked((prevState) => !prevState);
  }

  return (
    <S.Task>
      <input type='checkbox' onChange={handleCheckClick} checked={checked} />
      <p onClick={handleCheckClick}>{task}</p>
      <S.Icon onClick={handleIconClick} icon='fa-solid fa-circle-xmark' />
    </S.Task>
  );
};

Task.propTypes = { task: PropTypes.string.isRequired };

export default Task;
