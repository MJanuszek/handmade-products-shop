import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../style/Contact.scss";

function Contact() {
  return (
    <>
      <Navigation />
      <div className="contact">
        <h1>Send us a message</h1>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="message">Your message</label>
          <textarea id="message" cols="5" rows="5"></textarea>

          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
