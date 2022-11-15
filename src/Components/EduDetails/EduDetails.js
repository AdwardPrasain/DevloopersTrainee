import React from 'react'
import './Edu.css'
import {useState, useEffect} from 'react'
import axios from "axios";

function EduDetails() {
    const EduDetailsValues={
        clientusername:"9818593799",
        clientguide:"567",
        EduLevel:"",
        University:"",
        Address:"",
        Board:"",
        GPA:"",
        PassedYear:"",
    };

    const [EduValues, setEduvalues] =  useState(EduDetailsValues);

    const handleEduChange = (e) =>{
        e.preventDefault();
        console.log(e.target);
        const { name, value } = e.target;
        setEduvalues({ ...EduValues, [name]: value });

        }
        const [eduDatas, seteduDatas] = useState([]);

        const [eduErrors, setEduErrors] = useState({});
  
        const [isSubmit, setIsSubmit] = useState(false);
  
        const [saveButton, setSaveButton] = useState(true)
  
        const SaveEdu = (e) => {
          e.preventDefault();
          console.log(EduValues);
          setEduErrors(validate(EduValues));
          setIsSubmit(true);
        };
  
        
  
        useEffect(() => {
          loadEduData();
        }, []);
  
        const PostEduDetails = async () => {
        
          const result = await axios.post("https://tsnpl.com.np/TraineeAPI/api/TraineeEdu", EduValues);
          //navigate("/");
          console.log(result);
          if(result.data == -1){
            alert("Data Saved Successfully");
          }
          else {
            alert("Data cannot be Saved");
          }
          loadEduData();
          setIsSubmit(false);
      
        }
      
        const loadEduData = async () =>{
        const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/TraineeEdu?ClientUserName=9818593799&ClientGUID=567")
        //console.log(result);
        seteduDatas(result.data)
      }
      
        const validate = (values) => {
          const errors = {};
          if (!values.EduLevel) {
            errors.EduLevel = "edulevel is req";
          }
      
          if (!values.University) {
            errors.University = "uni is req";
          }
          if (!values.Address) {
            errors.Address = "add is req";
          }
          if (!values.Board){
            errors.Board = "board is req"
          }
      
          if (!values.GPA) {
            errors.GPA = "gap is req";
          }
          if (!values.PassedYear) {
            errors.PassedYear = "Passedyear is req";
          }
          return errors;
        };
  
        const DeleteEduData = async(Id) => {
   
          const result = await axios.delete(`https://tsnpl.com.np/TraineeAPI/api/TraineeEdu/${Id}`)
          console.log(result);
      
          if(result.data == -1)
          {
            alert("Data Deleted Successfully");
            loadEduData();
          }
          
        }

  return (
    <div>
        
        <div className="Econtainer">

            <div className="EDetails">
                Education
            </div>

            <div className="Erow">
                <div className="Eform">
                    <label> Level :</label>
                    <input type="text" id="level" name='EduLevel' value={EduValues.EduLevel} onChange={handleEduChange}/>
                </div>

                <div className="Eform">
                    <label>University :</label>
                    <input type="text" id="uni" name='University' value={EduValues.University} onChange={handleEduChange} />
                </div>

                <div className="Eform">
                    <label> Address :</label>
                    <input type="text" id="add" name='Address' value={EduValues.Address} onChange={handleEduChange}/>
                </div>

                <div className="Eform">
                    <label> Board :</label>
                    <input type="text" id="board" name='Board' value={EduValues.Board} onChange={handleEduChange}/>
                </div>

                <div className="Eform">
                    <label> GPA :</label>
                    <input type="text" id="gpa" name='GPA' value={EduValues.GPA} onChange={handleEduChange}/>
                </div>

                <div className="Eform">
                    <label> Passed Year:</label>
                    <input type="text" id="pass" name='PassedYear' value={EduValues.PassedYear} onChange={handleEduChange}/>
                </div>

            </div>




            <table className="Etable">
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
                <tbody>{
                    eduDatas.map((data, index) => (
                      <tr key={index}>
                      <td>{index+1}</td>
                      <td>{data.EduLevel}</td>
                      <td>{data.University}</td>
                      <td>{data.Address}</td>
                      <td>{data.Board}</td>
                      <td>{data.GPA}</td>
                      <td>{data.PassedYear}</td>
                      <td><input type="button" className="btns"  value="Edit" /> | <input type="button" className="btns" value="Delete" onClick={() => DeleteEduData(data.Id)}/></td>
                    </tr>
                    ))
                 }</tbody>
            </table>



            <div className="Ebutton">
                <button type="button" id="btnadd" className="Ebtn1" name='add' value={saveButton ? "Save" : ""} onClick={PostEduDetails}>ADD</button>
                <button type="button" id="btnupdate" className="Ebtn1">Update</button>
            </div>

        </div>
    </div>
  )
}

export default EduDetails