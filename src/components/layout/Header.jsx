import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to='/'>Quotes App</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to='/quotes'>All Quotes</Link>
          </li>
          <li>
            <Link to='/new-quote'>New Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
