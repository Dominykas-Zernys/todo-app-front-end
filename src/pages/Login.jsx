import React, { useState } from 'react';
import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import pageColors from '../helpers/pageColors';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFail, setLoginFail] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  function submitHandler(e) {
    setLoginFail(false);
    setLoginSuccess(false);
    e.preventDefault();
    if (!email.length || !password.length) {
      setLoginFail(true);
      return;
    }
    console.log({ email, password });
    setLoginSuccess(true);
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
        <Header background={pageColors.secondary}>Login</Header>
        <form
          onSubmit={submitHandler}
          onChange={() => {
            setLoginFail(false);
            setLoginSuccess(false);
          }}
        >
          <Input
            value={email}
            setState={setEmail}
            labelText='Email:'
            placeHolder='Your email'
            type='email'
          />
          <Input
            value={password}
            setState={setPassword}
            labelText='Password:'
            placeHolder='Your password'
            type='password'
          />
          <Section padding={'1.5rem 0 0'}>
            <Button color={pageColors.primary}>Submit</Button>
            {loginFail && (
              <span className='fail-text'>
                {!email.length || !password.length
                  ? 'You have to fill in all the fields!'
                  : 'Email or password is not correct!'}
              </span>
            )}
          </Section>
        </form>
      </Section>
    </Section>
  );
};

export default Login;
