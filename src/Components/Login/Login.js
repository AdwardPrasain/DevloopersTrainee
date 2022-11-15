import React from 'react'
import "./Login.css";
export default function Login() {
  return (
    <div>
         <div className="header">
            <h1> Job We Make</h1>
        </div>

    

    <div className="main">
        <div className="User">
            <label> User Name: </label>
            <input type="text" placeholder="Enter UserName" />
        </div>

        <div className="password">
            <label for="pwd">Password:</label>
            <input type="password" id="pwd" name="pwd" placeholder="Enter your password"/>
        </div>

        <div className="pass1">
            <p> <a href="/">Forget Password</a></p>
        </div>

        <div className="button">
            <button type="button" className="btn1">Submit</button>
        </div>


        <div className="register">
            <input type="button" className="register-button" value="Register" id="btnregister"
                onclick="window.location.href = 'form/ind.html'" />
        </div>
    </div>


    </div>
  )
}
