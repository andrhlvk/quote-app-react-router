import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import QuoteItem from './QuoteItem';

const sortQuotes = (quotes, ascending) => {
  if (ascending) {
    return quotes.sort((quoteA, quoteB) =>
      quoteA.author.localeCompare(quoteB.author)
    );
  } else {
    return quotes.sort((quoteA, quoteB) =>
      quoteB.author.localeCompare(quoteA.author)
    );
  }
};

const QuoteList = ({ quotes }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);

  const isSortAsc = queryParams.get('sort') === 'asc';

  let loadedQuotes = quotes;

  if (location.search) loadedQuotes = sortQuotes(quotes, isSortAsc);

  const changeSortingHandler = () => {
    navigate({
      pathname: location.pathname,
      search: `?sort=${isSortAsc ? 'dsc' : 'asc'}`,
    });
  };

  return (
    <>
      <button onClick={changeSortingHandler}>
        Sort by Author ({isSortAsc ? 'Descending' : 'Ascending'})
      </button>
      <ul>
        {loadedQuotes.map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            text={quote.text}
            author={quote.author}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;

const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5, 6];

function arrDiff(a1, a2) {
  return a1.filter(el => !a2.includes(el));
}

console.log(arrDiff(arr1, arr2));
