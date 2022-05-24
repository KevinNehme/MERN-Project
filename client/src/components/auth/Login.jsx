// import React from "react";
// import { Link } from "react-router-dom";

import { React, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { database } from "../firebase";
import { ref, push, child, update } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { signin } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  // const { sign } = signup;

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    let obj = {
      email: email,
      password: password,
    };

    setError("");

    //  signin(email,password);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        setError("");

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
        toast.error("Wrong Password or username");

        // ..
      });
    // history.push("/");

    // const newPostKey = push(child(ref(database), "posts")).key;
    // const updates = {};
    // updates["/" + newPostKey] = obj;
    // return update(ref(database), updates);
  };


  return (
    <div className="form">
      <ToastContainer position="top-center" />
      <div className="form-body">
        <h1>Sign in</h1>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}

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
      </div>
      <div class="box1">
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Sign in
        </button>
        <div className="signin">
          <Link to="/Register">
            <h3> Don't have an account ? Sign up here</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

// const Login = () => {
//   return (
//     <div className="form"> <h1>Sign in</h1>
//       <div className="form-body">
//         <div className="box1">
//           <label className="form__label" for="email">
//             Email{" "}
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="form__input"
//             placeholder="Email"
//           />
//         </div>
//         <div className="box1">
//           <label className="form__label" for="password">
//             Password{" "}
//           </label>
//           <input
//             className="form__input"
//             type="password"
//             id="password"
//             placeholder="Password"
//           />
//         </div>
//       </div>
//       <div class="box1">
//         <button onClick={() => handleSubmit()} type="submit" class="btn">
//           Sign in
//         </button>

//         <div className="signin">
//           <Link to="/Register">
//             <h3> Don't have an account ? Sign up here</h3>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
