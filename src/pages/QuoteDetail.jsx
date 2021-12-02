import React, { useEffect } from 'react';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/useHttp';
import { Outlet, useParams } from 'react-router';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const {
    sendRequest,
    status,
    error,
    data: fetchedQuote,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>{error}</p>;
  }

  return (
    <>
      <HighlightedQuote text={fetchedQuote.text} author={fetchedQuote.author} />
      <Outlet />
    </>
  );
};

export default QuoteDetail;
