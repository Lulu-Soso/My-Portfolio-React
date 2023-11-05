import React from "react";
import StandingDesk from "../assets/standing-desk.svg";

const HomeSection1 = () => {
  return (
    <section id="section1">
      <img src={StandingDesk} alt="" />
      <div className="picture-profile">Yoyo</div>
      <div className="description-profile">
        <h2>Lucas Prea</h2>
      </div>
    </section>
  );
};

export default HomeSection1;
