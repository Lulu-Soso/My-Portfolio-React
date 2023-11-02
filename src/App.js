import React from 'react';
import { Outlet } from 'react-router-dom';
import BackToTopButton from './components/BackToTopButton';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="app-container">
      <SideBar />
      {/* <Header /> */}
      <main className="main">
        <Outlet />
      </main>
      <NavBar />
      <BackToTopButton />
      {/* <Footer /> */}
    </div>
  )
}

export default App