import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from './img404.png';

const NotFound = () => {
  return (
    <>
      <img width='400px' src={notFoundImg} alt='404 page not found' />
      <Link to='/'>Go to home page</Link>
    </>
  );
};

export default NotFound;
