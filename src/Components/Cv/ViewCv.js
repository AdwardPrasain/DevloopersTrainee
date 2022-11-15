import React from "react";
import "./ViewCv.css";
{
  /* <link
  rel="stylesheet" */
}
// href="https://fonts.googleapis.com/css?family=Abril+Fatface|Poppins"></link>;

function Cv() {
  return (
    <div className="view">
      <div className="main">
        <div className="s">
        <div className="Curve"></div>
        <div className="Toppart">
          <div className="Leftside">
            <div className="upper">
              <div className="Headerline"></div>
              <div className="Photo"> </div>
            </div>
            <div className="Intro">
              <label>
                SRICHA PARAJULI
                <span id="lblName"></span>
              </label>

              <br></br>

              <label>
                <b>React Developer</b>
                <span id="lblDeveloper"></span>
              </label>
            </div>

            <div className="About">
              <label>
                <b>About Me:</b>
                <span id="lblAboutme"></span>
              </label>
              <span>
                The key intention of an interviewer while asking “tell me about
                yourself” is to know about the candidate in a brief manner and
                then follow up with questions related to the job application and
                role.
              </span>
            </div>

            <div className="Projects">
              <p> Projects</p>
              <div class="Input1">
                <div class="Input-group">
                  <ul>
                    <li>
                      <label id="lblProjectName">
                        <b>Project Name: </b>
                        {/* <span ></span> */}
                      </label>
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <label id="lblLanguage">
                        <b>Language Used: </b>
                        {/* <span span> */}
                      </label>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="Projects">
              <p> Training</p>
              <div class="Input1">
                <div class="Input-group">
                  <ul>
                    <li>
                      <label id="lblTrainingName">
                        <b>Training Name: </b>
                        {/* <span span> */}
                      </label>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <label id="lblTrainingDate">
                        <b>Date: </b>
                        {/* <span span> */}
                      </label>{" "}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <label id="lblPTrainingDescription">
                        <b>Description: </b>
                        {/* <span ></span> */}
                      </label>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="Projects">
              <p> Language </p>
              <div class="Input1">
                <div class="Input-group">
                  <ul>
                    <li>
                      <label id="lblLanguage">
                        <b>Language: </b>
                        {/* <span ></span> */}
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="rightsideline">
            <div className="rightside">
              <div className="EduDetails">
                <p>Education</p>
                <div className="LepYear">
                  <div className="Input-group">
                    <ul>
                      <li>
                        <label id="lblLevel">
                          <b>Level |</b>
                          {/* <span ></span> */}
                        </label>
                        <label id="lblPYear">
                          <b>Passed Year </b>
                          {/* <span span> */}
                        </label>{" "}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="UniAdd">
                  <div class="Input-group">
                    <ul>
                      <li>
                        <label id="lblUniversity">
                          <b>University |</b>
                          {/* <span span> */}
                        </label>
                        <label id="lblAddress">
                          <b>Address</b>
                          {/* <span span> */}
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="Bogpa">
                  <div class="Input-group">
                    <ul>
                      <li>
                        <label id="lblBoard">
                          <b>Board |</b>
                        </label>

                        <label id="lblGpa">
                          <b>Gpa</b>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="Experience">
                <p> Experience</p>
                <div class="Input1">
                  <div class="Input-group">
                    <ul>
                      <li>
                        <label id="lblJobTitle">
                          <b>Job Tilte: </b>
                        </label>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <label id="lblCompanyName">
                          <b>Company Name: </b>
                        </label>{" "}
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <label id="lblJobDuration">
                          <b>Job Duration: </b>
                        </label>{" "}
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <label id="lblJobAddress">
                          <b>Address: </b>
                        </label>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="Experience">
                <p> Skills</p>
                <div class="Input1">
                  <div class="Input-group">
                    <ul>
                      <li>
                        <label id="lblSkillName">
                          <b> Skill Name: </b>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="Experience">
                <p> Achivements</p>
                <div class="Input1">
                  <div class="Input-group">
                    <ul>
                      <li>
                        <label id="lblTitle">
                          <b> Tilte:</b>
                        </label>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <label id="lblDate">
                          <b> Date:</b>
                        </label>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <label id="lblDescription">
                          <b> Description:</b>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="Experience">
                <p> Reference</p>
                <div class="Input1">
                  <div class="Input-group">
                    <ul>
                      <li>
                        <label id="lblDesignation">
                          <b> Designation:</b>
                        </label>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <label id="lblCompanyName">
                          <b> Company Name:</b>
                        </label>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <label id="lblContact">
                          <b> Contact:</b>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="Experience">
                <p> Social Media</p>
                <div class="Input1">
                  <div class="Input-group">
                    <label>
                      <b> </b>
                      <span id="lblLink"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="Contact">
                <p> Contact</p>
                <div class="Input1">
                  <div class="Input-group">
                    <label>
                      <b>Number:</b>
                      <span id="lblNumber"></span>
                    </label>

                    <label>
                      <b>Email-Address:</b>
                      <span id="lblEmail"></span>
                    </label>

                    <label>
                      <b>Address:</b>
                      <span id="lblEmail"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Cv;
