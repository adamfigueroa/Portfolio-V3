import React from 'react';
import { A } from 'hookrouter';
import JSLogo from '../../images/Icons/javascript.svg';
import RLogo from '../../images/Icons/react.svg';
import HLogo from '../../images/Icons/html5.svg';
import CSSLogo from '../../images/Icons/css3.svg';
import NLogo from '../../images/Icons/nodejs.svg';
import EXLogo from '../../images/Icons/express.svg';
import PSQLLogo from '../../images/Icons/postgresql.svg';
import KLogo from '../../images/Icons/knex.png';
import ManaLogo from '../../images/Mana/mana-logo.png';
import MLogo from '../../images/Icons/mocha.svg';
import NPMLogo from '../../images/Icons/npm.svg';
import GitLogo from '../../images/Icons/git.svg';
import GHLogo from '../../images/Icons/github.svg';
import HKLogo from '../../images/Icons/heroku.svg';
import ManaScreen from '../../images/Mana/mana-screenshot.png';
import ShelfLogo from '../../images/Shelf/shelf-logo.png';
import ShelfScreen from '../../images/Shelf/shelf-screenshot.png';
import SpacedLogo from '../../images/Spaced/spaced-logo.png';
import SpacedScreen from '../../images/Spaced/spaced-screenshot.png';
import PetfulLogo from '../../images/Petful/petful-logo.png';
import PetfulScreen from '../../images/Petful/petful-screenshot.png';
import './Projects.css';

