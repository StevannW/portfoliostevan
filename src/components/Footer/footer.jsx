import React from 'react';
import './footer.css';
import Wave from '../../img/wave.png';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <img src={Wave} alt="wave" style={{ width: '100%' }} />
      <div className="f-content">
        <span>stevanuswahyu2707@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/stevaanw/">
            <Instagram color="white" size="3rem" />
          </a>
          <a href="https://github.com/StevannW">
            <Github color="white" size="3rem" />
          </a>
          <a href="https://www.linkedin.com/in/stevanus-wahyu-01351023a/">
            <LinkedIn color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
