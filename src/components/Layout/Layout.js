import React from 'react';
import NavbarComp from './NavbarComp';

const Layout = props => {
  return (
    <>
      <NavbarComp />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
