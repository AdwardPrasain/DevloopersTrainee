import React from 'react'
import './TraineePrint.css'
import {useState} from 'react'

function TraineePrint() {
  const initialTraineePrint={
    lblfullName:'',
    lblpermanentAdd:'',
    lblcurrentAdd:'',
    lblGender:'',
    lblAge:'',
    lblCountry:'',
    lblParentName:'',
    lblEmail:'',
    lblcontactNum:'',
    lblTraining:'',
    lblTrainingName:'',
    lblAvailableFor:'',
    lblpreviousCName:'',
    lblpreviousAdd:'',
    lblpreviousPhnum:'',
    lblResponsibility:'',
    lblpreviousJobTitle:'',
    lblyourSkills:'',
    lblyourInterest:'',
    lblyourExpect:'',
    lblrefName:'',
    lblrefRelation:'',
    lblrefCompany:'',
    lblrefPhoneNumber:'',
    image:''
  }
  const [printValues, setprintValues] = useState(initialTraineePrint);
  
  return (
    <div>
         <input type="hidden" id="hId"/>
    <div className="Containers">
    <div className="tops">
        <img src="1.jpeg" height="40px" width="60px" alt='nothing'/>
    <div className="heading">
        <h3>Technology Solution Nepal Pvt Ltd</h3>
        <p>Biratnagar, Nepal</p>
    </div>
    </div>
    <div className="Design">
      <div className="badged">Intern/Emplyoee/Trainee Application Form</div>
      <div className="photo" id="photo">
        <span  name='image' value={printValues.image}></span>
      </div>
    </div>
    <div className="Boths" id="first">
    <div className="commons" id="per">
      <div className="personalprint">
          <div className="badgeds">Personal Information</div>
          <div className="form-row">
            <div className="form-group">
              <label className="label">Full Name:</label>
              <label id="lblfullname" name='lblfullName' value={printValues.lblfullName}></label>
            </div>
            <div className="form-group">
              <label>Permanent Address:</label>
              <label id="lblper-add" name='lblpermanentAdd' value={printValues.lblpermanentAdd}></label>
            </div>
            <div className="form-group">
                <label>Current Address:</label>
                <label id="lblcur-add" name='lblcurrentAdd' value={printValues.lblcurrentAdd}></label>
              </div>
          </div>
          <div className="form-group">
            <div className="gender">  
              <label>Gender:</label>
              <label id="lblgender" name='lblGender' value={printValues.lblGender}></label>
            </div>
            </div>
            <div className="form-group">
              <label for="DOB">Age:</label>
              <label id="lblage" name='lblAge' value={printValues.lblAge}></label>
            </div>
            <div className="form-group">
              <label>Country:</label>
              <label id="lblcountry" name='lblCountry' value={printValues.lblCountry}></label>
            </div>
            <div className="form-group">
              <label>Parent's Name:</label>
              <label id="lblparent" name='lblParentName' value={printValues.lblParentName}></label>
            </div>
            <div className="form-group">
                <label>Email Address:</label>
                <label id="lblemail" name='lblEmail' value={printValues.lblEmail}></label>
              </div>
              <div className="form-group">
                <label>Contact Number:</label>
                <label id="lblphone" lbl='lblcontactNum' value={printValues.lblcontactNum}></label>
              </div>
          </div>
        </div>
  </div>
  <div className="Both" id="first">
    <div className="common">
      <div className="form-group">
        <div className="below-table">
          <p>Are you currently undertaking study/training?(tick one)</p>
          <label id="lbltraining" name='lblTraining' value={printValues.lblTraining}></label>
        </div>
    </div>
    <div className="form-group">
      <div className="Training">
      <label>Training or Program Name:</label>
      <label id="lbltrainingName" name='lblTrainingName' value={printValues.lblTrainingName}></label>
    </div>
      </div>
    </div>

    <div className="common">
      <div className="form-group">
        <div className="jobType">  
          <label>Available For: </label>
          <label id="lblavailable" name='lblAvailableFor' value={printValues.lblAvailableFor}></label>
        </div>
        </div>
    </div>
  </div>
  <div className="previousE">
  <div className="badged">Previous Employment</div>
  <div className="row">
    <div className="form-group">
      <label>Company Name:</label>
      <label id="lblcompany" name='lblpreviousCName' value={printValues.lblpreviousCName}></label>
    </div>
    <div className="form-group">
      <label>Address:</label>
      <label id="lblAddress" name='lblpreviousAdd' value={printValues.lblpreviousAdd}></label>
    </div>
    </div>
    <div className="form-group">
      <label>Phone Number:</label>
      <label id="lblCnum" name='lblpreviousPhnum' value={printValues.lblpreviousPhnum}></label>
  </div>
    <div className="row">
      <div className="form-group">
        <label>Responsibility:</label>
        <label id="lblresponsibility" name='lblResponsibility' value={printValues.lblResponsibility}></label>
      </div>
      <div className="form-group">
        <label>Job Title:</label>
        <label id="lblTitle" name='lblpreviousJobTitle' value={printValues.lblpreviousJobTitle}></label>
      </div>
    </div>
    </div>
  
  <div className="both">
    <div className="sector">
      <div className="badged">Your Skills</div>
      <label id="lblskill" name='lblyourSkills' value={printValues.lblyourSkills}></label>
    </div>
    <div className="sector">
      <div className="badged">Your Interest</div>
      <label id="lblinterest" name='lblyourInterest' value={printValues.lblyourInterest}></label>
    </div>
    <div className="sector">
      <div className="badged">What do you expect?</div>
      <label id="lblexpect" name='lblyourExpect' value={printValues.lblyourExpect}></label>
    </div>
  </div>
  <div className="last">
    <div className="badged">Reference</div>
    <div className="form-group">
      <label>Full Name:</label>
      <label id="lblRef_name" name='lblrefName' value={printValues.lblrefName}></label>
    </div>
    <div className="form-group">
      <label>Relationship:</label>
      <label id="lblrelationship" name='lblrefRelation' value={printValues.lblrefRelation}></label>
    </div>
    <div className="form-group">
      <label>Company:</label>
      <label id="lblrefcompany" name='lblrefCompany' value={printValues.lblrefCompany}></label>
    </div>
    <div className="form-group">
      <label>Phone Number:</label>
      <label id="lblPhone" name='lblrefPhoneNumber' value={printValues.lblrefPhoneNumber}></label>
    </div>
  </div>
  </div>
    </div>
  )
}

export default TraineePrint