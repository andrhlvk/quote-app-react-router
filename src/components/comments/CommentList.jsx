import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map(comment => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentList;
