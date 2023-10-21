import React from 'react';
import './intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Profil from '../../img/baru.png';

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="name">
          <span>Hi! I am</span>
          <span>Stevanus Wahyu</span>
          <span>I'm a Computer Engineering Student at Telkom University.</span>
        </div>

        <div className="icons">
          <a href="https://github.com/StevannW">
            <img src={Github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/stevanus-wahyu-01351023a/">
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/stevaanw/">
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Profil} alt="" />
      </div>
    </div>
  );
};

export default Intro;
