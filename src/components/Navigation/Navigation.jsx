import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Navigation.style';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <S.Navigation>
      <div className='nav-wrapper'>
        <nav>
          <NavLink activeclassname='active' to='/'>
            Home
          </NavLink>
          <NavLink activeclassname='active' to='/login'>
            Login
          </NavLink>
          <NavLink activeclassname='active' to='/register'>
            Register
          </NavLink>
        </nav>
      </div>
    </S.Navigation>
  );
};

export default Navigation;
