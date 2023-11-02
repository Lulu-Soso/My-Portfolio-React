import React from 'react';
// import SideBar from '../components/SideBar';
import HomeSection1 from '../components/HomeSection1';
import HomeSection2 from '../components/HomeSection2';
import HomeSection3 from '../components/HomeSection3';
import HomeSection4 from '../components/HomeSection4';
// import NavBar from '../components/NavBar';

const HomePage = () => {

  return (
    <div className="home-page">
      {/* <SideBar/> */}
      <main>
        <HomeSection1 id="section1"/>
        <HomeSection2 id="section2" />
        <HomeSection3 id="section3" />
        <HomeSection4 id="section4" />
      </main>
      {/* <NavBar /> */}
    </div>
  );
};

export default HomePage;
