import React, { useEffect } from 'react';

import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/useHttp';
import { useNavigate } from 'react-router';
// import { useHistory } from 'react-router';
import { addQuote } from '../lib/api';

const NewQuote = () => {
  const navigate = useNavigate();
  const { sendRequest, status, error } = useHttp(addQuote);
  // const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      navigate('/quotes');
    }
  }, [status, navigate]);

  // useEffect(() => {
  //   if (status === 'completed') {
  //     history.push('/quotes');
  //   }
  // }, [status, history]);

  const addQuoteHandler = quoteData => {
    sendRequest(quoteData);
  };

  if (status === 'failed') {
    return <p>{error}</p>;
  }

  return (
    <QuoteForm onAddQuote={addQuoteHandler} isLoading={status === 'pending'} />
  );
};

export default NewQuote;
