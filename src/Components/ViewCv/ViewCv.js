import React from 'react'
import "./ViewCv.css"

function ViewCv() {
  return (
    <div className="viewCv">
        <div className="space"></div>
      <div className="viewCvContainer">
        <div className="firstPart">
        <div className="nameDesignation">
        <label id="lblfullName">Priyanka khadka</label>
        <label id="lbldesignation">Developer</label>
     </div>
     <div className="imageAboutme">
        <div class="image">
        <span>image</span>
        </div>

        <div class="aboutMyself">
          <label id="lblaboutme">About myself</label><br/>
        <label id="lblaboutmyself"></label>
        </div>
        </div>
        </div>

        <div className="middlePart">
          <div className="left">
           <div className="eduContainer">
            <div className="eduTitle">Education</div>

            <div className="eduRow">
            <label for="edulevel"><b/>Level:</label>
             <label id="lbleduLevel"></label>
            </div>

            <div className="eduRow">
            <label for="eduUni"><b/>University:</label>
             <label id="lbleduUni"></label>
            </div>

            <div className="eduRow">
            <label for="eduAdd"><b/>Address:</label>
             <label id="lbleduAdd"></label>
            </div>

            <div className="eduRow">
            <label for="eduBoard"><b/>Board:</label>
             <label id="lbleduBoard"></label>
            </div>

            <div className="eduRow">
            <label for="eduGpa"><b/>GPA:</label>
             <label id="lbleduGpa"></label>
            </div>

            <div className="eduRow">
            <label for="eduPassed"><b/>Passed Year:</label>
             <label id="lbleduPassed"></label>
            </div>
           </div>


           <div className="projectContainer">
           <div className="projectTitle">Project</div>
           <div className="projectRow">
            <label for="projectName"><b/>Project Name:</label>
             <label id="lblprojectName"></label>
            </div>

            <div className="projectRow">
            <label for="projectDescription"><b/>Project Description:</label>
             <label id="lblprojectDescription"></label>
            </div>

            <div className="projectRow">
            <label for="projectLanguage"><b/>Language Used:</label>
             <label id="lblprojectLanguage"></label>
            </div>
           </div>

           <div className="trainingContainer">
           <div className="trainingTitle">Training</div>
          

            <div className="trainingRow">
            <label for="trainingName"><b/>Training Name:</label>
             <label id="lblTrainingName"></label>
            </div>
            <div className="trainingRow">
            <label for="trainingDescription"><b/>training Description:</label>
             <label id="lbltrainingDescription"></label>
            </div>
           </div>


           <div className="referenceContainer">
           <div className="referenceTitle">Reference</div>
           {/* <div className="referenceRow">
            <label for="referenceDesgination"><b/>Designtion:</label>
             <label id="lblreferenceDesignation"></label>
            </div> */}

            <div className="referenceRow">
            <label for="companyName"><b/>Company Name:</label>
             <label id="lblcompanyName"></label>
            </div>

            <div className="referenceRow">
            <label for="referenceContact"><b/>Contact:</label>
             <label id="lblreferenceContact"></label>
            </div>
           </div>

           <div className="languageContainer">
           <div className="languageTitle">Language</div>
            <div className="languageRow">
            <label for="languageTitle"><b/>Language:</label>
             <label id="lblLanguage"></label>
            </div> 
          </div>

          </div>



          <div className="right">
          <div className="expeContainer">
            <div className="expeTitle">Experience</div>

            <div className="expeRow">
            <label for="expejobTitle"><b/>Job Title:</label>
             <label id="lblexpeJob"></label>
            </div>

            <div className="expeRow">
            <label for="expeCompany"><b/>Company Name:</label>
             <label id="lblexpeCompany"></label>
            </div>

            <div className="expeRow">
            <label for="expeDuration"><b/>Duration:</label>
             <label id="lblexpeDuration"></label>
            </div>

            <div className="expeRow">
            <label for="expeAddress"><b/>Address:</label>
             <label id="lblexpeAddress"></label>
            </div>

            <div className="expeRow">
            <label for="expeRole"><b/>Role:</label>
             <label id="lbleduGpa"></label>
            </div>

           </div>

           <div className="achievementContainer">
           <div className="achievementTitle">Achievement</div>
            <div className="achievementRow">
            <label for="achieveTitle"><b/>Title:</label>
             <label id="lblachieveTitle"></label>
            </div> 

            <div className="achievementRow">
            <label for="achievementDate"><b/>Date:</label>
             <label id="lblachievementDate"></label>
            </div>

            <div className="achievementRow">
            <label for="achievementDescription"><b/>Achievement Description:</label>
             <label id="lblachievementDescription"></label>
            </div>
           </div>

           <div className="skillContainer">
           <div className="skillTitle">Skills</div>
            <div className="skillRow">
            <label for="skillTitle"><b/>Skills:</label>
             <label id="lblskill"></label>
            </div> 
          </div>

          <div className="contactContainer">
           <div className="contactTitle">contact</div>
            <div className="contactRow">
            <label for="contactTitle"><b/>Email Address:</label>
             <label id="lblcontactEmail"></label>
            </div> 

            <div className="contactRow">
            <label for="contactAddress"><b/>Address:</label>
             <label id="lblcontactAddress"></label>
            </div>

            <div className="contactRow">
            <label for="contactPhoneNumber"><b/>Phone Number:</label>
             <label id="lblcontactPhoneNumber"></label>
            </div>

            <div className="socialTitle">Social Media</div>
            <div className="socialRow">
            <label for="facebook"><b/>facebook:</label>
             <label id="lblfacebook"></label>
            </div> 

            <div className="socialRow">
            <label for="instagram"><b/>Instagram:</label>
             <label id="lblinstagram"></label>
            </div>

            <div className="socialRow">
            <label for="linkedin"><b/>LinkedIn:</label>
             <label id="lbllinkedin"></label>
            </div>
           </div>
            
           
          </div>
        </div>
        </div> 
    </div>
  )
}

export default ViewCv
