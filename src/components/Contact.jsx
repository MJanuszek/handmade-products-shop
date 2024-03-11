import React, { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../style/Contact.scss";

function Contact() {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleSubmitForm(e) {
    e.preventDefault();
    console.log("ok");
    setInputValues({
      name: "",
      email: "",
      message: "",
    });
  }
  //
  function handleInputChange(e) {
    let { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    console.log(inputValues);
  }
  return (
    <>
      <Navigation />
      <div className="contact">
        <h1>Send us a message</h1>
        <form className="contact-form" onSubmit={handleSubmitForm}>
          <label htmlFor="name">Name:</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            onChange={handleInputChange}
            value={inputValues.name}
          />
          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            onChange={handleInputChange}
            value={inputValues.email}
          />
          <label htmlFor="message">Your message</label>
          <textarea
            required
            name="message"
            id="message"
            cols="5"
            rows="5"
            onChange={handleInputChange}
            value={inputValues.message}
          ></textarea>

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
