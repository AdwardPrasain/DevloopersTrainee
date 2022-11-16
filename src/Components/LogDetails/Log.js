import React from 'react'
import './Log.css'
import axios from "axios";
import {useState} from 'react'

function Log() {

  const initiallogValues={
    ClientUserName:"9803322067",
    ClientGUID:"123",
    ProjectTitle:"",
    WeekNum:"",
    DateFrom:"",
    DateTo:"",
    Done:"",
    SkillsLearnt:"",
    SkillsImproved:"",
    ActionImproved:"",
    EvidenceImg:"",
    EvidenceLink:""
}
const [logValues, setlogValues] = useState(initiallogValues);
const handlelogChange = (e) =>{
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setlogValues({ ...logValues, [name]: value });
    }
    const [logDatas, setlogDatas] = useState([]);

    const [logErrors, setlogErrors] = useState({});
    
          const [islogSubmit, setIslogSubmit] = useState(false);
    
          const [LogsaveButton, setLogSaveButton] = useState(true);
    
          const SaveLog = (e) => {
            e.preventDefault();
            console.log(logValues);
            setlogErrors(logValidate(logValues));
            setIslogSubmit(true);
          };
    
          const PostLogDetails = async () => {
          
            const result = await axios.post("https://tsnpl.com.np/TraineeAPI/api/Log", logValues);
            //navigate("/");
            console.log(result);
            if(result.data == -1){
              alert("Data Saved Successfully");
              loadlogData();
              setlogValues(initiallogValues);
            }
            else {
              alert("Data cannot be Saved");
            }
            loadlogData();
            setIslogSubmit(false);
          }
        
          const loadlogData = async () =>{
          const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/Log?ClientUserName=9803322067&ClientGUID=123")
          //console.log(result);
          setlogDatas(result.data)
        }
        const logValidate = (values) => {
            const errors = {};
            if (!values.ProjectTitle) {
              errors.ProjectTitle= "Project Title is req";
            }
            if (!values.WeekNum) {
              errors.WeekNum= "Week Number is req";
            }
            if (!values.DateFrom) {
              errors.DateFrom = "Start Date is req";
            }
            if (!values.DateTo) {
                errors.DateTo = "End Date is req";
              }
            if (!values.Done) {
                errors.Done = "Skills done is req";
              }
            if (!values.SkillsLearnt) {
                errors.SkillsLearnt = "Skills Learnt is req";
              }
              if (!values.SkillsImporved) {
                errors.SkillsImporved = "Skills Improved is req";
              } 
              if (!values.ActionImproved) {
                errors.ActionImproved = "Action to improve is req";
              }
              if (!values.EvidenceImg) {
                errors.EvidenceImg = "Evidence Img is req";
              }
              if (!values.EvidenceLink) {
                errors.EvidenceLink = "Evidence Link is req";
              }
            return errors;
          };


  return (
    <div>
        <div className="log">
            <div class="logCaintainer">
           <div className="logTitle">Weekly Learning Log</div>
           <div className="contentContainer">
            <div className="firstContainer">
            <div className="logRow">
              Project Name:<input type="text" className="logInput" name="ProjectTitle" value={logValues.ProjectTitle} onChange={handlelogChange}/>
            </div>


            <div className="logRow">
              Week:<input type="number" className="logInput" name="WeekNum" value={logValues.WeekNum} onChange={handlelogChange}/>
            </div>

            <div className="logRow">
              Starting Date:<input type="text" className="logInput" name="DateFrom" value={logValues.DateFrom} onChange={handlelogChange}/>
            </div>

            <div className="logRow">
              Ending Date:<input type="text" className="logInput" name="DateTo" value={logValues.DateTo} onChange={handlelogChange}/>
            </div>

            <div className="logRow">
            What have i done?<textarea className="logtextInput"  rows="4" cols="50" name="Done" value={logValues.Done} onChange={handlelogChange}/>
            </div>

            </div>
             
             <div className="observationContainer">
              <div className="observationTitle"> Observation</div>

              <div className="observationRow">
                <label className="observationlbl">Skills, I have learnt or did better?</label>
                <textarea className="observationInput"  rows="4" cols="50"  name="SkillsLearnt" value={logValues.SkillsLearnt} onChange={handlelogChange}/>
            </div>

            <div className="observationRow">
                <label className="observationlbl">Skills, that can be improved more.</label>
                <textarea className="observationInput"  rows="4" cols="50" name="SkillsImproved" value={logValues.SkillsImproved} onChange={handlelogChange}/>
            </div>

            <div className="observationRow">
                <label className="observationlbl">Any action that I can take to improve more my learning.</label>
              <textarea className="observationInput"  rows="4" cols="50" name="ActionImproved" value={logValues.ActionImproved} onChange={handlelogChange}/>
            </div>
             </div>

             <div className="evidenceContainer">
                <div className="evidenceTitle">Evidence</div>
                <div className="evidences">
                <div className="evidenceRow">
              <input type="file" className="evidenceInput1" name="EvidenceImg" value={logValues.EvidenceImg} onChange={handlelogChange}/>
            </div>
            <div className="evidenceRow">
              Link:<input type="text" className="evidenceInput2" name="EvidenceLink" value={logValues.EvidenceLink} onChange={handlelogChange}/>
            </div>
            </div>
             </div>
             <div className="logSavebtn">
           <input type="button" className="logbtn" id="logBtn" value="Save" onClick={PostLogDetails}/>
           </div>
           </div>
            </div>
        </div>
      
    </div>
  )
}

export default Log


