import React from 'react';
import { Link } from 'react-router-dom';

const QuoteItem = ({ text, author, id }) => {
  return (
    <li>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link to={`/quotes/${id}`}>View Fullscreen</Link>
    </li>
  );
};

export default QuoteItem;
