import React from 'react'
import './PrintTraineeDetails.css';
function PrintTraineeDetails() {
  return (
    <div className="printTrainee">
        <div className="space"></div>
        <div className="print-form">

{/* <!-- Top heading  part of the form --> */}
<div className="topHead">
<div className="topHeadcontainer">
<div className="companyLogo">
<img className="img" src="companyLogo.jpeg" alt="Company logo"/>
</div>
<div className="companynameAdress">
<h2 className="companyName">Technology Solution Nepal Pvt.Ltd</h2>
<h3 className="companyAddress">Biratnagar, Nepal</h3>
</div>
</div>
</div>
<div className="titleImage">
<div>
<h2 className="thirdTitle">Employee/ Trainee/ Intern Form</h2>
</div>
<div>
    <span id="image">image</span>
</div>
</div>


{/* <!-- here we start the main content of the form --> */}
<form className="container">

{/* <!-- desgining structure for personal details --> */}
<div className="personalContainer">
<div className="personalDetail">Personal details</div>

<div className="personalRow">
        <label for="fullName"><b/>Full Name:</label>
        <label id="lblfullName"></label>
</div>

<div className="personalRow">
    <label for="permanentAddress"><b/>Permanent Address:</label>
    <label id="lblPermanentaddress"></label>
</div>

<div className="personalRow">
<label for="temporaryAddress"><b/>Temporary Address:</label>
<label id="lblTemporaryaddress"></label>
</div>

<div className="personalRow">
<div className="check"> 
{/* <!-- for gender --> */}
<label for="gender"><b>Gender:</b> </label>
<label id="lblCheck"></label>
</div>
</div>

<div className="personalRow">
<label for="age"><b/>Age:</label>
<label id="lblage"></label>
</div>

<div className="personalRow">
<label for="parentsName"><b/>Parents Name:</label>
<label id="lblParentsname"></label>
</div>

<div className="personalRow">
<label for="country">Country:</label>
<label id="lblCountry"></label>
</div>

<div className="personalRow">
<label for="contactNo"><b/>Contact no:</label>
<label id="lblContactno"></label>
</div>


<div className="personalRow">
<label for="email"><b/>Email:</label>
<label id="lblEmails"></label>
</div>
</div>


{/* <!-- Designing structure for educationQualification --> */}
<div className="educationContainer">
<div className="educationQualification">Education Qualification</div>


<div>
<table>
<thead>
<tr>
  <th>Level</th>
  <th>University</th>
  <th>Address</th>
  <th>Board</th>
  <th>GPA</th>
  <th>Passed Year</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Priyanka</td>
  <td>IIC</td>
  <td>Itahari</td>
  <td>NEB</td>
  <td>4.0</td>
  <td>2010</td>
</tr>

<tr>
  <td>Priyanka</td>
  <td>IIC</td>
  <td>Itahari</td>
  <td>NEB</td>
  <td>4.0</td>
  <td>2010</td>
</tr>

<tr>
  <td>Priyanka</td>
  <td>IIC</td>
  <td>Itahari</td>
  <td>NEB</td>
  <td>4.0</td>
  <td>2010</td>
</tr>
</tbody>
</table>
</div>
</div> 

{/* <!-- questioning section of the form--> */}
<div className="chooseContainer">
<div className="questionContainer">
    <div className="questionOne">
        <label for="undertaking">Are you currently undertaking study/training? </label>
                <label id="lblTraining"></label> 
                <div className="ques">
                    <label for="programName">Training or program name: </label>
                <label id="lblProgramName"></label>
                </div>
    </div>
    <div className="jobtypeContainer"> 
        <div className="partTwo">
            <div className="halfPart" >
                <label for="jobAvailable">Job available for: </label>
                <label id="lbljobAvailable"></label>
            </div>
        </div>
    </div>
</div>
</div>

{/* <!-- Designing structure of previousEmployment --> */}
<div className="employmentReference">
<div className="previousEmployementContainer">
<div className="previousEmployment">Previous employment</div>
<div className="employmentRow">
    <label for="companyName"><b/>Company Name:</label>
    <label id="lblcompanyName"></label>
</div>

<div className="employmentRow">
    <label for="addres"><b/>Address:</label>
    <label id="lbladdres"></label>
</div>

<div className="employmentRow">
    <label for="jobTitle">Job Title:</label>
    <label id="lbljobTitle"></label>
</div>

<div className="employmentRow">
    <label for="responsibility"><b/>Responsibility:</label>
    <label id="lblresponsibility"></label>
</div>


<div className="employmentRow">
    <label for="Companyno"><b/>Company Phone no:</label>
    <label id="lblcompanyno"></label>
</div>         
</div>

{/* <!-- designing structure of reference part --> */}
<div className="referenceContainer">
<div className="reference">Reference</div>
<div className="referenceRow">
    <label for="fname"><b/>Full Name:</label>
    <label id="lblfname"></label>
</div>

<div className="referenceRow">
    <label for="relationship"><b/>Relationship:</label>
    <label id="relationship"></label>
</div>

<div className="referenceRow">
    <label for="company">Company:</label>
    <label id="lbl-company"></label>
</div>

<div className="referenceRow">
    <label for="responsibility"><b/>Responsibility:</label>
    <label id="lblresponsibility"></label>
</div>


<div className="referenceRow">
    <label for="Conno"><b/>Contact no:</label>
    <label id="lblconNo"></label>
</div>         
</div>

{/* <!-- Here start the design of three boxes of skill, interest and expect --> */}
<div className="lastSection"  >
<div className="lastflex skill" >
  <label className="lastHead">Your Skill</label>
  <label id="inputSkill"></label>
  <label id="inputSkill"></label>
  <label id="inputSkill"></label>


</div>

<div className="interest lastflex">
    <label className="lastHead">Your Interest</label>
    <label id="inputInterest"></label>
    <label id="inputInterest"></label>
    <label id="inputInterest"></label>

</div>

<div className="expect">
    <label className="lastHead">What do you expect</label>
    <label id="inputExpec"></label>
  </div>    
</div>

{/* <!-- Last reference section of the form but given className as condition as className reference has already been used --> */}
<div className="condition">
<h3 className="termsCondition">Reference</h3>
<p className="paragraph"> References are people who can answer questions about your education,work history, skills, abilities, and work style. 1﻿ 
    References caninclude former employers, managers, colleagues, teachers or professors,professional and personal connections,
    and others who can attest to your ability to do a job.</p>
</div>
</div>

</form>  
<div>
</div>
</div> 
    </div>
  )
}

export default PrintTraineeDetails
