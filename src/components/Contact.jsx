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
  const [errors, setErrors] = useState({});
  // validate
  function validateForm(value) {
    let formIsValid = true;
    let errors = {};
    if (!/\S+@\S+\.\S+/.test(inputValues.email)) {
      errors.email = "Invalid email address";
      formIsValid = false;
    }
    if (inputValues.message.length <= 10) {
      errors.message = "Message should be longer than 10 characters";
      formIsValid = false;
    }
    setErrors(errors);
    return formIsValid;
  }

  //
  function handleSubmitForm(e) {
    e.preventDefault();
    const isFormValidated = validateForm(inputValues);
    if (isFormValidated) {
      alert("Form submitted");
      setInputValues({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Message is to short");
    }
  }
  //
  function handleInputChange(e) {
    let { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  // --------------------------
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
