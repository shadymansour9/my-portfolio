import React from "react";
import ContactForm from "../components/ContactForm";
import ContactFooter from "../components/ContactFooter";

function Contact() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Contact Me</h2>
      <ContactForm />
      <ContactFooter />
    </div>
  );
}

export default Contact;
