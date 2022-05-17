import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import Section from '../components/Section/Section';
import TaskList from '../components/TaskList/TaskList';
import pageColors from '../helpers/pageColors';

const tasks = [
  { id: 1, task: 'do something' },
  { id: 2, task: 'do something else' },
  { id: 3, task: 'do something completely else' },
  { id: 4, task: 'do something completely else and then some' },
  { id: 5, task: 'do something completely else and then something else' },
];

const Home = () => {
  const [todo, setTodo] = useState('');
  const [submitFail, setSubmitFail] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  function submitHandler(e) {
    setSubmitFail(false);
    setSubmitSuccess(false);
    e.preventDefault();
    if (!todo.length) {
      setSubmitFail(true);
      return;
    }
    console.log(todo);
    setSubmitSuccess(true);
    setTodo('');
  }

  return (
    <Section padding='5rem' height='100vh'>
      <Section
        width='50%'
        background={pageColors.background}
        shadow={`10px 10px 10px ${pageColors.shadow}`}
      >
        <Header background={pageColors.secondary}>To-do List</Header>
        <form
          onChange={() => {
            setSubmitFail(false);
            setSubmitSuccess(false);
          }}
          className='flex-table'
          onSubmit={submitHandler}
        >
          <Input
            type='text'
            value={todo}
            setState={setTodo}
            labelText='Add new to-do:'
            placeHolder='New to-do'
          />
          <Button color={pageColors.primary}>Submit</Button>
        </form>

        {submitFail && (
          <span className='fail-text absolute'>Something went wrong</span>
        )}
        {submitSuccess && (
          <span className='success-text absolute'>New to-do added!</span>
        )}
        <Section padding='0.5rem 1rem 0 1rem'>
          <TaskList tasks={tasks} />
        </Section>
        <Section padding='0 0 1rem'>
          <Button
            color={pageColors.secondary}
            activeColor={pageColors.secondary}
          >
            Delete selected
          </Button>
        </Section>
      </Section>
    </Section>
  );
};

export default Home;
