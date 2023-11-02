import React from "react";
// import SideBar from "../components/SideBar";
// // import NavBar from "../components/NavBar";
import Page1Section1 from '../components/Page1Section1';
import Page1Section2 from '../components/Page1Section2';

const Page1 = () => {
  return (
    <div className="home-page">
      <main>
        <Page1Section1 id="page1-section1"/>
        <Page1Section2 id="page1-section2"/>
      </main>
    </div>
  );
};

export default Page1;
