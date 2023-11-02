import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
// import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';

const Contact = () => {
  return (
    <div className="home-page">
      <SideBar/>
      <main>
        {/* <Section1 id="section1"/> */}
        <Section2 id="section2" />
        <Section3 id="section3" />
        <Section4 id="section4" />
      </main>
      <NavBar />
    </div>
  );
};

export default Contact;
