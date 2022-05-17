import React from 'react';
import Navigation from './Navigation';

const sampleLinks = [
  { id: 1, link: '/', title: 'about' },
  { id: 2, link: '/', title: 'home' },
  { id: 3, link: '/', title: 'login' },
  { id: 4, link: '/', title: 'register' },
];

export const SampleNav = () => <Navigation navLinks={sampleLinks} />;

export default {
  title: 'Navigation',
  component: Navigation,
};
