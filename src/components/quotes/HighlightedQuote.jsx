import React from 'react';

const HighlightedQuote = ({ text, author }) => {
  return (
    <figure>
      <blockquote>
        <p>{text}</p>
      </blockquote>
      <figcaption>{author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