export const Projects = () => {
  return (
    <section className="projects-box">
      <div className="project-card" style={{ backgroundColor: '#9966CC' }}>
        <div id="mana-box" className="project-title-box">
          <h2 id="mana-title" className="project-title">
            Mana
          </h2>
          <img
            src={ManaLogo}
            id="mana-logo"
            className="project-logo"
            alt="Mana logo"
          />
        </div>
        <div id="mana-links" className="project-links">
          <A
            href="https://mana-client.vercel.app/"
            target={'_blank'}
            id="mana-link"
            className="project-link"
          >
            Live App
          </A>
          <A
            href="https://github.com/adamfigueroa/mana-client"
            target={'_blank'}
            id="mana-link"
            className="project-link"
          >
            Client Repo
          </A>
          <A
            href="https://github.com/adamfigueroa/mana-api"
            target={'_blank'}
            id="mana-link"
            className="project-link"
          >
            API Repo
          </A>
        </div>
        <img
          src={ManaScreen}
          className="project-screen"
          alt="Screenshot of landing page"
        />
        <div id="mana-tech-box" className="project-tech-box">
          <h3 id="mana-tech-title" className="project-tech-title">
            Tech used:
          </h3>
          <div id="mana-icon-box" className="project-icon-box">
            <img src={JSLogo} alt="Javascript Logo" className="logo" />
            <img src={RLogo} alt="React Logo" className="logo" />
            <img src={HLogo} alt="HTML5 Logo" className="logo" />
            <img src={CSSLogo} alt="CSS Logo" className="logo" />
            <img src={NLogo} alt="NodeJS Logo" className="logo" />
            <img src={EXLogo} alt="Express Logo" className="logo" />
            <img src={PSQLLogo} alt="PostgreSQL Logo" className="logo" />
            <img src={KLogo} alt="Knex.js Logo" className="logo" />
          </div>
        </div>
        <div id="mana-desc-box" className="project-desc-box">
          <h3 id="mana-desc-title" className="project-desc-title">
            Description
          </h3>
          <p
            id="mana-desc"
            className="project-desc"
            style={{ marginBottom: '0px' }}
          >
            Mana is an app that helps you create a daily routine. Mana tracks
            successful days for each individual practice you choose to do in a
            day.
          </p>
          <p id="mana-desc" className="project-desc">
            Simply give your practice a name, choose how many successful days
            you want to track, what days of the week you want to do your
            practice on, and the app will conditionally render the right
            practices on the page based on todays weekday.
          </p>
        </div>
      </div>

      <div className="project-card" style={{ backgroundColor: '#194261' }}>
        <div id="shelf-box" className="project-title-box">
          <h2 id="shelf-title" className="project-title">
            Shelf-Life
          </h2>
          <img
            src={ShelfLogo}
            id="shelf-logo"
            className="project-logo"
            alt="Shelf-Life logo"
          />
        </div>
        <div id="shelf-links" className="project-links">
          <A
            href="https://shelf-life.vercel.app/"
            target={'_blank'}
            id="shelf-link"
            className="project-link"
          >
            Live App
          </A>
          <A
            href="https://github.com/adamfigueroa/Shelf-Life-Client"
            target={'_blank'}
            id="shelf-link"
            className="project-link"
          >
            Client Repo
          </A>
          <A
            href="https://github.com/adamfigueroa/Shelf-Life-Server"
            target={'_blank'}
            id="shelf-link"
            className="project-link"
          >
            API Repo
          </A>
        </div>
        <img
          src={ShelfScreen}
          className="project-screen"
          alt="Screenshot of dashboard"
        />
        <div id="shelf-tech-box" className="project-tech-box">
          <h3 id="shelf-tech-title" className="project-tech-title">
            Tech used:
          </h3>
          <div id="shelf-icon-box" className="project-icon-box">
            <img src={JSLogo} alt="Javascript Logo" className="logo" />
            <img src={RLogo} alt="React Logo" className="logo" />
            <img src={HLogo} alt="HTML5 Logo" className="logo" />
            <img src={CSSLogo} alt="CSS Logo" className="logo" />
            <img src={NLogo} alt="NodeJS Logo" className="logo" />
            <img src={EXLogo} alt="Express Logo" className="logo" />
            <img src={PSQLLogo} alt="PostgreSQL Logo" className="logo" />
            <img src={KLogo} alt="Knex.js Logo" className="logo" />
          </div>
        </div>
        <div id="shelf-desc-box" className="project-desc-box">
          <h3 id="shelf-desc-title" className="project-desc-title">
            Description
          </h3>
          <p
            id="shelf-desc"
            className="project-desc"
            style={{ marginBottom: '0px' }}
          >
            Shelf Life is a CRUD app that you can use to track expiration dates.
            Users can add an item by submitting a name and how many days until
            the item expires.
          </p>
          <p id="shelf-desc" className="project-desc">
            Moment.js was used to calculate the countdown date by taking the
            user specified "days_until_expire" and adding that to timestamp that
            is created on submit.
          </p>
        </div>
      </div>

      <div className="project-card" style={{ backgroundColor: '#242F42' }}>
        <div id="spaced-box" className="project-title-box">
          <h2 id="spaced-title" className="project-title">
            Spaced Repetition
          </h2>
          <img
            src={SpacedLogo}
            id="spaced-logo"
            className="project-logo"
            alt="Spaced Repetition logo"
          />
        </div>
        <div id="spaced-links" className="project-links">
          <A
            href="https://spaced-repetition-adamfigueroa.vercel.app/register"
            target={'_blank'}
            id="spaced-link"
            className="project-link"
          >
            Live App
          </A>
          <A
            href="https://github.com/adamfigueroa/spaced-repetition-client"
            target={'_blank'}
            id="spaced-link"
            className="project-link"
          >
            Client Repo
          </A>
          <A
            href="https://github.com/adamfigueroa/spaced-repetition-server"
            target={'_blank'}
            id="spaced-link"
            className="project-link"
          >
            API Repo
          </A>
        </div>
        <img
          src={SpacedScreen}
          className="project-screen"
          alt="Screenshot of dashboard"
        />
        <div id="spaced-tech-box" className="project-tech-box">
          <h3 id="spaced-tech-title" className="project-tech-title">
            Tech used:
          </h3>
          <div id="spaced-icon-box" className="project-icon-box">
            <img src={JSLogo} alt="Javascript Logo" className="logo" />
            <img src={RLogo} alt="React Logo" className="logo" />
            <img src={HLogo} alt="HTML5 Logo" className="logo" />
            <img src={CSSLogo} alt="CSS Logo" className="logo" />
            <img src={NLogo} alt="NodeJS Logo" className="logo" />
            <img src={EXLogo} alt="Express Logo" className="logo" />
            <img src={PSQLLogo} alt="PostgreSQL Logo" className="logo" />
            <img src={KLogo} alt="Knex.js Logo" className="logo" />
          </div>
        </div>
        <div id="spaced-desc-box" className="project-desc-box">
          <h3 id="spaced-desc-title" className="project-desc-title">
            Description
          </h3>
          <p
            id="spaced-desc"
            className="project-desc"
            style={{ marginBottom: '0px' }}
          >
            Spaced Repetition is an app that uses the concept of spaced
            repetition to allow a user to practice French words.
          </p>
          <p id="spaced-desc" className="project-desc">
            On this project I was provided with an incomplete app and had to
            finish it with specific criteria enforced by cypress tests. It was
            great to practice taking already developed code and coming up with a
            plan to complete it.
          </p>
        </div>
      </div>

      <div className="project-card" style={{ backgroundColor: '#342D62' }}>
        <div id="petful-box" className="project-title-box">
          <h2 id="petful-title" className="project-title">
            Petful
          </h2>
          <img
            src={PetfulLogo}
            id="petful-logo"
            className="project-logo"
            alt="Petful logo"
          />
        </div>
        <div id="petful-links" className="project-links">
          <A
            href="https://petful-client-beige-three.vercel.app/"
            target={'_blank'}
            id="petful-link"
            className="project-link"
          >
            Live App
          </A>
          <A
            href="https://github.com/adamfigueroa/petful-client"
            target={'_blank'}
            id="petful-link"
            className="project-link"
          >
            Client Repo
          </A>
          <A
            href="https://github.com/adamfigueroa/petful-server"
            target={'_blank'}
            id="petful-link"
            className="project-link"
          >
            API Repo
          </A>
        </div>
        <img
          src={PetfulScreen}
          className="project-screen"
          alt="Screenshot of dashboard"
        />
        <div id="petful-tech-box" className="project-tech-box">
          <h3 id="petful-tech-title" className="project-tech-title">
            Tech used:
          </h3>
          <div id="petful-icon-box" className="project-icon-box">
            <img src={JSLogo} alt="Javascript Logo" className="logo" />
            <img src={RLogo} alt="React Logo" className="logo" />
            <img src={HLogo} alt="HTML5 Logo" className="logo" />
            <img src={CSSLogo} alt="CSS Logo" className="logo" />
            <img src={NLogo} alt="NodeJS Logo" className="logo" />
            <img src={EXLogo} alt="Express Logo" className="logo" />
            <img src={PSQLLogo} alt="PostgreSQL Logo" className="logo" />
            <img src={KLogo} alt="Knex.js Logo" className="logo" />
          </div>
        </div>
        <div id="petful-desc-box" className="project-desc-box">
          <h3 id="petful-desc-title" className="project-desc-title">
            Description
          </h3>
          <p
            id="petful-desc"
            className="project-desc"
            style={{ marginBottom: '0px' }}
          >
            Petful is an app for a (made-up) first in first out pet adoption
            agency. Users can join the queue and pick an available pet when
            their turn is up.
          </p>
          <p id="petful-desc" className="project-desc">
            On this project I was provided with an incomplete app and had to
            finish it. Petful uses a first in first out queue data structure
            algorithm.
          </p>
        </div>
      </div>

      <div className="tools">
        <h4 className="tools-title">
          And none of this could have been done without my favorite tools:
        </h4>

        <div className="tool-box">
          <img src={MLogo} alt="Mocha Logo" className="logo" />
          <img src={NPMLogo} alt="NPM Logo" className="logo" />
          <img src={GitLogo} alt="Git Logo" className="logo" />
          <img src={GHLogo} alt="GitHub Logo" className="logo" />
          <img src={HKLogo} alt="Heroku Logo" className="logo" />
        </div>
      </div>
    </section>
  );
};
