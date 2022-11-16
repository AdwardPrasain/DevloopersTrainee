import React from 'react'
import './Login.css'
import { useState, useContext } from 'react';
import { LoginContext } from '../../Context/LoginContext';




function Login() {


  const {setURL, setClientUserName, setClientGUID} =  useContext(LoginContext)  ;

  const initialLoginvalues={
   username:"",
   password:"",
   loginBtn:"",
   signinBtn:""

  }

  const [num, setNum] = useState(0);

		function randomNumberInRange(min, max) {
		  // 👇️ get number between min (inclusive) and max (inclusive)
		  return Math.floor((Math.random()*1000000)+1);
		}
	  
		const handleClick = () => {
		  setNum(randomNumberInRange(1, 10));
		};

  const handleSubmit =  (e) => {
    alert("Login success");
    e.preventDefault();

    setURL("http://tsnpl.com.np/traineeapi/api/");
    setClientUserName("9803322067");
    setClientGUID("123");

  }




  const [LoginValues, setLoginValues] = useState(initialLoginvalues);

  const handleLoginChange = (e) =>{
  e.preventDefault();
  console.log(e.target);
  const { name, value } = e.target;
  setLoginValues({ ...LoginValues, [name]: value });
  }

  return (
    <div>
      <div  className="login">
      <div className="lcontainer">
        <section className="lsection">
        <div className="heading">
            <h2 className="headOne">TSNPL</h2>
            <h3 className="headTwo">(Technology Solution Nepal)</h3>
        </div>
    </section>
        <div className="lbox"> 
            <div className="lrow">
                <label className="lbl">User Name</label>
                <div>
                <input type="text" className="linputBox" id="username" name="username" value={LoginValues.username} onChange={handleLoginChange}/>
            </div>
            </div>
            <div className="lrow">
                <label className="lbl">Password</label>
                <div>
                <input type="text" className="linputBox" id="password" name="password" value={LoginValues.password} onChange={handleLoginChange}/>
            </div>
        </div>

        <div className="lbutton-section">
        <span className="forgot" id="forgot-password">Forgot Password</span>  
        <input type="button" className="lbtn" id="loginBtn" value="Login" name="loginBtn" onClick={handleSubmit}/>
        <input type="button" className="lbtn" id="signinBtn" value="Sign in" name="signinBtn"/>
        <div>
      <h2>number is: {num}</h2>
      <button onClick={handleClick}>Generate random number</button>
    </div>
    </div>
       </div>
    </div>
    </div>
    </div>
  )
}

export default Login
