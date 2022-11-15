import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Traine.css";
function Traine() {
  const initialTraineeValues = {
    // ClientUserName= 9860607052,
    // ClientGUID= 123,
    fullName: "",
    permanentAdd: "",
    currentAdd: "",
    gender: "",
    age: "",
    country: "",
    parentName: "",
    email: "",
    contactNum: "",
    training: "",
    trainingName: "",
    Job: "",
    previousCName: "",
    previousAdd: "",
    previousPhnum: "",
    Responsibility: "",
    previousJobTitle: "",
    yourSkills: "",
    yourInterest: "",
    yourExpect: "",
    refName: "",
    refRelation: "",
    refCompany: "",
    refPhoneNumber: "",
  };
  const [TraineeValues, setTraineeValues] = useState(initialTraineeValues);

  const handleTraineeChange = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { name, value } = e.target;

    setTraineeValues({ ...TraineeValues, [name]: value });
  };

  // useEffect(() => {
  //   loadEduData();
  //   //console.log(eduErrors);
  //   if (Object.keys(eduErrors).length === 0 && isSubmit) {
  //     PostTraineeDetails();
  //     setEduValues(initialEduValues);
  //   }
  // }, [eduErrors, isSubmit]);

  const PostTraineeDetails = async () => {
    const result = await axios.post(
      "https://tsnpl.com.np/TraineeAPI/api/TraineeDetails",
      TraineeValues
    );
    //navigate("/");
    console.log(result);
    if (result.data == -1) {
      alert("Data Saved Successfully");
    } else {
      alert("Data cannot be Saved");
    }

    //loadEduData();
    //setIsSubmit(false);
  };

  const loadEduData = async () => {
    const result = await axios.get(
      "https://tsnpl.com.np/TraineeAPI/api/TraineeDetails?ClientUserName=9860607052&ClientGUID=123"
    );
    //console.log(result);
    // setEduDatas(result.data)
  };

  const saveTrainee = (e) => {
    e.preventDefault();
    if (!TraineeValues.fullName) {
      alert("FullName is missing.");
      return false;
    }

    if (!TraineeValues.permanentAdd) {
      alert("Permanent Address is required.");
      return false;
    }
    if (!TraineeValues.currentAdd) {
      alert("Current Address is required.");
      return false;
    }
    if (!TraineeValues.age) {
      alert("Age is req");
      return false;
    }
    if (!TraineeValues.country) {
      alert("country is req");
      return false;
    }
    if (!TraineeValues.parentName) {
      alert("Parents Name  is req");
      return false;
    }
    if (!TraineeValues.email) {
      alert("email is req");
      return false;
    }
    if (!TraineeValues.contactNum) {
      alert("contact number is req");
      return false;
    }
    if (!TraineeValues.training) {
      alert("Training is save");
      return false;
    }
    if (!TraineeValues.trainingName) {
      alert("Training Name  is req");
      return false;
    }
    if (!TraineeValues.Job) {
      alert("select");
      return false;
    }
    if (!TraineeValues.previousCName) {
      alert("previousCName  is req");
      return false;
    }
    if (!TraineeValues.permanentAdd) {
      alert("permanentAdd is req");
      return false;
    }
    if (!TraineeValues.previousPhnum) {
      alert("Previous PhoneNNumber is req");
      return false;
    }
    if (!TraineeValues.Responsibility) {
      alert("Responsibility is req");
      return false;
    }
    if (!TraineeValues.previousJobTitle) {
      alert("Previous JobTitle is req");
      return false;
    }
    if (!TraineeValues.yourSkills) {
      alert("Skill is req");
      return false;
    }
    if (!TraineeValues.yourInterest) {
      alert("Interest is req");
      return false;
    }
    if (!TraineeValues.yourExpect) {
      alert("Expect  is req");
      return false;
    }
    if (!TraineeValues.refName) {
      alert("RefName is req");
      return false;
    }
    if (!TraineeValues.refRelation) {
      alert("RefRelation is missing");
      return false;
    }
    if (!TraineeValues.refCompany) {
      alert("RefCompany add is req");
      return false;
    }
    if (!TraineeValues.refPhoneNumber) {
      alert("PhoneNumber is req");
      return false;
    } else {
      alert("Submitted");
    }
  };

  return (
    <div>
      <div className="body">
        <div className="Top">
          {/* <img src="img/tech.jpeg" alt="Logo" className="firstimg" /> */}
          <div className="head">
            <div className="header1">
              <span>
                <b> Technology solution nepal Pvt Ltd.</b>
              </span>
            </div>
            <div className="header2">
              <b>
                <u>Intern application form.</u>
              </b>
            </div>
          </div>
        </div>

        {/* <div className="photo">
          <label>
            Select Image
            <img src="img/camera (1).png" alt="Logo" className="Logo"> 
            <i className="fa fa-2x fa-camera"></i>
            <input id="inputTag" type="file" />
            <span id="imageName"></span>
          </label>
        </div> */}

        <div className="wholeform">
          <div className="formm" id="Form">
            <p>
              <b> Personal Information </b>{" "}
            </p>

            <div className="form1">
              <div className="group">
                <label>
                  <b>Full Name:</b>
                </label>
                <input
                  type="text"
                  id="FullName"
                  name="fullName"
                  placeholder="Enter Your Full Name"
                  value={TraineeValues.fullName}
                  onChange={handleTraineeChange}
                />

                <label>
                  {" "}
                  <b>Permanent Address:</b>
                </label>
                <input
                  type="text"
                  id="permanentAdd"
                  name="permanentAdd"
                  placeholder="Enter Tole,City,District,Province"
                  value={TraineeValues.permanentAdd}
                  onChange={handleTraineeChange}
                />
              </div>
              <div className="group">
                <label>
                  {" "}
                  <b>Current Address:</b>
                </label>
                <input
                  type="text"
                  id="currentAdd"
                  name="currentAdd"
                  placeholder="Enter Tole,City,District,Province"
                  value={TraineeValues.currentAdd}
                  onChange={handleTraineeChange}
                />

                <label>
                  <b>Parents Name:</b>
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  placeholder="Enter Your Parents Name"
                  value={TraineeValues.parentName}
                  onChange={handleTraineeChange}
                />
              </div>
              <div className="group">
                <label>
                  {" "}
                  <b>Email:</b>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                  value={TraineeValues.email}
                  onChange={handleTraineeChange}
                />

                <label>
                  {" "}
                  <b>Age:</b>
                </label>
                <input
                  type="text"
                  name="age"
                  id="age"
                  placeholder="Enter Your Valid Age"
                  value={TraineeValues.age}
                  onChange={handleTraineeChange}
                />
              </div>

              <div className="group">
                <label>
                  {" "}
                  <b>Country:</b>
                </label>
                <select
                  id="country"
                  name="country"
                  value={TraineeValues.country}
                  onChange={handleTraineeChange}
                >
                  <option>select country</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AX">Aland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="BN">Brunei Darussalam</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo</option>
                  <option value="CD">
                    Congo, Democratic Republic of the Congo
                  </option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CI">Cote D'Ivoire</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curacao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                </select>

                <label>
                  {" "}
                  <b>Contact Number:</b>
                </label>
                <input
                  type="text"
                  name="contactNum"
                  id="contact"
                  placeholder="Enter Your Contact Number"
                  value={TraineeValues.contactNum}
                  onChange={handleTraineeChange}
                />
              </div>
              <div className="group">
                <div className="gender">
                  <label>
                    <b>Gender:</b>{" "}
                  </label>
                  <input type="radio" name="gender" value="gender" id="gen" />
                  Male
                  <input type="radio" name="gender" value="gender" id="gen" />
                  Female
                </div>
              </div>
            </div>

            {/* <input type="checkbox" name="Term and policy" value="Term and policy ">
            <label for="Term and policy"> I accept all the terms of use and privacy policy</label> 
        

        <input type="button" value="Submit" className="btn" onclick="savedata()">*/}
          </div>

          {/* <div className="group"></div>  */}
        </div>
        <div className="Wholeflex">
          <div className="whole">
            <div className="Jobtype">
              <div className="parttime">
                <span>
                  <b>
                    Are you currently undertaking study/training? (tick one){" "}
                  </b>
                </span>
                <div className="checkbox">
                  <input
                    type="radio"
                    name="check"
                    value={TraineeValues.check}
                    onChange={handleTraineeChange}
                    id="training"
                  />
                  <label>Yes</label>
                </div>
                <div className="checkbox">
                  <input
                    type="radio"
                    name="check"
                    value={TraineeValues.check}
                    onChange={handleTraineeChange}
                    id="training"
                  />
                  <label>No</label>
                </div>
              </div>
            </div>
            <div className="Training">
              <label>
                <b>Training or Program Name</b>
              </label>
              <input
                type="text"
                name="trainingName"
                id="TrainingName"
                value={TraineeValues.trainingName}
                onChange={handleTraineeChange}
              />
            </div>

            <div className="Jobtype">
              <span>
                <b> Available For: </b>
              </span>
              <div className="parttime1">
                <div className="gender">
                  <input
                    type="radio"
                    name="Job"
                    value={TraineeValues.Job}
                    onChange={handleTraineeChange}
                    id="Available"
                  />
                  <label>
                    {" "}
                    <b>Part Time</b>
                  </label>
                  <input
                    type="radio"
                    name="Job"
                    value={TraineeValues.Job}
                    onChange={handleTraineeChange}
                    id="Available"
                  />
                  <label>
                    <b>Full Time</b>
                  </label>
                  <input
                    type="radio"
                    name="Job"
                    value={TraineeValues.Job}
                    onChange={handleTraineeChange}
                    id="Available"
                  />
                  <label>
                    <b>Remote</b>
                  </label>
                  <input
                    type="radio"
                    name="Job"
                    value={TraineeValues.Job}
                    onChange={handleTraineeChange}
                    id="Available"
                  />
                  <label>
                    <b>Others</b>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="photo">
            <label>
              Select Image
              {/* <img src="img/camera (1).png" alt="Logo" className="Logo">  */}
              <i className="fa fa-2x fa-camera"></i>
              <input id="inputTag" type="file" />
              <span id="imageName"></span>
            </label>
          </div>
        </div>
        <div className="containerBox">
          {/* <div className="Interest">
            <label for="Your Interest"><b>Your Interest:</b></label>
            <input type="text" name="Interest" id="Interest">  */}
          <div className="interest lastflex">
            <h3 className="last-head">Your interest</h3>
            {/* <label className="your-interest"> Your interest</label>  */}
            <input type="text" id="yourInterest" className="input-interest" />
            <input
              type="text"
              className="input-interest"
              value={TraineeValues.yourInterest}
              onChange={handleTraineeChange}
            />
            <input type="text" className="input-interest" />
            <input type="text" className="input-interest" />
          </div>

          <div className="skill lastflex">
            <h3 className="last-head">Your Skill</h3>
            {/* <label className="your-interest"> Your interest</label> */}
            <input type="text" id="yourSkills" className="input-interest" />
            <input
              type="text"
              className="input-interest"
              value={TraineeValues.yourSkills}
              onChange={handleTraineeChange}
            />
            <input type="text" className="input-interest" />
            <input type="text" className="input-interest" />
          </div>

          <div className="expect lastflex">
            <h3 className="last-head">Your Expect</h3>
            {/* <label className="your-interest"> Your interest</label> */}
            <input
              type="text"
              id="yourExpect"
              className="input-interest"
              value={TraineeValues.yourExpect}
              onChange={handleTraineeChange}
            />
            <input type="text" className="input-interest" />
            <input type="text" className="input-interest" />
            <input type="text" className="input-interest" />
          </div>
        </div>

        <div className="wholeform2">
          <div className="form" id="Form">
            <p>
              <b> Reference </b>{" "}
            </p>
            <div className="form3">
              <div className="group">
                <label>
                  <b>Full Name:</b>
                </label>
                <input
                  type="text"
                  id="refName"
                  name="refName"
                  placeholder="Enter Your Full Name"
                  value={TraineeValues.refName}
                  onChange={handleTraineeChange}
                />
              </div>

              <div className="group">
                <label>
                  {" "}
                  <b>Relationship</b>
                </label>
                <input
                  type="text"
                  id="refRelation"
                  name="refRelation"
                  placeholder="Enter Your Relationship "
                  value={TraineeValues.refRelation}
                  onChange={handleTraineeChange}
                />
              </div>

              <div className="group">
                <label>
                  {" "}
                  <b>Company</b>
                </label>
                <input
                  type="text"
                  id="refCompany"
                  name="refCompany"
                  placeholder="Enter Your Company"
                  value={TraineeValues.refCompany}
                  onChange={handleTraineeChange}
                />
              </div>

              <div className="group">
                <label>
                  <b>Phone Number:</b>
                </label>
                <input
                  type="text"
                  id="refphoneNum"
                  name="refPhoneNumber"
                  placeholder="Enter Your Phone Number"
                  value={TraineeValues.refPhoneNumber}
                  onChange={handleTraineeChange}
                />
              </div>
            </div>
          </div>

          <div className="form" id="Form">
            <p>
              <b> Previous Employment</b>{" "}
            </p>
            <div className="form3">
              <div className="group">
                <label>
                  <b>Company Name:</b>
                </label>
                <input
                  type="text"
                  id="PEName"
                  name="previousCName"
                  placeholder="Enter Your Company Name"
                  value={TraineeValues.previousCName}
                  onChange={handleTraineeChange}
                />
              </div>
              <div className="group">
                <label>
                  {" "}
                  <b>Address:</b>
                </label>
                <input
                  type="text"
                  id="previousAdd"
                  name="previousAdd"
                  placeholder="Enter Your Address"
                  value={TraineeValues.previousAdd}
                  onChange={handleTraineeChange}
                />
              </div>
              <div className="group">
                <label>
                  {" "}
                  <b>Job title:</b>
                </label>
                <input
                  type="text"
                  id="previousJobTitle"
                  name="previousJobTitle"
                  placeholder="Enter Your Job title"
                  value={TraineeValues.previousJobTitle}
                  onChange={handleTraineeChange}
                />
              </div>
              <div className="group">
                <label>
                  {" "}
                  <b>Responsibility:</b>
                </label>
                <input
                  type="text"
                  id="Responsibility"
                  name="Responsibility"
                  placeholder="Enter Your Responsibility"
                  value={TraineeValues.Responsibility}
                  onChange={handleTraineeChange}
                />
              </div>
              <div className="group">
                <label>
                  <b>Contact Number:</b>
                </label>
                <input
                  type="text"
                  id="previousPhnum"
                  name="previousPhnum"
                  placeholder="Enter Your Contact Number"
                  value={TraineeValues.previousPhnum}
                  onChange={handleTraineeChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="end">
        <div className="Terms">
          <input id="checkbox" type="checkbox" />
          <label>
            {" "}
            I agree to Technology Solution Nepal
            <a href="#">Terms and Conditions</a>.
          </label>

          <div className="button">
            <button
              type="button"
              className="btn1"
              id="btnsubmit"
              onClick={PostTraineeDetails}
            >
              {" "}
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Traine;
