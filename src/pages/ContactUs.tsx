// src/ContactUs.tsx

import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
    selectedOption: "", // Track a single option
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State to control the popup visibility

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    // Handle single checkbox selection
    if (type === "checkbox") {
      setFormData({
        ...formData,
        selectedOption: value, // Set value to the selected option
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prepare the data to send
    const { name, number, email, message, selectedOption } = formData;

    const dataToSend = {
      chat_id: "5233122643", // Replace with your Telegram chat ID
      text: `
        Client Name: ${name}
        Phone Number: ${number}
        Email: ${email}
        Message: ${message}
        Selected Option: ${selectedOption}
      `,
    };

    try {
      const response = await fetch(`https://api.telegram.org/bot7994278821:AAEib9tupeDVI73dJdKjskbtbtQoBZm8HGc/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log("Message sent successfully!");
        setIsSubmitted(true); // Show the thank you popup
        // Reset form
        setFormData({
          name: "",
          number: "",
          email: "",
          message: "",
          selectedOption: "",
        });
      } else {
        const errorData = await response.json();
        console.error("Failed to send message:", errorData); // Log error details
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false); // Close the popup
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="flex items-center justify-center p-4 bg-[#c30101] text-white text-2xl shadow-lg">
        Contact Us
      </h1>
      <br />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4"
        id="form"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="number"
          placeholder="Phone Number"
          value={formData.number}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded"
          rows={4}
        />
        <div className="flex flex-col space-y-2">
          <label>
            <input
              type="checkbox"
              name="option1"
              value="Buy"
              checked={formData.selectedOption === "Buy"}
              onChange={handleChange}
            />
            Buy
          </label>
          <label>
            <input
              type="checkbox"
              name="option2"
              value="Sell"
              checked={formData.selectedOption === "Sell"}
              onChange={handleChange}
            />
            Sell
          </label>
          <label>
            <input
              type="checkbox"
              name="option3"
              value="Rental"
              checked={formData.selectedOption === "Rental"}
              onChange={handleChange}
            />
            Rental
          </label>
          <label>
            <input
              type="checkbox"
              name="option4"
              value="Complain"
              checked={formData.selectedOption === "Complain"}
              onChange={handleChange}
            />
            Complain
          </label>
        </div>
        <button type="submit" className="bg-[#C30101] text-white p-4 rounded">
          Send
        </button>
      </form>

      <Link
        to="/"
        className="flex items-center justify-center p-4 bg-[#c30101] text-white fixed bottom-0 left-0 right-0 shadow-lg"
      >
        <div className="text-3xl mr-2">
          {" "}
          <FaHome />
        </div>
      </Link>

      {/* Popup Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h2 className="text-lg font-semibold">Thanks for contacting us!</h2>
            <p>We appreciate your message and will get back to you soon.</p>
            <button
              onClick={handleClose}
              className="mt-4 bg-[#C30101] text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
