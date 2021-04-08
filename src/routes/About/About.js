import React from 'react';
import { A } from 'hookrouter';
import myPhoto from '../../images/me.jpg';
import './About.css';

export const About = () => {
  return (
    <section className="about-me-box">
      <img src={myPhoto} alt="Adam enjoying the fall" className="my-photo" />
      <h2 className="about-title">About Me</h2>
      <p className="about-me-text">
        Philosophy inspires me on a daily basis, I am constantly thinking about
        the purpose of life/morals/the universe etc. To me it's like a puzzle
        that's fun to solve (or at least I try to solve haha), which is probably
        why I chose to be a Software Engineer; I enjoy troubleshooting and
        coming up with creative ideas that help solve problems.
      </p>
      <p className="about-me-text">
        My fascination with technology harkens back to when my dad let me use
        his windows 97 PC, I was amazed at what it could do and how intuitive
        the OS was. The internet was a literal web that connected humans from
        across the globe and it felt like magic. After that I was in love and
        knew that my future career would involve tech. Fast-forward to current
        times and I find myself feeling grateful that I stuck with tech all
        these years and find myself in the programming industry.
      </p>
      <p className="about-me-text">
        I am a Full-Stack Engineer who is competent in the use of HTML/CSS,
        JavaScript, jQuery, React, Node.js, Express, PostgreSQL, and Git. I'm
        currently looking forward to joining a closely knit team of problem
        solvers!
      </p>
      <A href="/projects" className="project-btn">
        Check out my Projects!
      </A>
    </section>
  );
};
