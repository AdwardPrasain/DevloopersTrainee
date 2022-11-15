import React from "react";
import "./EduDetails.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

// export default function EduDetails() {

function EduDetails() {
  const { ClientUserName, ClientGUID, URL } = useContext(LoginContext);

  const initialEduValues = {
    clientusername: ClientUserName,
    clientguid: ClientGUID,
    edulevel: "",
    university: "",
    address: "",
    gpa: "",
    board: "",
    passedyear: "",
  };
  const [EduValues, setEduValues] = useState(initialEduValues);

  const [eduDatas, setEduDatas] = useState([]);

  const handleEduChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setEduValues({ ...EduValues, [name]: value });
  };

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

    if (isSubmit) {
      PostEduDetails();
      setEduValues(initialEduValues);
    }
  }, [isSubmit]);

  const PostEduDetails = async () => {
    const result = await axios.post(URL + "TraineeEdu", EduValues);

    //navigate("/");
    console.log(result);
    if (result.data === -1) {
      alert("Data Saved Successfully");
      loadEduData();
    } else {
      alert("Data cannot be Saved");
    }
    setIsSubmit(false);
  };

  const loadEduData = async () => {
    const result = await axios.get(
      URL +
        "TraineeEdu?ClientUserName=" +
        ClientUserName +
        "&ClientGUID=" +
        ClientGUID
    );

    console.log(result.data);
    setEduDatas(result.data);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.edulevel) {
      errors.edulevel = "*";
    }

    if (!values.university) {
      errors.university = "*";
    }
    if (!values.address) {
      errors.address = "*";
    }
    if (!values.board) {
      errors.board = "*";
    }

    if (!values.gpa) {
      errors.gpa = "*";
    }
    if (!values.passedyear) {
      errors.passedyear = "*";
    }
    return errors;
  };

  const DeleteEduData = async (Id) => {
    const result = await axios.delete(`${URL}TraineeEdu/${Id}`);
    console.log(result);

    if (result.data == -1) {
      alert("Data Deleted Successfully");
      loadEduData();
    }
  };
  // const saveEduDetails = (e) => {
  //   e.preventDefault();
  //   // setEduErrors(validate(EduValues));
  //   // setIsSubmit(true);
  //   if (!EduValues.edulevel) {
  //     alert("Level is missing.");
  //     return false;
  //   }

  //   if (!EduValues.university) {
  //     alert("University is required.");
  //     return false;
  //   }

  //   if (!EduValues.gpa) {
  //     alert("Gpa is missing.");
  //     return false;
  //   }

  //   if (!EduValues.board) {
  //     alert("Board is required.");
  //     return false;
  //   }

  //   if (!EduValues.address) {
  //     alert("Address is missing.");
  //     return false;
  //   }

  //   if (!EduValues.passedyear) {
  //     alert("PassedYear is required.");
  //     return false;
  //   }
  // };

  return (
    <div>
      <div className="don">
        <div className="wholeformEdu">
          <div className="form" id="Form">
            <p> Education Qualification</p>
            <div className="form2">
              <div className="form-group">
                <input type="hidden" id="Hid" />

                <label>
                  <b>Level:</b>
                </label>
                <input
                  type="text"
                  id="Level"
                  name="edulevel"
                  placeholder="Enter Your Level"
                  value={EduValues.edulevel}
                  onChange={handleEduChange}
                />
                <span>{eduErrors.edulevel}</span>
              </div>

              <div className="form-group">
                <label>
                  {" "}
                  <b>University:</b>
                </label>
                <input
                  type="text"
                  id="University"
                  name="university"
                  placeholder="Enter Your University "
                  value={EduValues.university}
                  onChange={handleEduChange}
                />
                <span>{eduErrors.university}</span>
              </div>
              <div className="form-group">
                <label>
                  {" "}
                  <b>Address:</b>
                </label>
                <input
                  type="text"
                  id="UAddress"
                  name="address"
                  placeholder="Enter Your Address"
                  value={EduValues.address}
                  onChange={handleEduChange}
                />
                <span>{eduErrors.address}</span>
              </div>
              <div className="form-group">
                <label>
                  <b>Board:</b>
                </label>
                <input
                  type="text"
                  id="Board"
                  name="board"
                  placeholder="Enter Your Board"
                  value={EduValues.board}
                  onChange={handleEduChange}
                />
                <span>{eduErrors.board}</span>
              </div>

              <div className="form-group">
                <label>
                  {" "}
                  <b>Gpa:</b>
                </label>
                <input
                  type="text"
                  id="gpa"
                  name="gpa"
                  placeholder="Enter Your Gpa"
                  value={EduValues.gpa}
                  onChange={handleEduChange}
                />
                <span>{eduErrors.gpa}</span>
              </div>
              <div className="form-group">
                <label>
                  {" "}
                  <b>Passed Year:</b>
                </label>
                <input
                  type="text"
                  id="PYear"
                  name="passedyear"
                  placeholder="Enter Your Passed Year"
                  value={EduValues.passedyear}
                  onChange={handleEduChange}
                />
                <span>{eduErrors.passedyear}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <button
            type="button"
            className="btn"
            id="btnadd"
            name="add"
            value={saveButton ? "save" : "Update"}
            onClick={SaveEdu}
          >
            Add
          </button>
          <button
            type="button"
            className="btn"
            id="btnUpdate"
            onClick={PostEduDetails}
          >
            Update
          </button>
        </div>

        <div className="Table" id="Form">
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
              {eduDatas.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.EduLevel}</td>
                  <td>{data.University}</td>
                  <td>{data.Address}</td>
                  <td>{data.Board}</td>
                  <td>{data.GPA}</td>
                  <td>{data.PassedYear}</td>
                  <td>
                    <input
                      type="button"
                      className="btn btn-sm btn-primary"
                      value="Edit"
                    />{" "}
                    |{" "}
                    <input
                      type="button"
                      className="btn btn-sm btn-danger"
                      value="Delete"
                      onClick={() => DeleteEduData(data.ID)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EduDetails;
