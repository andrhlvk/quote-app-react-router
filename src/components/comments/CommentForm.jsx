import { addComment } from '../../lib/api';
import React, { useEffect, useRef } from 'react';
import useHttp from '../../hooks/useHttp';

const isEmpty = value => value.trim() === '';

const CommentForm = ({ onAddedComment, quoteId }) => {
  const commentRef = useRef();
  const { sendRequest, status, error } = useHttp(addComment);

  useEffect(() => {
    if (status === 'completed' && !error) onAddedComment();
  }, [status, error, onAddedComment]);

  const submitHandler = event => {
    event.preventDefault();

    const enteredComment = commentRef.current.value;
    if (isEmpty(enteredComment)) return;

    sendRequest({
      commentData: { text: enteredComment },
      quoteId,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      {status === 'pending' && <p>Posting your comment...</p>}
      {status === 'failed' && <p>Failed to post your comment ({error})</p>}
      <label htmlFor='comment'>Enter your comment:</label>
      <textarea ref={commentRef} id='comment' cols='20' rows='3'></textarea>
      <button>Post comment</button>
    </form>
  );
};

export default CommentForm;
