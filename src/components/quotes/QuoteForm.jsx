import React, { useRef } from 'react';

const isEmpty = value => value.trim() === '';

const QuoteForm = ({ onAddQuote, isLoading }) => {
  const quoteRef = useRef();
  const authorRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const enteredQuote = quoteRef.current.value;
    const enteredAuthor = authorRef.current.value;

    if (isEmpty(enteredQuote) || isEmpty(enteredAuthor)) return;

    onAddQuote({
      text: enteredQuote,
      author: enteredAuthor,
    });
  };

  if (isLoading) return <p>Posting your quote...</p>;

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='quote'>Quote:</label>
        <textarea ref={quoteRef} id='quote' cols='20' rows='3'></textarea>
      </div>
      <div>
        <label htmlFor='author'>Author:</label>
        <input ref={authorRef} type='text' id='author' />
      </div>
      <button>Add quote</button>
    </form>
  );
};

export default QuoteForm;
