import React from 'react';

import './Contact.css';

export const Contact = () => {
  return (
    <section className="contact-box">
      <h2 className="contact-title">Contact Me</h2>
      <form
        action="https://formspree.io/f/xwkwqkwk"
        target={'_blank'}
        method="POST"
        className="contact-form"
      >
        <label for="user-name">Name:</label>
        <input type="text" id="user-name" name="name" />
        <label for="user-email">Email:</label>
        <input type="email" id="user-email" name="email" required />
        <label for="user-message">Message:</label>
        <textarea name="" id="user-text" cols="30" rows="10"></textarea>
        <button className="contact-btn" target="_blank" type="submit">
          Send
        </button>
      </form>
    </section>
  );
};
