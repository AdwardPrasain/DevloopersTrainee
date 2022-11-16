import React from 'react'
import { useState, useEffect, useContext } from 'react';
import axios from "axios";
import "./TraineeDetails.css";
import { LoginContext } from '../../Context/LoginContext';

function TraineeDetails() {


  const {ClientUserName, ClientGUID, URL} =  useContext(LoginContext);

  const initialTraineevalues={
    clientguid:ClientGUID,
    clientusername:ClientUserName,
    fullName: "",
    permanentAddress:"",
    temporaryAddress:"",
    gender:"",
    age:"",
    country:"",
    parentName:"",
    email:"",
    personalContactNo:"",
    training:"",
    trainingName:"",
    jobType:"",
    uploadImage:"",
    companyName:"",
    companyAddress:"",
    companyPhoneNo:"",
    responsibility:"",
    jobTitle:"",
    yourSkill:"",
    yourInterest:"",
    yourExpect:"",
    referenceFullName:"",
    relation:"",
    refCompany:"",
    refContactNo:""
  }
  const [TraineeValues, setTraineeValues] = useState(initialTraineevalues);

  const handleTraineeChange = (e) =>{
  e.preventDefault();
  console.log(e.target);
  const { name, value } = e.target;
  setTraineeValues({ ...TraineeValues, [name]: value });
  }

  const PostTraineeDetails = async () => {
    // const result = await axios.post("https://tsnpl.com.np/TraineeAPI/api/TraineeEdu", TraineeValues);
    //navigate("/");
    const result = await axios.post(URL + "TraineeEdu", TraineeValues);
    console.log(result);
    if(result.data === -1){
      alert("Data Saved Successfully");
    }
    else {
      alert("Data cannot be Saved");
    }
    // loadEduData();
    // setIsSubmit(false);

  }



  const saveTrainee = (e) => {
    e.preventDefault();
    if(!TraineeValues.fullName){
        alert("FullName is required.");
        return false;
    }

    if(!TraineeValues.permanentAddress){
        alert("Permanent Address is required.");
        return false;
    }
    if(!TraineeValues.temporaryAddress){
        alert("Temporary Address is required.");
        return false;
    }
    if(!TraineeValues.age){
      alert("Age is required.");
      return false;
  }
  if(!TraineeValues.parentName){
    alert("Parent name is required.");
    return false;
}
if(!TraineeValues.country){
  alert("Country is required.");
  return false;
}
if(!TraineeValues.email){
alert("email is required.");
return false;
}
if(!TraineeValues.personalContactNo){
alert("Personal contact number is required.");
return false;
}
if(!TraineeValues.training){
alert("Training types must be filled");
return false;
}
if(!TraineeValues.trainingName){
alert("Training Name is required");
return false;
}
if(!TraineeValues.jobType){
alert("select");
return false;
}
if(!TraineeValues.companyName){
alert("Previous company name is required.");
return false;
}
if(!TraineeValues.companyAddress){
alert("Company address is required.");
return false;
}
if(!TraineeValues.companyPhoneNo){
alert("Previous company phone number is required.");
return false;
}
if(!TraineeValues.responsibility){
alert("Responsibility is required.");
return false;
}
if(!TraineeValues.jobTitle){
alert("Job title add is required.");
return false;
}
if(!TraineeValues.yourSkill){
alert("Your skill is required.");
return false;
}
if(!TraineeValues.yourInterest){
alert("Your interest add is required.");
return false;
}
if(!TraineeValues.yourExpect){
alert("Your expectation is required.");
return false;
}
if(!TraineeValues.referenceFullName){
alert("Reference full name is required.");
return false;
}
if(!TraineeValues.relation){
alert("Relation is required.");
return false;
}
if(!TraineeValues.refCompany){
alert("Reference company is required.");
return false;
}
if(!TraineeValues.refContactNo){
alert("Reference contact number is required.");
return false;
}
    else {
        alert("Submitted");
    }

  };


  return (
    <div className="traineeDetail">
      <div className="body">
       <input type="hidden" id="Hid" />
        <div className="traineeForm">
            

        {/* <!-- Heading of the form  --> */}
        <div className="firstHead">
            <h3 className="headTitle" >NEW ENTRY APPLICATION FORM: TRAINEE/ EMPLOYEE/ INTERN</h3>
        </div>
          <form className="tcontainer">

            <div className="personalContainer" style={{}}>
              <div className="personalDetails">Personal details</div>

                {/* <!-- Input field for personal details --> */}
            <div className="personalRow" id="fn">
              Full Name: <input type="text" className="tInputBox" id="fullName" name="fullName" value={TraineeValues.fullName} onChange={handleTraineeChange}/>
             </div>

             <div className="personalRow">
              Permanent Address: <input type="text" className="tInputBox" id="permanentAddress" placeholder="Your permanent address" name="permanentAddress" value={TraineeValues.permanentAddress} onChange={handleTraineeChange}/>
            </div>

            <div className="personalRow">
            Temporary Address: <input type="text" className="tInputBox" id="temporaryAddress"  placeholder="Your current address" name="temporaryAddress" value={TraineeValues.temporaryAddress} onChange={handleTraineeChange}/>
            </div>

            <div className="personalRow">
             Gender: <input type="radio" className="tgInputBox"   name="gender" id="gen" value={TraineeValues.gender} onChange={handleTraineeChange}/> Male
            <input type="radio" className="tgInputBox"   name="gender" id="gen" value={TraineeValues.gender} onChange={handleTraineeChange}/> Female
            <input type="radio" className="tgInputBox"  name="gender" id="gen" value={TraineeValues.gender} onChange={handleTraineeChange}/> Others
            </div>

            <div className="personalRow">
            Age: <input type="text" className="tInputBox" id="age" name="age" value={TraineeValues.age} onChange={handleTraineeChange}/>
            </div>

            <div className="personalRow">
             Parent's Name: <input type="text" className="tInputBox" id="parentName" name="parentName" value={TraineeValues.parentName} onChange={handleTraineeChange}/>
            </div>

            <div className="personalRow">
             Country: <input type="text" className="tInputBox" id="country" name="country" value={TraineeValues.country} onChange={handleTraineeChange}/>
            </div>

            <div className="personalRow">
             Contact no: <input type="text" className="tInputBox" id="contactNo" name="personalContactNo" value={TraineeValues.personalContactNo} onChange={handleTraineeChange}/>
            </div>

            <div className="personalRow">
               Email: <input type="email" className="tInputBox" id="email" name="email" value={TraineeValues.email} onChange={handleTraineeChange}/>
               </div>
        </div>
    </form>

     {/* <!-- Choose container input field --> */}
        <div className="chooseContainer" >
        <div className="questionContainer">
         <div className="questionOne">
            <label>Are you currently undertaking study/training? </label>
            <input type="radio" id="yes" name="training" value={TraineeValues.training} onChange={handleTraineeChange}/>Yes
            <input type="radio" id="no" name="training" value={TraineeValues.training} onChange={handleTraineeChange}/>No
         </div>

         <div className="questionTwo">
            <label>Training or program name: </label>
            <input type="text" id="trainingName" name="trainingName" value={TraineeValues.trainingName} onChange={handleTraineeChange}/>
         </div>
        </div>




        {/* <!-- Job container input fields --> */}
        <div className="jobTypecontainer" >
          <h4 id="jobTypefor">Job type you are available for:</h4>
          <div className="partOne">
          <input type="radio" name="job"  id="jobType" className="partTime" value={TraineeValues.jobType} onChange={handleTraineeChange}/>partTime
          <input type="radio" name="job"  id="jobType" className="fullTime" value={TraineeValues.jobType} onChange={handleTraineeChange}/>fullTime
      </div>
      <div className="partTwo">
          <input type="radio" name="job"  id="jobType" className="distance" value={TraineeValues.jobType} onChange={handleTraineeChange}/>Distance
          <input type="radio" name="job"  id="jobType" className="other" value={TraineeValues.jobType} onChange={handleTraineeChange}/>Other
      </div>

      </div>

      {/* <!--  input field for upload photo--> */}
    <div className="uploadField">
        <label for="inputTag" id="PhotoLabel">

          <input id="inputTag" type="file" name="uploadImage" value={TraineeValues.uploadImage} onChange={handleTraineeChange}/>
         <br/>
          {/* <img src="icon.png" className="icon-img"/><br/> */}
         <label className="selectImage">Select Image</label>
         </label>
      </div>
        </div>


   {/* <!-- Previous employment input field --> */}
        <div className="employmentReference" >                      
        <div className="previousEmploymentcontainer">
          <div className="previousEmployment">Previous employment</div>

          <div className="previousRow">
         Company Name:<input type="field" className="tInputBox" id="companyName" name="companyName" value={TraineeValues.companyName} onChange={handleTraineeChange}/>
        </div>

        <div className="previousRow">
         Address:<input type="field" className="tInputBox" id="comAddress" name="companyAddress" value={TraineeValues.companyAddress} onChange={handleTraineeChange}/>
        </div>

        <div className="previousRow">
         Job Title:<input type="field" className="tInputBox" id="jobTitle" name="jobTitle" value={TraineeValues.jobTitle} onChange={handleTraineeChange}/>
        </div>

        <div className="previousRow">
         Responsibility:<input type="field" className="tInputBox" id="responsibility" name="responsibility" value={TraineeValues.responsibility} onChange={handleTraineeChange}/>
        </div>

        <div className="previousRow">
         Company Phone no:<input type="field" className="tInputBox" id="companyno" name="companyPhoneNo" value={TraineeValues.companyPhoneNo} onChange={handleTraineeChange}/>
        </div>
        </div>


       {/* <!-- input fields for Reference  --> */}
        <div className="referenceContainer">
            <h3 className="reference">Reference</h3>
            <div className="referenceRow">
              Full Name:<input type="field" className="tInputBox" id="fname" name="referenceFullName" value={TraineeValues.referenceFullName} onChange={handleTraineeChange}/>
             </div>

             <div className="referenceRow">
              Relationship:<input type="field" className="tInputBox" id="relationship" name="relationship" value={TraineeValues.relationship} onChange={handleTraineeChange}/>
             </div>

             <div className="referenceRow">
              Company:<input type="field" className="tInputBox" id="company" name="refCompany" value={TraineeValues.refCompany} onChange={handleTraineeChange}/>
             </div>

             <div className="referenceRow">
              Contact no:<input type="field" className="tInputBox" id="rcontactno" name="refContactNo" value={TraineeValues.refContactNo} onChange={handleTraineeChange}/>
             </div>

        <div className="notice">
          <h3 className="referenceNotice">Put your reference information through which you get to know about Technology Solution Nepal.</h3>
        </div>
          </div>
        </div>

{/* 
        <!-- Skill/Interest/Expectation section --> */}

        <div className="lastSection" style={{display:"flex"}}>
        <div className="lastflex skill" >
          <h3 className="lastHead">Your Skill</h3>
          <input type="text" className="inputInterest" id="yourSkill" name="yourSkill" value={TraineeValues.yourSkill} onChange={handleTraineeChange}/>

        </div>

        <div className="interest lastflex">
          <h3 className="lastHead">Your interest</h3>
          <input type="text" className="inputInterest" id="yourInterest" name="yourInterest" value={TraineeValues.yourInterest} onChange={handleTraineeChange}/>
        </div>

        

        <div className="btnAndexpect">
        <div className="expect">
          <h3 className="lastHead">What do you expect?</h3>
      
          <input type="text" className="inputExpect" id="yourExpect" name="yourExpect" value={TraineeValues.yourExpect} onChange={handleTraineeChange}/>
        </div>
        <div className="submitContainer">
          <input type="submit" value="Submit" id="btnSubmit" name="submit" onClick={PostTraineeDetails}/> 
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default TraineeDetails
