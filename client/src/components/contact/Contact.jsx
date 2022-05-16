import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../firebase";

const Contact = () => {

  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    password: "",
  });

  const { name, email, password, message } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !message) {
      toast.error("Please provide value in each input field");
    } else {
      db.collection("contacts").add({
        name: name,
        email: email,
        message: message,
      });
      setState({ name: "", email: "", password: "", message: "" });
      toast.success("Form Submitted Successfully");
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="form-container">
      <ToastContainer position="top-center" />
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contact Us </h1>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleInputChange}
        />

        <label>Message</label>
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          value={message}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit" value="Send Message">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
