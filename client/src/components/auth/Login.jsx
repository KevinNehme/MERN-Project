import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form"> <h1>Sign in</h1>
      <div className="form-body">
        <div className="box1">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
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
            placeholder="Password"
          />
        </div>
      </div>
      <div class="box1">
        <button type="submit" class="btn">
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
