
import React from 'react'
import './EduDetails.css';
import {useState, useEffect, useContext} from 'react'
import LoginContext from '../../Context/LoginContext';
import axios from "axios";
import { useNavigate } from "react-router-dom";



function EduDetails() {
  
  const {ClientUserName, ClientGUID, URL} =  useContext(LoginContext);

  let navigate = useNavigate();
    const initialEduValues = {
        clientusername: ClientUserName,
        clientguid: ClientGUID,
        edulevel: "",
        university: "",
        address: "",
        gpa : "",
        board: "",
        passedyear: "",
      };
      //this hook is for save data, its an object, cause we are sending one data at a time
  const [EduValues, setEduValues] = useState(initialEduValues);
      
  const handleEduChange = (e) =>{
      e.preventDefault();
      console.log(e.target);
      const { name, value } = e.target;
      setEduValues({ ...EduValues, [name]: value });
      }

      const [eduDatas, seteduDatas] = useState([]);

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
      }, [eduErrors, isSubmit]);

      const PostEduDetails = async () => {
      
        const result = await axios.post(URL+"TraineeEdu", EduValues);
        //navigate("/");
        console.log(result);
        if(result.data === -1){
          alert("Data Saved Successfully");
        }
        else {
          alert("Data cannot be Saved");
        }
        loadEduData();
        setIsSubmit(false);
    
      }
    
      const loadEduData = async () =>{
      const result = await axios.get(URL+ "TraineeEdu?ClientUserName=" + ClientUserName + "&ClientGUID=" + ClientGUID);
      //console.log(result);
      seteduDatas(result.data)
    }
    
      const validate = (values) => {
        const errors = {};
        if (!values.edulevel) {
          errors.edulevel = "*";
        }
    
        if (!values.university) {
          errors.university = "*";
        }
        if (!values.address) {
          errors.address = "add is req";
        }
        if (!values.board){
          errors.board = "board is req"
        }
    
        if (!values.gpa) {
          errors.gpa = "gap is req";
        }
        if (!values.passedyear) {
          errors.passedyear = "Passedyear is req";
        }
        return errors;
      };

      const DeleteEduData = async(Id) => {
 
        const result = await axios.delete(`${URL}TraineeEdu/${Id}`)
        console.log(result);
    
        if(result.data == -1)
        {
          alert("Data Deleted Successfully");
          loadEduData();
        }
        
      }

    
  return (
    <div>
         <div className="common" id="per">
            <div className="personal">
              <div className="badges">Education</div>
              <div className="form-row">
                <div className="form-group">
                  <label className="label">Level:</label>
                  <input type="text" className="input"  id="level" name='edulevel' value={EduValues.edulevel} onChange={handleEduChange}/>
                  <p>{eduErrors.edulevel}</p>
                </div>
                <div className="form-group">
                    <label className="label" name="university">University:</label>
                    <input type="text" className="input" id="university" name='university' value={EduValues.university} onChange={handleEduChange}/>
                  </div>
                  <div className="form-group">
                    <label className="label" >Address:</label>
                    <input type="text" className="input" id="U-add" name="address" value={EduValues.address} onChange={handleEduChange}/>
                  </div>
                  <div className="form-group">
                    <label className="label">Board:</label>
                    <input type="text" className="input" id="board" name="board" value={EduValues.board} onChange={handleEduChange} />
                  </div>
                  <div className="form-group">
                    <label className="label" >GPA:</label>
                    <input type="text" className="input" id="gpa" name="gpa" value={EduValues.gpa} onChange={handleEduChange}/>
                  </div>
                  <div className="form-group">
                    <label className="label">Passed Year:</label>
                    <input type="text" className="input" id="pYear" name="passedyear" value={EduValues.passedyear} onChange={handleEduChange}/>
                  </div>
    </div>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Level</th>
          <th>University</th>
          <th>Address</th>
          <th>Board</th>
          <th>GPA</th>
          <th>Passed Year</th>
          <th>Action</th>   
        </tr>
      </thead>
      <tbody>
      {
                    eduDatas.map((data, index) => (
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
   <div className="button">
    <input type="button" id="btnadd" value={saveButton ? "Save" : "Update"}
        name="add"
        onClick={SaveEdu}/>
   </div>
  </div>
  </div>
  )
}
export default EduDetails