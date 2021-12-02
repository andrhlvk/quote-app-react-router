import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useHttp from '../../hooks/useHttp';
import { getAllComments } from '../../lib/api';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { quoteId } = useParams();
  const {
    sendRequest,
    status,
    error,
    data: loadedComments,
  } = useHttp(getAllComments, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startCommentingHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
    setIsAddingComment(false);
  }, [sendRequest, quoteId]);

  let comments;

  if (status === 'pending') comments = <p>Loading comments...</p>;
  if (status === 'failed') comments = <p>{error}</p>;

  if (status === 'completed' && loadedComments && loadedComments.length > 0) {
    comments = <CommentList comments={loadedComments} />;
  }

  if (
    status === 'completed' &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p>No comments were added yet</p>;
  }

  return (
    <section>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button onClick={startCommentingHandler}>Add comment</button>
      )}
      {isAddingComment && (
        <CommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
