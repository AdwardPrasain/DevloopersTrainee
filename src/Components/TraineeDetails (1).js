import React from 'react'
import { useState } from 'react'
import axios from "axios";
import './TraineeDetails.css'

function TraineeDetails() { 
  const initialTraineeValues={
    clientusername: "9813715932",
    clientguid: "456",
    fullName: '',
    permanentAdd:'',
    currentAdd:'',
    gender:'',
    age:'',
    country:'',
    parentName:'',
    email:'',
    contactNum:'',
    training:'',
    trainingName:'',
    availableFor:'',
    previousCName:'',
    previousAdd:'',
    previousPhnum:'',
    Responsibility:'',
    previousJobTitle:'',
    yourSkills:'',
    yourInterest:'',
    yourExpect:'',
    refName:'',
    refRelation:'',
    refCompany:'',
    refPhoneNumber:'',
    picture:''
  }
  const [TraineeValues, setTraineeValues] = useState(initialTraineeValues);

  const handleTraineeChange = (e) =>{
  e.preventDefault();
 // console.log(e.target);
  const { name, value } = e.target;
  setTraineeValues({ ...TraineeValues, [name]: value });
 console.log(TraineeValues);
  }

  const handleFileChange  = (e) => {
    e.preventDefault();
    setTraineeValues({ ...TraineeValues, picture: e.target.files[0].name });

  }

  const handleFileUpload = async (e) => {
    e.preventDefault();
     const formdata =  new FormData();
     formdata.append('~/src/assets/images' , TraineeValues.picture );
     
  }

  const [traineeDatas, setTraineeDatas] = useState([]);

  const [TraineErrors, setTraineErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [saveButton, setSaveButton] = useState(true)

  const saveTrainee = (e) => {
        e.preventDefault();
        console.log(TraineeValues);
        setTraineErrors(validate(TraineeValues));
        setIsSubmit(true);
      };

      
      const PostTraineeDetails = async () => {
      
        const result = await axios.post("https://tsnpl.com.np/TraineeAPI/api/TraineeDetails", TraineeValues);
        //navigate("/");
        console.log(result);
        if(result.data == -1){
          alert("Data Saved Successfully");
        }
        else {
          alert("Data cannot be Saved");
        }
        loadTraineeData();
        setIsSubmit(false);
    
      }
    
      const loadTraineeData = async () =>{
      const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/TraineeDetails?ClientUserName=9813715932&ClientGUID=456")
      //console.log(result);
      setTraineeDatas(result.data)
    }
    const validate = (values) => {
      const errors = {};
      if(!TraineeValues.fullName){
          alert("FullName is missing.");
          return false;
      }
  
      if(!TraineeValues.permanentAdd){
          alert("Permanent Address is required.");
          return false;
      }
      if(!TraineeValues.currentAdd){
          alert("Current Address is required.");
          return false;
      }
      if(!TraineeValues.age){
        alert("Age is req");
        return false;
    }
    if(!TraineeValues.country){
      alert("country is req");
      return false;
  }
  if(!TraineeValues.parentName){
    alert("parents name add is req");
    return false;
}
if(!TraineeValues.email){
  alert("email is req");
  return false;
}
if(!TraineeValues.contactNum){
  alert("contact number is req");
  return false;
}
// if(!TraineeValues.training){
//   alert("Training is req");
//   return false;
// }
if(!TraineeValues.trainingName){
  alert("Training Name add is req");
  return false;
}
// if(!TraineeValues.availableFor){
//   alert("select");
//   return false;
// }
if(!TraineeValues.previousCName){
  alert("current add is req");
  return false;
}
if(!TraineeValues.permanentAdd){
  alert("current add is req");
  return false;
}
if(!TraineeValues.previousPhnum){
  alert("current add is req");
  return false;
}
if(!TraineeValues.Responsibility){
  alert("current add is req");
  return false;
}
if(!TraineeValues.previousJobTitle){
  alert("current add is req");
  return false;
}
if(!TraineeValues.yourSkills){
  alert("current add is req");
  return false;
}
if(!TraineeValues.yourInterest){
  alert("current add is req");
  return false;
}
if(!TraineeValues.yourExpect){
  alert("current add is req");
  return false;
}
if(!TraineeValues.refName){
  alert("current add is req");
  return false;
}
if(!TraineeValues.refRelation){
  alert("current add is req");
  return false;
}
if(!TraineeValues.refCompany){
  alert("current add is req");
  return false;
}
if(!TraineeValues.refPhoneNumber){
  alert("current add is req");
  return false;
}
      else {
          alert("Submitted");
      }
  
    };
return (
    <div>
  <input type="hidden" id="hId"/>
  <input type="hidden" id="HClientGUID"/>
    <div className="Container">
    <div className="Top">
    <img src="1.jpeg" height="40px" width="60px" alt="logo"/>
    <div className="heading">
        <h3>Technology Solution Nepal Pvt Ltd</h3>
        <p>Biratnagar, Nepal</p>
    </div>
    </div>
    <div className="Design">
      <div className="badge">Intern/Emplyoee/Trainee Application Form</div>
      <div className="Photo">
      <img src={require('../../Assets/Images/logo192.png')} height="40px" width="60px" alt="logo"/>
      </div>  
 
    </div>
    <div className="Both" id="first">
    <div className="personalDetails" id="per">
    <div className="badges">Personal Information</div>
      <div className="personal" id='personal'>
          <div className="form-row">
            <div className="form-group">
              <label className="label">Full Name:</label>
              <input type="text" className="input" id="name" name='fullName' value={TraineeValues.fullName} onChange={handleTraineeChange}/>
            </div>
            <div className="form-group">
              <label>Permanent Address:</label>
              <input type="text" id="per-add" name='permanentAdd' value={TraineeValues.permanentAdd} onChange={handleTraineeChange}/>
            </div>
            <div className="form-group">
                <label>Current Address:</label>
                <input type="text" id="cur-add" name='currentAdd' value={TraineeValues.currentAdd} onChange={handleTraineeChange}/>
              </div>
          </div>
          <div className="form-group">
            <div className="gender">  
              <label>Gender:</label>
              <input type="Radio" id="Gender" name="gender" value={TraineeValues.gender}/>Male
              <input type="Radio" id="Gender" name="gender" value={TraineeValues.gender}/>Female
              <input type="Radio" id="Gender" name="gender" value={TraineeValues.gender}/>Other
            </div>
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input type="text" id="age" name='age' value={TraineeValues.age} onChange={handleTraineeChange}/>
            </div>
            <div className="form-group">
              <label>Country:</label>
              <input type="text" id="country" name='country' value={TraineeValues.country} onChange={handleTraineeChange}/>
            </div>
            <div className="form-group">
              <label>Parent's Name:</label>
              <input type="text" id="Pname" name='parentName'value={TraineeValues.parentName} onChange={handleTraineeChange}/>
            </div>
            <div className="form-group">
                <label>Email Address:</label>
                <input type="text" id="email" name='email' value={TraineeValues.email} onChange={handleTraineeChange}/>
              </div>
              <div className="form-group">
                <label>Contact Number:</label>
                <input type="text" id="num" name='contactNum' value={TraineeValues.contactNum} onChange={handleTraineeChange}/>
              </div>
          </div>
        </div>
  </div>
  <div className="Both" id="first">
    <div className="common">
      <div className="form-group">
        <div className="below-table">
          <p>Are you currently undertaking study/training?(tick one)</p>
          <input type="Radio" id="y" name="yes" value={TraineeValues.training}/>Yes
          <input type="Radio" id="y" name="yes" value={TraineeValues.training}/>No
        </div>
    </div>
    <div className="form-group">
      <div className="Training">
      <label>Training or Program Name:</label>
      <input type="text" className="input" id="training" name='trainingName' value={TraineeValues.trainingName} onChange={handleTraineeChange}/>
    </div>
      </div>
    </div>
    <div className="common">
      <div className="form-group">
        <div className="jobType">  
          <label>Available For: </label>
          <input type="Radio" id="job" name="Job" value={TraineeValues.availableFor}/>Full-Time
          <input type="Radio" id="job" name="Job" value={TraineeValues.availableFor}/>Remote
          <input type="Radio" id="job" name="Job" value="Part-Time"/>Part-Time
          <input type="Radio" id="job" name="Job" value="Other"/>Other
        </div>
        </div>
    </div>
  </div>
  <div className="previousE">
  <div className="badge">Previous Employment</div>
  <div className="row">
    <div className="form-group">
      <label>Company Name:</label>
      <input type="text" id="Cname" name='previousCName' value={TraineeValues.previousCName} onChange={handleTraineeChange}/>
    </div>
    <div className="form-group">
      <label>Address:</label>
      <input type="text" id="Cadd" name='previousAdd' value={TraineeValues.previousAdd} onChange={handleTraineeChange}/>
    </div>
    </div>
    <div className="form-group">
      <label>Phone Number:</label>
      <input type="text" id="Cnum" name='previousPhnum' value={TraineeValues.previousPhnum} onChange={handleTraineeChange}/>
  </div>
    <div className="row">
      <div className="form-group">
        <label>Responsibility:</label>
        <input type="text" id="responsibility" name='Responsibility'value={TraineeValues.Responsibility} onChange={handleTraineeChange}/>
      </div>
      <div className="form-group">
        <label>Job Title:</label>
        <input type="text" id="jobtitle" name='previousJobTitle' value={TraineeValues.previousJobTitle} onChange={handleTraineeChange}/>
      </div>
    </div>
    </div>
  
  <div className="Both">
    <div className="sector">
      <div className="badge">Your Skills</div>
      <input type="text" id="skill" name='yourSkills' value={TraineeValues.yourSkills} onChange={handleTraineeChange}/>
    </div>
    <div className="sector">
      <div className="badge">Your Interest</div>
      <input type="text" id="interest" name='yourInterest' value={TraineeValues.yourInterest} onChange={handleTraineeChange}/>
    </div>
    <div className="sector">
      <div className="badge">What do you expect?</div>
      <input type="text" id="expect" name='yourExpect' value={TraineeValues.yourExpect} onChange={handleTraineeChange}/>
    </div>
  </div>
  <div className="last">
    <div className="badge">Reference</div>
    <div className="form-group">
      <label>Full Name:</label>
      <input type="text" id="Rname" name='refName' value={TraineeValues.refName} onChange={handleTraineeChange}/>
    </div>
    <div className="form-group">
      <label>Relationship:</label>
      <input type="text" id="Rrelation" name='refRelation' value={TraineeValues.refRelation} onChange={handleTraineeChange}/>
    </div>
    <div className="form-group">
      <label>Company:</label>
      <input type="text" id="Rcom" name='refCompany' value={TraineeValues.refCompany} onChange={handleTraineeChange}/>
    </div>
    <div className="form-group">
      <label>Phone Number:</label>
      <input type="text" id="Rnum" name='refPhoneNumber' value={TraineeValues.refPhoneNumber} onChange={handleTraineeChange}/>
    </div>
  </div>
  <div className="buttonn">
    <input type="button" id="btnsubmit" value="Submit" onClick={handleFileUpload}/>
   </div>
  </div>
    </div>
)
}
export default TraineeDetails