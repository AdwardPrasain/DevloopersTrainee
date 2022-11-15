import React from 'react'
import './Traine.css';

function Traine() {
  return (
    <div className='traine'>
         
    <div className="Wholes">

        <div className="Theader">
            <h1><b>Technology Solution Nepal Pvt. Ltd.</b></h1>
            <h3> Biratnagar, Nepal</h3>
            <h3> <u>Internship Application Form</u></h3>

        </div>

        

        <div className="Tcontainer">
            <div className="TPhoto">
                <label for="TinputTag">
                    Select Image 
                    {/* <img src="img/Icons.png" alt="Logo" className="Logo"> */}

                    <input id="inputTag" type="file" />
                  
                    <span id="imageName"></span>
                </label>
            </div>

            <div className="TDetails">
                Personal Information
            </div>

            <div className="Trow">
                <div className="Full Name">
                    <label> Full Name: </label>
                    <input type="text" id="name" />
                </div>


                <div className="TPermanentAddress">
                    <label> Permanent Address: </label>
                    <input type="text" id="padd" />
                </div>

                <div className="TAddress1">
                    <label> Current Address:</label>
                    <input type="text" id="cadd" />
                </div>

                <div className="TGender">
                    <label> Gender:</label>
                    <input type="text" id="gen" name="Gender" />
                </div>

                <div className="TAge">
                    <label> Age:</label>
                    <input type="number" min="1" id="age" />
                </div>

            </div> 

            <div className="Trow1">


                <div className="TCountry">
                    <label> Country:</label>
                    <input type="text" id="country" />
                </div>

                <div className="TContact">
                    <label> Contact.No:</label>
                    <input type="text" id="connumber" />
                </div>

                <div className="TParents">
                    <label>ParentsName:</label>
                    <input type="text" id="pname" />
                </div>

                <div className="TEmail">
                    <label> Email Adress:</label>
                    <input type="text" id="email" />
                </div>

            </div>
        </div>


     
        <div className="Tsector1">
        <div className="Tcommon">
            <div className="Tform-group">
              <div className="Tbelow-table">
                <p>Are you currently undertaking study/training?(tick one)</p>
                <input type="Radio" id="y" name="yes" value="0"/>Yes
                <input type="Radio" id="y" name="yes" value="1"/>No
              </div>
          </div>
          <div className="Tform-group">
            <div className="TTraining">
            <label>Training or Program Name:</label>
            <input type="text" className="input" id="training"/>
          </div>
            </div>
          </div>
      
          <div className="Tcommon">
            <div className="Tform-group">
              <div className="TjobType">  
                <label>Available For: </label>
                <input type="Radio" id="job" name="Job" value="0"/>Full-Time
                <input type="Radio" id="job" name="Job" value="1"/>Remote
                <input type="Radio" id="job" name="Job" value="2"/>Part-Time
                <input type="Radio" id="job" name="Job" value="3"/>Other
              </div>
              </div>
          </div>

        </div>


        <div className="Tsector1">
        <div className="Tsector">
            <div className="Tbadge">Your Skills</div>
            <input type="text" id="skill"/>
          </div>
          <div className="Tsector">
            <div className="Tbadge">Your Interest</div>
            <input type="text" id="interest"/>
          </div>
          <div className="Tsector">
            <div className="Tbadge">What do you expect?</div>
            <input type="text" id="expect"/>
          </div>
        </div>


        

        <div className="Tcontainer">

            <div className="TReference1">
                Reference
            </div>


            <div className="Trow">
                <div className="TFullN">
                    <label> FullName:</label>
                    <input type="text" id="FName"/>
                </div>

                <div className="TRelationhip">
                    <label> Relationhip :</label>
                    <input type="text" id="Relation"/>
                </div>

                <div className="TCompany">
                    <label> Company :</label>
                    <input type="text" id="com"/>
                </div>

                <div className="TNumber">
                    <label> PhNumber :</label>
                    <input type="text" id="NumbeR"/>
                </div>



            </div>
        </div>

        <div className="Tcontainer">

            <div className="TPrevious">
                Previous Employment
            </div>



            <div className="Trow">
                <div className="TCompany">
                    <label> Company Name: </label>
                    <input type="text" id="CompanyName"/>
                </div>

                <div className="TAddress">
                    <label> Address: </label>
                    <input type="text" id="adres"/>
                </div>

                <div className="TJob">
                    <label> Job Title: </label>
                    <input type="text" id="Jobtitle"/>
                </div>

                <div className="TResponsibilities">
                    <label> Responsibility: </label>
                    <input type="text" id="responsibilities"/>
                </div>

                <div className="TPhnumber">
                    <label> CompanyPhNumber: </label>
                    <input type="text" id="companytlnumber"/>
                </div>


            </div>

        </div>


        <div className="Tcontainer">
            <div className="TDisclaimer">
                Disclaimer 
            </div>

            <div className="Trow4">
                <h3> I certify that my answers are true and complete to the best of my knowledge.
                    If this application leads to the employment, I understand that false or misleading information in my
                    application or interview may result in my release.</h3>



            </div>


        </div>





        <div className="Tbutton">
            <button type="button" className="Tbtn1" id="btnSubmit">Submit</button>
        </div>



    </div>

    </div>
  )
}

export default Traine