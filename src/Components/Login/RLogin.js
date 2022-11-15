import React from "react";
import { useState } from "react";
import "./img/tech.jpeg";
import "./Login.css";
import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

function RLogin() {
  const { setURL, setClientUserName, setClientGUID } = useContext(LoginContext);

  const handleSubmit = (e) => {
    alert("Login success");
    e.preventDefault();

    setURL("http://tsnpl.com.np/TraineeAPI/api/");
    setClientUserName("9813715932");
    setClientGUID("456");
  };

  const initialLoginValues = {
    UserName: "",
    PassWord: "",
  };
  const [LoginValues, setLoginValues] = useState(initialLoginValues);

  const handleLoginChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setLoginValues({ ...LoginValues, [name]: value });
  };

  const saveLogin = (e) => {
    e.preventDefault();
    if (!LoginValues.UserName) {
      alert("UserName is missing.");
      return false;
    }

    if (!LoginValues.PassWord) {
      alert("Password is required.");
      return false;
    }
  };
  return (
    <div>
      <div className="wrapper">
        <div className="topp">
          {/* <img src="img/tech.jpeg" alt="Logo" className="firstimg" /> */}
          <div className="header11">
            <label className="tech">Technology solution nepal Pvt Ltd</label>
          </div>
        </div>

        <div className="Loginform">
          <h2>Login Here</h2>
          <input
            type="text"
            name="UserName"
            className="textbox"
            placeholder="Enter Your UserName"
            value={LoginValues.UserName}
            onChange={handleLoginChange}
          />
          <input
            type="password"
            className="textbox"
            name="PassWord"
            placeholder="Enter Your Password"
            value={LoginValues.PassWord}
            onChange={handleLoginChange}
          />
          <button className="bbtn" onClick={handleSubmit}>
            {" "}
            <a href="">Login</a>
          </button>
          <div className="forget">
            <a href="">Forget Password </a>
          </div>
          {/* <hr> */}

          <span className="linkk">
            Don't have an account?
            <a href="/form.html">
              <button className="bttnn">Sign Up Here </button>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default RLogin;
