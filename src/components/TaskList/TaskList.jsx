import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import * as S from './TaskList.style';

const TaskList = ({ tasks }) => {
  return (
    <S.TaskList>
      <h3>To-dos:</h3>
      {tasks.map((taskObj) => (
        <Task key={taskObj.id} task={taskObj.task} />
      ))}
    </S.TaskList>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TaskList;
