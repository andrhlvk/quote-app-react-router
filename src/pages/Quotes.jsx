import React, { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import useHttp from '../hooks/useHttp';
import { getAllQuotes } from '../lib/api';

const Quotes = () => {
  const {
    sendRequest,
    status,
    error,
    data: fetchedQuotes,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>{error}</p>;
  }

  if (status === 'completed' && fetchedQuotes.length === 0) {
    return <p>No quotes added yet :(</p>;
  }

  return <QuoteList quotes={fetchedQuotes} />;
};

export default Quotes;
