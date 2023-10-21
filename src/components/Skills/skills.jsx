import React from 'react';
import './skills.css';
import CSS from '../../img/3.png';
import HTML from '../../img/4.png';
import Javascript from '../../img/JS.png';
import Python2 from '../../img/python2.png';
import { motion } from 'framer-motion';
import React2 from '../../img/react2.png';

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="w-left">
        <div className="awesome">
          <span>Technology</span>
          <span>That i used</span>
          <span>
            Here are some technologies that i use to build my projects.
            <br />
            There are many more technologies that i use to build projects such as C language, Bootstrap, etc.
          </span>
          <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
        </div>
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle html">
            <img src={HTML} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={CSS} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Javascript} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={React2} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Python2} alt="" />
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Skills;
