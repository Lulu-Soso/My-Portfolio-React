import React from "react";
import Page2Section1 from "../components/Page2Section1";
import Page2Section2 from "../components/Page2Section2";


const Page2 = () => {
  return (
    <div className="home-page">
      <main>
        <Page2Section1 id="page2-section1" />
        <Page2Section2 id="page2-section2" />
      </main>
    </div>
  );
};

export default Page2;
