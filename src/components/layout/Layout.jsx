import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import BackToTopButton from '../common/BackToTopButton/BackToTopButton';

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle = {
  flex: 1,
};

function Layout() {
  return (
    <div style={layoutStyle}>
      <Header />
      <BackToTopButton />
      <main style={mainStyle}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;