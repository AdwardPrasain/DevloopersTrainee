import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react'
import './CreateLog.css'
function CreateLog() {
    const initiallogValues={
        ClientUserName:"9813715932",
        ClientGUID:"456",
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
        
              const [LogsaveButton, setLogSaveButton] = useState(true)
        
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
                }
                else {
                  alert("Data cannot be Saved");
                }
                loadlogData();
                setIslogSubmit(false);
              }
            
              const loadlogData = async () =>{
              const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/Log?ClientUserName=9813715932&ClientGUID=456")
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
        <div className='Log'>
             <div className='headingLog'>
             <h1>Weekly Learning Log</h1>
             </div>
        <div className='LogContent'>
            <div className='contentGroup'>
                <label> Project Title </label>
                <input type='text' name='ProjectTitle' value={logValues.ProjectTitle} onChange={handlelogChange}/>
            </div>

            <div className='contentGroup'>
                <label> Week Number </label>
                <input type='text' name='WeekNum' value={logValues.WeekNum} onChange={handlelogChange}/>
            </div>
            <div className='Groups'>
            <div className='contentGroup'>
                <label>Start Date</label>
                <input type='text' name='DateFrom' value={logValues.DateFrom} onChange={handlelogChange}/>
            </div>

            <div className='contentGroup'>
                <label>End Date</label>
                <input type='text' name='DateTo' value={logValues.DateTo} onChange={handlelogChange}/>
            </div>
            </div>
            
        </div>
        <div className='haveDone'>
                <label>What have I done?</label>
                <textarea className='textarea' rows="4" cols="50" name='Done' value={logValues.Done} onChange={handlelogChange}/>
            </div>
            <div className='obersvation'>
            <div className='obHead'>Observation</div>
            <div className='obContent'>
                <label>Skills that I have learnt or did better.</label>
                <textarea className='textarea' rows="4" cols="50" name='SkillsLearnt' value={logValues.SkillsLearnt} onChange={handlelogChange}/>
            </div>
            <div className='obContent'>
                <label>Skills that can be improved.</label>
                <textarea className='textarea' rows="4" cols="50" name='SkillsImproved' value={logValues.SkillsImproved} onChange={handlelogChange}/>
            </div>
            <div className='obContent'>
                <label>Any action that I can take to improve more my learning.</label>
                <textarea className='textarea' rows="4" cols="50" name='ActionImproved' value={logValues.ActionImproved} onChange={handlelogChange}/>
            </div>
        </div>
        <div className='Evidence'>
            <div className='evHead'>Evidence</div>
            <div className='ev'>
            <div className='evContent'>
                <label>Image</label>
                <input type='file' name='EvidenceImg' value={logValues.EvidenceImg} onChange={handlelogChange}/>
            </div>
            <div className='evContent'>
                <label>Link</label>
                <textarea className='textarea' rows="4" cols="50" name='EvidenceLink' value={logValues.EvidenceLink} onChange={handlelogChange}/>
            </div>
            </div>
        </div>
        <div className="buttonss">
                        <input type="button" id="btnSaved" value={SaveLog ? "Save" : "Update"} onClick={PostLogDetails}/>
         </div>
        </div>
    </div>
  )
}

export default CreateLog