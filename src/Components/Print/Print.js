import React from "react";
import "./print.css";
function Print() {
  return (
    <div className="print">
      <div className="All">
        <div className="Topp">
          {/* <img src="img/tech.jpeg" alt="Logo" className="firstimg"> */}

          <div className="headd">
            <b> Technology solution nepal Pvt Ltd.</b>

            <div className="header22 ">
              <b>
                <u>Intern application form.</u>
              </b>
            </div>
          </div>
          <div className="passport_photoo">
            {/* <label for="photo">Photo</label>  */}
            <input type="text" className="photo" />
          </div>
        </div>
        <div className="Qr">
          <label for="inputTag">
            Scan QR for online form
            <i className="fa fa-qrcode fa-5x"></i>
          </label>
        </div>

        <div className="Info">
          <div className="wholelayout">
            <div className="layout" id="layout">
              <span>Personal Information</span>
            </div>
            <div className="layout1">
              <div className="fgroup">
                <label for="fname">
                  <b>Full Name:</b>
                  <span id="lblName"></span>
                </label>
              </div>
              <div className="fgroup">
                <label for="Paddress">
                  {" "}
                  <b>permanent Address:</b>
                  <span id="lblPAddress"></span>
                </label>
              </div>
              <div className="fgroup">
                <label for="Taddress">
                  {" "}
                  <b>Temporary Address:</b> <span id="lblTAddress"></span>
                </label>
              </div>
              <div className="fgroup">
                <label for="Parents Name">
                  <b>Parents Name:</b>
                  <span id="lblPName"></span>
                </label>
              </div>
              <div className="fgroup">
                <label for="email">
                  {" "}
                  <b>Email:</b>
                  <span id="lblEmail"></span>
                </label>
              </div>

              <div className="fgroup">
                <label for="age">
                  {" "}
                  <b>Age:</b>
                  <span id="lblAge"></span>
                </label>
              </div>

              <div className="fgroup">
                <div className="check">
                  <label for="gender">
                    <b>Gender:</b>{" "}
                  </label>
                  {/* <!-- <input type="radio" name="gender" textue="male" id="check">Male
                            <input type="radio" name="gender" textue="female" id="check">Female -->
                            <label id="lblCheck"></label>
                        </div> */}
                </div>
              </div>
              <div className="fgroup">
                <label for="Contact number">
                  {" "}
                  <b>Contact Number:</b> <span id="lblNumber"></span>
                </label>
              </div>
            </div>

            <div className="layout" id="layout">
              <b> Education Qualification</b>
            </div>
            <div className="layout2">
              <div className="fgroup">
                <label for="Level">
                  <b>Level:</b>
                  <span id="lblLevel"></span>
                </label>
              </div>

              <div className="fgroup">
                <label for="University">
                  {" "}
                  <b>University:</b>
                  <span id="lblUniversity"></span>
                </label>
              </div>
              <div className="fgroup">
                <label for="Address">
                  {" "}
                  <b>Address:</b>
                  <span id="lblAddress"></span>
                </label>
              </div>
              <div className="fgroup">
                <label for="Board">
                  <b>Board:</b> <span id="lblBoard"></span>
                </label>
              </div>

              <div className="fgroup">
                <label for="Gpa">
                  {" "}
                  <b>Gpa:</b> <span id="lblGpa"></span>
                </label>
              </div>
              <div className="fgroup">
                <label for="Passed Year">
                  {" "}
                  <b>Passed Year:</b> <span id="lblPassed"></span>
                </label>
              </div>
              <div className="table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>University</th>
                      <th>Address</th>
                      <th>Board</th>
                      <th>GPA</th>
                      <th>Passed Year</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                </table>
              </div>

              {/* <!-- <div className="button">
                    <button type="button" className="btn">Submit</button>
                </div> --> */}
            </div>

            {/* <!-- <div className="fgroup"></div> --> */}

            <div className="wholee">
              <div className="forr">
                <div className="parttimee">
                  <b>
                    Are you currently undertaking study/training? (tick one):
                  </b>{" "}
                  <text id="Training"></text>
                </div>
              </div>

              <div className="forr">
                <b>Course/program name: </b>
                <text id="Program"></text>
                <div className="parttime1">
                  <div className="Availabell">
                    <b>Availabel For: </b>
                    <spam id="Available"></spam>
                  </div>
                </div>
              </div>
            </div>
            <div className="containerr">
              <div className="Interest">
                <label for="Your Interest">
                  <b>Your Interest:</b>
                  <spam id="lblInterest"></spam>
                </label>

                {/* <!-- <input type="text" name="Interest" id="Interest"> --> */}
              </div>
              <div className="Skill">
                <label for="Your Skill">
                  <b>Your Skill:</b>
                  <spam id="lblSkill"></spam>
                </label>

                {/* <!-- <input type="text" name="Skill" id="Skill"> --> */}
              </div>
              <div className="Expect">
                <label for="Expect">
                  <b>What do you Expect:</b>
                  <spam id="lblExpect"></spam>
                </label>

                {/* <!-- <input type="text" name="Expect" id="Expect"> --> */}
              </div>
            </div>

            <div className="layout2">
              <div className="layout" id="layout">
                <b> Reference </b>
              </div>
              <div className="layout3">
                <div className="fgroup">
                  <label for="Full Name">
                    <b>Full Name:</b> <span id="lblFname"></span>
                  </label>
                </div>

                <div className="fgroup">
                  <label for="Relationship">
                    {" "}
                    <b>Relationship:</b> <span id="lblRelationship"></span>
                  </label>
                </div>

                <div className="fgroup">
                  <label for="Company">
                    {" "}
                    <b>Company:</b>
                    <span id="lblCompany"></span>
                  </label>
                </div>

                <div className="fgroup">
                  <label for="Contact Number">
                    <b>Contact Number:</b>
                    <span id="lblContact"></span>
                  </label>
                </div>
              </div>

              <div className="layout" id="layout">
                <b> Previous Employment</b>
              </div>
              <div className="layout3">
                <div className="fgroup">
                  <label for="Company Name">
                    <b>Company Name:</b>
                    <span id="lblCompname"></span>
                  </label>
                </div>
                <div className="fgroup">
                  <label for="Address">
                    {" "}
                    <b>Address:</b>
                    <span id="lblAdd"></span>
                  </label>
                </div>
                <div className="fgroup">
                  <label for="Job title">
                    {" "}
                    <b>Job title:</b> <span id="lblJob"></span>
                  </label>
                </div>
                <div className="fgroup">
                  <label for="Responsibility">
                    {" "}
                    <b>Responsibility:</b>
                    <span id="lblResponsibility"></span>
                  </label>
                </div>
                <div className="fgroup">
                  <label for="Contact Number">
                    <b>Contact Number:</b> <span id="lblContactNumber"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="end">
            <div className="Terms">
              <input id="checkbox" type="checkbox" checked="checked" />
              <label for="checkbox">
                {" "}
                <b>I agree to Technology Solution Nepal</b>
                <a href="#">Terms and Conditions</a>.
              </label>

              {/* <!-- <div className="button">
                <button type="button" className="btn1">Submit</button> -->
            <!-- <div className="sign">
                <label for="text"><b> Signature:</b>
                    <label id="lbl"></label>
                    <input id="sign" type="sign" />
            </div> --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Print;
