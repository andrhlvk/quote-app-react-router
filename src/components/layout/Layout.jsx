import React from 'react';
import Header from './Header';

const Layout = props => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      {/* Footer */}
    </>
  );
};

export default Layout;
