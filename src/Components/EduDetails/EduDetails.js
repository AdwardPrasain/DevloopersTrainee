import React from 'react'
import './EduDetails.css';
import axios from "axios";
import { useState, useEffect, useContext } from 'react';


import { LoginContext } from '../../Context/LoginContext';
// import {useNavigate} from "react-router-dom";

function EduDetails() {

  // let navigate = useNavigate();

  const {ClientUserName, ClientGUID, URL} =  useContext(LoginContext);

  const initialEduValues = {
    clientguid:ClientGUID,
    clientusername:ClientUserName,
    edulevel: "",
    university: "",
    address: "",
    gpa: "",
    board: "",
    passedyear: "",
  };
  const [EduValues, setEduValues] = useState(initialEduValues);


  const handleEduChange = (e) => {
    e.preventDefault();
 
    const { name, value } = e.target;
    setEduValues({ ...EduValues, [name]: value });
  };
  const [EduDatas, setEduDatas] = useState([]);

      const [eduErrors, setEduErrors] = useState({});

      const [isSubmit, setIsSubmit] = useState(false);

      const [saveButton, setSaveButton] = useState(true);

      const SaveEdu = (e) => {

        e.preventDefault();
      
        setEduErrors(validate(EduValues));

       
        setIsSubmit(true);
      };
  
   useEffect(() => {
    loadEduData();
    if (Object.keys(eduErrors).length === 0 && isSubmit) {
      PostEduDetails();
      setEduValues(initialEduValues);
    }
  },[eduErrors, isSubmit]);


  const PostEduDetails = async () => {
    const result = await axios.post(URL + "TraineeEdu", EduValues);
    //navigate("/");
    console.log(result);
    
    if(result.data === -1){
      alert("Data Saved Successfully");
     loadEduData();
     setEduValues(initialEduValues);
    }
    else { 
      alert("Data cannot be Saved");
    } 
    loadEduData();
     setIsSubmit(false);

  }
 


  const loadEduData = async () => {
    const result = await axios.get(URL + "TraineeEdu?ClientUserName=" + ClientUserName +"&ClientGUID="+ ClientGUID);
    console.log(result);
    setEduDatas(result.data)
  }

    const validate = (values) => {
      const errors = {};
      if (!values.edulevel) {
        errors.edulevel = "* Fill the level, level is empty. *";
      }
  
      if (!values.university) {
        errors.university = "* Fill the university, level is empty. *";
      }
      if (!values.address) {
        errors.address = "* Fill the address, address is empty.*";
      }
      if (!values.board){
        errors.board = "* Fill the board, board is empty.*"
      }
  
      if (!values.gpa) {
        errors.gpa = "* Fill the gpa, gpa is empty. *";
      }
      if (!values.passedyear) {
        errors.passedyear = "* Fill the passed year,passed year is empty. *";
      }
      return errors;
    };

    const DeleteEduData = async(Id) => {
 
        const result = await axios.delete(`${URL}TraineeEdu/${Id}`)
        console.log(result);
    
        if(result.data === -1)
        {
          alert("Data Deleted Successfully");
          loadEduData();
        }
        
      }

  return (
    <div className="econtainer">
      <div className="ebody">
       <div className="educationContainer">
          <div className="educationQualification">Education qualification</div>

          {/*  Input fileds for education qualification */}
          <div className="educationRow">
            Level: <input type="field" name="edulevel" className="einputBox" id="edulevel" value={EduValues.edulevel} onChange={handleEduChange} />
            </div>
            <div className="eduWarn">{eduErrors.edulevel}</div>

            <div className="educationRow">
              University: <input type="field"  name="university" className="einputBox" id="university" value={EduValues.university} onChange={handleEduChange} />
              </div>
              <div className="eduWarn">{eduErrors.university}</div>

            <div className="educationRow">
            Address: <input type="field" name="address" className="einputBox" id="address" value={EduValues.address} onChange={handleEduChange} />
             </div>
            <div className="eduWarn">{eduErrors.address}</div>

          <div className="educationRow">
          Board:<input type="field" name="board" className="einputBox" id="board" value={EduValues.board} onChange={handleEduChange} />
          </div>
          <div className="eduWarn">{eduErrors.board}</div>
      
          <div className="educationRow">
            GPA:<input type="field" name="gpa" className="einputBox" id="gpa" value={EduValues.gpa} onChange={handleEduChange} />
            </div>
            <div className="eduWarn">{eduErrors.gpa}</div>

          <div className="educationRow">
            Passed Year: <input type="field" name="passedyear" className="einputBox" id="passed-year" value={EduValues.passedyear} onChange={handleEduChange} />
             </div>
             <div className="eduWarn">{eduErrors.passedyear}</div>


        <div className="eduBtn">
             <input type="button" value={saveButton ? "Save" : ""} className="eaddButton" id="eadd" onClick={SaveEdu} />  
             <input type="button" value="Update" className="eupdateButton" id="eupdate" onClick={PostEduDetails}/>   
</div>

             {/*Table of the form inside education qualification  */}
             
             <div>
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Level</th>
                    <th>University</th>
                    <th>Address</th>
                    <th>board</th>
                    <th>GPA</th>
                    <th>Passed Year</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    EduDatas.map((data, index) => (
                      <tr key={index}>
                      <td>{index+1}</td>
                      <td>{data.EduLevel}</td>
                      <td>{data.University}</td>
                      <td>{data.Address}</td>
                      <td>{data.Board}</td>
                      <td>{data.GPA}</td>
                      <td>{data.PassedYear}</td>
                      <td><input type="button" className="btns" id='btnid' value="Edit" /> | <input type="button" className="btns" id='btnid' value="Delete" onClick={() => DeleteEduData(data.Id)}/></td>
                    </tr>
                    ))
                  }
                </tbody>
              </table>
             </div>
        </div>
        </div>
    </div>
  );
}

export default EduDetails

