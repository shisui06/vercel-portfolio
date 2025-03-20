import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'service_lnkwfcq', // Replace with your EmailJS service ID
        'service_lnkwfcq', // Replace with your EmailJS template ID
        form.current,
        'z7Z1ZenLb_xKRVfcL'     // Replace with your EmailJS user ID
      )
      .then(() => alert('Message sent!'))
      .catch(() => alert('Failed to send message.'));
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Your Name" required />
      <input type="email" name="user_email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Submit</button>
    </form>
  );
} 