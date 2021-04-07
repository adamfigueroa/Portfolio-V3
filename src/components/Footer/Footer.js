import { A } from 'hookrouter';
import React from 'react';
import GHIcon from '../../images/Icons/github.svg';
import LIcon from '../../images/Icons/linkedin.svg';
import EIcon from '../../images/Icons/email.png';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-box">
        <p className="contact-title">Questions or Comments?</p>
        <div className="contact-icons">
          <div className="github-box">
            <A href="https://github.com/adamfigueroa" target={'_blank'}>
              <img src={GHIcon} alt="Github Icon" />
            </A>
          </div>
          <div className="linkedin-box">
            <A
              href="https://www.linkedin.com/in/adam-figueroa-76a077158/"
              target={'_blank'}
            >
              <img src={LIcon} alt="LinkedIn Icon" />
            </A>
          </div>
          <div className="contact-box">
            <A href="mailto:adamfigueroaemf@gmail.com" target={'_blank'}>
              <img src={EIcon} alt="Email Icon" className="email-icon" />
            </A>
          </div>
        </div>
        <p className="footer-copyright">Copyright Adam Figueroa 2021</p>
      </div>
    </footer>
  );
}

export default Footer;
