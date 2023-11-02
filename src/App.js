import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-container">
      {/* <Header /> */}
      <main className="main">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App