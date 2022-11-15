import React from 'react'
import LoginContext from '../../Context/LoginContext'
import { useContext } from 'react'
import { useState } from 'react'
import './Login.css'
import logo from './logo.jpg'
import phone from './phone.svg'

import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordFill} from 'react-icons/ri';


function Login() {

	const {setURL, setClientUserName, setClientGUID} =  useContext(LoginContext);
	const handleSubmit =  (e) => {
		alert("Login success");
		e.preventDefault();

		setURL("http://tsnpl.com.np/traineeapi/api/");
		setClientUserName("9813715932");
		setClientGUID("456");

	}  
	const CreateloginValues={
		UserName:"",
		Password:""
	}
	const [loginValues, setloginValues] = useState(CreateloginValues);
	const handleloginChange = (e) =>{
		e.preventDefault();
		console.log(e.target);
		const { name, value } = e.target;
		setloginValues({ ...loginValues, [name]: value });
		
		}

		const [num, setNum] = useState(0);

		function randomNumberInRange(min, max) {
		  // 👇️ get number between min (inclusive) and max (inclusive)
		  return Math.floor((Math.random()*1000000)+1);
		}
	  
		const handleClick = () => {
		  setNum(randomNumberInRange(1, 10));
		};
  return (
    <div>
        <div className="header">
      <div className="heading"><h2>Technology Solution Nepal</h2></div>
    </div>
	<div className="container">
		<div className="img">
			<img src={phone} alt='phone'/>
		</div>
		<div className="login">
			<form>
				<img src={logo} alt='logo'/>
				<h2 className="title">Welcome</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<div className="user"><FaUserCircle/></div>
           		   </div>
           		   <div className="div">
           		   		<h5>Username</h5>
           		   		<input type="text" className="input" id='username' name='UserName' value={loginValues.UserName} onChange={handleloginChange}/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<div className="user"><RiLockPasswordFill/></div>
           		   </div>
           		   <div className="div">
           		    	<h5>Password</h5>
           		    	<input type="password" className="input" id='username' name='Password' value={loginValues.Password} onChange={handleloginChange}/>
            	   </div>
            	</div>
            	Forgot Password?
            	<input type="submit" className="btn" value="Login" onClick={handleSubmit}/>
            </form>

			
        </div>
    </div>
	<div>
      <h2>number is: {num}</h2>
      <button onClick={handleClick}>Generate random number</button>
    </div>
    </div>
  )
}

export default Login