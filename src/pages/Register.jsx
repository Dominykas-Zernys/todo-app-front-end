import React, { useState } from 'react';
import Section from '../components/Section/Section';
import pageColors from '../helpers/pageColors';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [regFail, setRegFail] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);

  function submitHandler(e) {
    setRegFail(false);
    setRegSuccess(false);
    e.preventDefault();
    if (!email || !password) {
      setRegFail(true);
      return;
    }
    console.log({ email, password });
    setRegSuccess(true);
    setEmail('');
    setPassword('');
  }

  return (
    <Section padding='5rem' height='100vh'>
      <Section
        width='40%'
        background={pageColors.background}
        shadow={`10px 10px 10px ${pageColors.shadow}`}
        padding='0 0 1rem'
      >
        <Header background={pageColors.secondary}>Register</Header>
        <form
          onSubmit={submitHandler}
          onChange={() => {
            setRegFail(false);
            setRegSuccess(false);
          }}
        >
          <Input
            setState={setEmail}
            value={email}
            labelText='Email:'
            placeHolder='Your email'
            type='email'
          />
          <Input
            setState={setPassword}
            value={password}
            labelText='Password:'
            placeHolder='Your password'
            type='password'
          />
          <Section padding={'1.5rem 0 0'}>
            <Button color={pageColors.primary}>Submit</Button>
            {regSuccess && (
              <span className='success-text'>Registration successful!</span>
            )}
            {regFail && (
              <span className='fail-text'>
                {!email.length || !password.length
                  ? 'You have to fill in all the fields!'
                  : 'Some fields are not filled in correctly!'}
              </span>
            )}
          </Section>
        </form>
      </Section>
    </Section>
  );
};

Register.propTypes = {};

export default Register;
