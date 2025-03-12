"use client";
import React, { useState } from "react";
import { Form, Input, TextArea, Button } from "@heroui/form";

const EmailForm = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (data: { email: string; subject: string; message: string }) => {
    try {
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setEmailSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto border border-red-500">
      <h2 className="text-4xl font-bold text-white mb-8">Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <label className="block text-white mb-2">Your Email</label>
          <Input
            name="email"
            type="email"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="example@domain.com"
            required
          />
        </div>
        <div>
          <label className="block text-white mb-2">Subject</label>
          <Input
            name="subject"
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="Subject"
            required
          />
        </div>
        <div>
          <label className="block text-white mb-2">Message</label>
          <TextArea
            name="message"
            className="w-full p-2 rounded bg-gray-700 text-white"
            rows={5}
            placeholder="Your message"
            required
          />
        </div>
        <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Send Message
        </Button>
      </Form>
      {emailSubmitted && (
        <div className="mt-4 text-green-400">
          Message sent successfully!
        </div>
      )}
    </section>
  );
};

export default EmailForm; 
