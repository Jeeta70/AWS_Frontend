import React, { useContext, useState } from "react";
import AccountContext from "../Context/AccountContext";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", cPassword: "" })
  const [registered, setRegistered] = useState(false)
  const {signup } = useContext(AccountContext)
  const handleClick = () => {
    setRegistered(false)
  }

  const secondClick = () => {
    setRegistered(true)
  }

  const handleChange = (e) => {
    setFormData(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  return (
    <div className="col-6 text-center border-primary m-auto">
      <h3>{registered ? "Login Here" : "Sign Up Here"}</h3>
      <form id="login-form">
        <div>
          <div className="input-group flex-nowrap">

            <span className="input-group-text" id="addon-wrapping">
              @
            </span>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="User Name"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={handleChange}
            />
          </div>
          <div className="input-group flex-nowrap">

            <span className="input-group-text" id="addon-wrapping">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={handleChange}
            />
          </div>
          <div className="input-group flex-nowrap">
            <input
              type="text"
              name="password"
              className="form-control"
              placeholder="Password"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={handleChange}
            />
            <span className="input-group-text" id="addon-wrapping">
              @
            </span>

          </div>
          {!registered && <h6>Forgot Password?</h6>}
          {registered && <div className="input-group flex-nowrap">
            <input
              type="text"
              name="cPassword"
              className="form-control"
              placeholder="Confirm Password"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={handleChange}
            />
            <span className="input-group-text" id="addon-wrapping">
              @
            </span>

          </div>}
          {registered && <h6 className="" onClick={handleClick}>Already a user Login</h6>}
          {!registered && <h6 onClick={secondClick}>New User Sign Up</h6>}

          <button>Cancel</button>
          <button onClick={handleRegisteration}>{!registered ? "Login" : "Register"}</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
