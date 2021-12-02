import React, { Suspense } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
// import NewQuote from './pages/NewQuote';
// import QuoteDetail from './pages/QuoteDetail';
// import Quotes from './pages/Quotes';
// import NotFound from './pages/NotFound';
import Comments from './components/comments/Comments';

const Quotes = React.lazy(() => import('./pages/Quotes'));
const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/' element={<Navigate replace to='/quotes' />} />
          <Route path='/quotes' element={<Quotes />} />
          <Route path='/quotes/:quoteId' element={<QuoteDetail />}>
            <Route path='' element={<Link to='comments'>View comments</Link>} />
            <Route path='comments' element={<Comments />} />
          </Route>
          <Route path='/new-quote' element={<NewQuote />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
