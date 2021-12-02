import React from 'react';

const CommentItem = ({ text }) => {
  return (
    <li>
      <p>{text}</p>
      <p>by Anonymous</p>
    </li>
  );
};

export default CommentItem;
