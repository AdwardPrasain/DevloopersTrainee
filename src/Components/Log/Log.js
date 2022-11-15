import React from "react";
import "./Log.css";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Log() {
  const createLogValues = {
    ClientUserName: "9862058913",
    ClientGUID: "123",
    ProjectTitle: "",
    WeekNum: "",
    DateFrom: "",
    DateTo: "",
    SkillsLearnt: "",
    SkillsImproved: "",
    ActionImproved: "",
    EvidencesImg: "",
    EvidenceLink: "",
  };

  const [createValues, setcreateValue] = useState(createLogValues);

  const handleCreateChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setcreateValue({ ...createValues, [name]: value });
  };
  
  const [logDatas, setlogDatas] = useState([]);

        const [logErrors, setlogErrors] = useState({});
        
              const [islogSubmit, setIslogSubmit] = useState(false);
        
              const [LogsaveButton, setLogSaveButton] = useState(true)
        
              const SaveLog = (e) => {
                e.preventDefault();
                console.log(createValues);
                setlogErrors(logValidate(createValues));
                setIslogSubmit(true);
              };

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

  const PostCreateDetails = async () => {
    
    const result = await axios.post(
      "https://tsnpl.com.np/TraineeAPI/api/Log",
      createValues
    );

    if (result.data == -1) {
      alert("Date saved Sucessfully");
     
    } else {
      alert("Data couldn't be saved");
    }
    loadlogData();
    setIslogSubmit(false);
  };

  const loadlogData = async () =>{
    const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/Log?ClientUserName=9813715932&ClientGUID=456")
    //console.log(result);
    setlogDatas(result.data)
  }

  return (
    <div className="Log">
      <div className="First">
        <label>
          <span>Weekly Learning Log</span>
        </label>
      </div>
      <div className="Wrapper">
        <div className="Name">
          <label>
            <span>Project Title:</span>
          </label>

          <input
            type="text"
            name="ProjectTitle"
            value={createValues.Name}
            onChange={handleCreateChange}
          />
        </div>
        <div className="Name">
          <label>
            <span>Week Number:</span>
          </label>

          <input
            type="text"
            name="WeekNum"
            value={createValues.WeekNum}
            onChange={handleCreateChange}
          />
        </div>

        <div className="Name">
          <label>
            <span>Started Date:</span>
          </label>

          <input
            type="Date"
            name="DateFrom"
            placeholder="Enter your Started Date"
            value={createValues.DateFrom}
            onChange={handleCreateChange}
          />
          <label>
            <span> Ended Date:</span>
          </label>

          <input
            type="Date"
            name="DateTo"
            placeholder="Enter your Ended Date"
            value={createValues.DateTo}
            onChange={handleCreateChange}
          />
        </div>

        <div className="Name">
          <label>What have I done?</label>
          <textarea
            type="text"
            name="Done"
            placeholder=""
            value={createValues.Done}
            onChange={handleCreateChange}
            rows="4"
            columns="50"
          />
        </div>
      </div>
      
      <div className="Observation">
        <label>Observation</label>
      </div>

      <div className="Below">
        <div className="Skil">
          <label>Skill, I have learnt or did better.</label>
          <textarea
            name="SkillsLearnt"
            placeholder=""
            value={createValues.SkillsLearnt}
            onChange={handleCreateChange}
          />
        </div>

        <div className="Skil">
          <label>Skill, that can be improved more.</label>
          <textarea
            name="SkillsImproved"
            placeholder=""
            value={createValues.SkillsImproved}
            onChange={handleCreateChange}
          />
        </div>
        <div className="Skil">
          <label>Any action that I can take to improve my Leraning.</label>
          <textarea
            name="ActionImproved"
            placeholder=""
            value={createValues.ActionImproved}
            onChange={handleCreateChange}
          />
        </div>
      </div>

      <div className="Observation">
        <label>Evidence</label>
      </div>
     
      <div className='Evidence'>
             <div className='ev'>
            <div className='evContent'>
                <label>Image</label>
                <input type='file' name='EvidenceImg' value={createValues.EvidenceImg} onChange={handleCreateChange}/>
            </div>
            <div className='evContent'>
                <label>Link</label>
                <textarea className='textarea' rows="4" cols="50" name='EvidenceLink' value={createValues.EvidenceLink} onChange={handleCreateChange}/>
            </div>
            </div>
        </div>

      <button class="button-1" role="button" onClick={PostCreateDetails}>
        Submit
      </button>
      <button class="button-1" role="button">
        Print
      </button>
     
    </div>
  );
}