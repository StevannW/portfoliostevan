import React from 'react';
import './portfolio.css';
import port1 from '../../img/port1baruu.png';
import port2 from '../../img/port2baruu.png';
import port3 from '../../img/port3.png';
import CSS from '../../img/3.png';
import HTML from '../../img/4.png';
import Javascript from '../../img/JS2.png';

const Portfolio = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksdesc">Here are some of my projects that i have done.</span>
      <div className="worksImgs">
        <div className="imgContainer">
          <img src={port1} className="worksImg" />
          <h2>E-Commerce Product Page</h2>
          <h4>Technology that i used :</h4>
          <div className="iconImg">
            <img src={HTML} alt="" />
            <img src={CSS} alt="" />
            <img src={Javascript} alt="" />
          </div>
          <a href="https://stevannw.github.io/">Link Project</a>
        </div>
        <div className="imgContainer">
          <img src={port2} className="worksImg" />
          <h2>
            Insurance Company <br></br>Landing Page
          </h2>
          <h4>Technology that i used :</h4>
          <div className="iconImg">
            <img src={HTML} alt="" />
            <img src={CSS} alt="" />
          </div>
        </div>
        <div className="imgContainer">
          <img src={port3} className="worksImg" />
          <h2>XXI App (Mobile Only)</h2>
          <h4>Technology that i used :</h4>
          <div className="iconImg">
            <img src={HTML} alt="" />
            <img src={CSS} alt="" />
            <img src={Javascript} alt="" />
          </div>
          <a href="https://stevannw.github.io/XXIclone.github.io/">Link Project</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
