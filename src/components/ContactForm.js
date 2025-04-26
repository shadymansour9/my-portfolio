import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import "./ContactForm.css";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9fal0ib",
        "template_ulddhb9",
        form.current,
        "8OeISQRIuZQ3Algrm"
      )
      .then(
        () => {
          toast.success(" ההודעה נשלחה בהצלחה!");
          form.current.reset();
        },
        (error) => {
          toast.error("❌ שגיאה בשליחה: " + error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="title" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message..." rows="5" />
        <button type="submit">Send</button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default ContactForm;
