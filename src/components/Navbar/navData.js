import React from 'react';
import * as FaIcons from 'react-icons/fa';

const links = [
  {
    id: 1,
    title: 'CLASSES',
    path: '/',
  },
  {
    id: 2,
    title: 'ADD CLASS',
    path: 'add-class',
  },
  {
    id: 3,
    title: 'MY RESERVATIONS',
    path: 'reserve',
  },
  {
    id: 4,
    title: 'SIGNUP',
    path: 'signup',
  },
];

export default links;

export const logos = [
  <FaIcons.FaTwitter key="1" />,
  <FaIcons.FaFacebook key="2" />,
  <FaIcons.FaGooglePlus key="3" />,
  <FaIcons.FaVimeo key="4" />,
  <FaIcons.FaPinterest key="5" />,
];
