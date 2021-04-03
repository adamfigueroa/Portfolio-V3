import myPhoto from './images/me.jpg';
import JSLogo from './images/Icons/javascript.svg';
import JQLogo from './images/Icons/jquery.svg';
import RLogo from './images/Icons/react.svg';
import HLogo from './images/Icons/html5.svg';
import CSSLogo from './images/Icons/css3.svg';
import NLogo from './images/Icons/nodejs.svg';
import EXLogo from './images/Icons/express.svg';
import PSQLLogo from './images/Icons/postgresql.svg';
import KLogo from './images/Icons/knex.png';
import MLogo from './images/Icons/mocha.svg';
import NPMLogo from './images/Icons/npm.svg';
import GitLogo from './images/Icons/git.svg';
import GHLogo from './images/Icons/github.svg';
import HKLogo from './images/Icons/heroku.svg';

import './App.css';

function App() {
  return (
    <div className="main-box">
      <header className="header-box">
        <div className="navbar-box">
          <h1 className="name-title">Adam Figueroa</h1>
          <nav className="navbar">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="about-me-box">
        <img src={myPhoto} alt="Adam enjoying the fall" className="my-photo" />
        <h2 className="about-title">About Me</h2>
        <p>Philosophy inspires me on a daily basis, I am constantly thinking about the purpose of life/morals/the universe etc. To me it's like a puzzle that's fun to solve (or at least I try to solve haha), which is probably why I chose to be a Software Engineer; I enjoy troubleshooting and coming up with creative ideas that help solve problems.</p>
        <p>My fascination with technology harkens back to when my dad let me use his windows 97 PC, I was amazed at what it could do and how intuitive the OS was. The internet was a literal web that connected humans from across the globe and it felt like magic. After that I was in love and knew that my future career would involve tech. Fast-forward to current times and I find myself feeling grateful that I stuck with tech all these years and find myself in the programming industry.</p>
        <p>I am a Full-Stack Engineer who is competent in the use of HTML/CSS, JavaScript, jQuery, React, Node.js, Express, PostgreSQL, and Git. I love learning new languages and plan on learning a lot more in the future!</p>
        <div className="tech-used-box">
        <h4>Front End languages I use:</h4>
          <div className="front-end">
          <img src={JSLogo} alt="Javascript Logo" className="logo" />
          <img src={JQLogo} alt="JQuery Logo" className="logo" />
          <img src={RLogo} alt="React Logo" className="logo" />
          <img src={HLogo} alt="HTML5 Logo" className="logo" />
          <img src={CSSLogo} alt="CSS Logo" className="logo" />
        </div>
        <h4>Back End languages I use:</h4>
        <div className="back-end">
        <img src={NLogo} alt="NodeJS Logo" className="logo" />
          <img src={EXLogo} alt="Express Logo" className="logo" />
          <img src={PSQLLogo} alt="PostgreSQL Logo" className="logo" />
          <img src={KLogo} alt="Knex.js Logo" className="logo" />
          </div>
          <h4>Tools I use:</h4>
          <div className="tools">
          <img src={MLogo} alt="Mocha Logo" className="logo" />
          <img src={NPMLogo} alt="NPM Logo" className="logo" />
          <img src={GitLogo} alt="Git Logo" className="logo" />
          <img src={GHLogo} alt="GitHub Logo" className="logo" />
          <img src={HKLogo} alt="Heroku Logo" className="logo" />
          </div>
        </div>
        
        
      </section>
      
          
          
          
        
      <section className="projects-box"></section>
      <section className="contact-box"></section>
    </div>
  );
}

export default App;
