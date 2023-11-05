import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import BackToTopButton from "./components/BackToTopButton";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
// Project1
import HeaderP1 from "./Project1/components/HeaderP1";

const App = () => {
  const location = useLocation();

  // Condition pour déterminer si Project1 doit être rendu
  const shouldRenderProject1 = location.pathname === "/project1";

  return (
    <>
      {shouldRenderProject1 ? (
        <>
        <HeaderP1 />
        <Outlet />
        <NavBar />
          <BackToTopButton />
          </>
      ) : (
        <div className="home-page">
          <SideBar />
          <main className="main">
            <Outlet />
          </main>
          <NavBar />
          <BackToTopButton />
        </div>
      )}
    </>
  );
};

export default App;
