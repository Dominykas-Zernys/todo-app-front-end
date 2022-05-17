import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Navigation.style';
import { NavLink, Router } from 'react-router-dom';

const Navigation = ({ navLinks }) => {
  return (
    <S.Navigation>
      <div className='nav-wrapper'>
        <nav>
          {navLinks.map((navLink) => (
            <a href={navLink.link}>{navLink.title}</a>
          ))}
        </nav>
      </div>
    </S.Navigation>
  );
};

Navigation.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;
