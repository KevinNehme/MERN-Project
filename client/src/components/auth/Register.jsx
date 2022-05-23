import { React, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { auth, database } from "../firebase";
import { ref, push, child, update } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { signup } from "../contexts/AuthContext";
import {  useHistory } from "react-router-dom"
import {  Alert } from "react-bootstrap"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory()

  console.log(auth.currentUser)


  // const { sign } = signup;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);

    } else {
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {

    if (password !== confirmPassword) {
      return toast.error("Passwords does not match");
    }
     
    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
  
    console.log('hello');

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      // const user = userCredential.user;
      setError("")

      history.push("/");
      const newPostKey = push(child(ref(database), "posts")).key;
      const updates = {};
      updates["/" + newPostKey] = obj;
      return update(ref(database), updates);  
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      toast.error("Please use capital letters and numbers :)");

      // ..
    });
//   try{
//     signup(email,password);
//     history.push("/");

    

//     const newPostKey = push(child(ref(database), "posts")).key;
//     const updates = {};
//     updates["/" + newPostKey] = obj;
//     return update(ref(database), updates);
  
// } catch (error) {
//   setError("Failed to create an account")

// }
    
  };
  return (
    <div className="form">
      <ToastContainer position="top-center" />
      <div className="form-body">
        <h1>Sign Up</h1>
        {error && <Alert variant="danger">{error}</Alert>}

        <div className="box1">
          <label className="form__label" for="firstName">
            First Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="box1">
          <label className="form__label" for="lastName">
            Last Name{" "}
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            value={lastName}
            className="form__input"
            onChange={(e) => handleInputChange(e)}
            placeholder="Last Name"
          />
        </div>
        <div className="box1">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="box1">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
        <div className="box1">
          <label className="form__label" for="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div class="box1">
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Register
        </button>
        <div className="signin">
          <Link to="/login">
            <h3> Already have an account ? Log in here</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;