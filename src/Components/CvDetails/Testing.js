import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Testing.css";
import { useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";

export default function Create() {

  let navigate = useNavigate();

  const initialEduValues = {
    clientusername: "9860607052",
    clientguid: "123",
    edulevel: "",
    university: "",
    address: "",
    gpa : "",
    board: "",
    passedyear: "",
  };

//this hook is for save data, its an object, cause we are sending one data at a time
  const [eduValues, setEduValues] = useState(initialEduValues);

//this hook is for load data, its an array of object, cause data will be in array of object form
  const [eduDatas, setEduDatas] = useState([]);

//this hook is for error, in order to show 
  const [eduErrors, setEduErrors] = useState({});

  //this hook is to check the submit value..if the value is true then only post function will be called otherwise the data will not be saved
  const [isSubmit, setIsSubmit] = useState(false);

   //this hook is to check the button value..if the value is true then the button value will be Save or esle Update
  const [saveButton, setSaveButton] = useState(true)

  //this function is called if any change to the input field occurs, 
  const handleEduChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setEduValues({ ...eduValues, [name]: value });
  };

  const SaveEdu = (e) => {
    e.preventDefault();
    setEduErrors(validate(eduValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    loadEduData();
    //console.log(eduErrors);
    if (Object.keys(eduErrors).length === 0 && isSubmit) {
      PostEduDetails();
      setEduValues(initialEduValues);
    }
  }, [eduErrors, isSubmit]);


  const PostEduDetails = async () => {
    const result = await axios.post("https://tsnpl.com.np/TraineeAPI/api/TraineeEdu", eduValues);
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
  const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/TraineeEdu?ClientUserName=9860607052&ClientGUID=123")
  //console.log(result);
  setEduDatas(result.data)
}

  const validate = (values) => {
    const errors = {};
    if (!values.edulevel) {
      errors.edulevel = "edulevel is req";
    }

    if (!values.university) {
      errors.university = "uni is req";
    }
    if (!values.address) {
      errors.address = "add is req";
    }

    if (!values.gpa) {
      errors.gpa = "gap is req";
    }
    if (!values.passedyear) {
      errors.passedyear = "Passedyear is req";
    }
    return errors;
  };

  return (
    <div className="education-container">
      <div className="education-qualification">Education qualification</div>

      <div className="education-row">
        edulevel:
        <input
          type="text"
          className="input-box"
          name="edulevel"
          value={eduValues.edulevel}
          onChange={handleEduChange}
        />
        <p>{eduErrors.edulevel}</p>
      </div>

      <div className="education-row">
        University:{" "}
        <input
          type="text"
          className="input-box"
          name="university"
          value={eduValues.university}
          onChange={handleEduChange}
        />
        <p>{eduErrors.university}</p>
      </div>

      <div className="education-row">
        Address:{" "}
        <input
          type="text"
          className="input-box"
          name="address"
          value={eduValues.address}
          onChange={handleEduChange}
        />
        <p>{eduErrors.address}</p>
      </div>

      <div className="education-row">
        GPA:
        <input
          type="text"
          className="input-box"
          name="gpa"
          value={eduValues.gpa}
          onChange={handleEduChange}
        />
        <p>{eduErrors.gpa}</p>
      </div>

      <div className="education-row">
        Passed Year:
        <input
          type="text"
          className="input-box"
          name="passedyear"
          value={eduValues.passedyear}
          onChange={handleEduChange}
        />
        <p>{eduErrors.passedyear}</p>
      </div>

      <input
        type="button"
        className="btn btn-primary"

        value={saveButton ? "Save" : "Update"}
        name="add"
        onClick={SaveEdu}
      />
              <table>
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>EduLevel</th>
                    <th>University</th>
                    <th>Address</th>
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
                      <td>{data.GPA}</td>
                      <td>{data.PassedYear}</td>
                      <td><input type="button" className="btn btn-sm btn-primary" value="Edit" /> | <input type="button" className="btn btn-sm btn-danger" value="Delete" /></td>
                    </tr>
                    ))
                 }
                </tbody>
              </table>

    </div>
  );
}