import React from "react";
import "./CreateCv.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
function CreateCv() {
  const CreateCvValues = {
    txtAboutDes: "",
    txtFacebook: "",
    txtInstagram: "",
    txtLinkedIn: "",
  };
  const [cvValues, setcvValues] = useState(CreateCvValues);
  const handlecvChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setcvValues({ ...cvValues, [name]: value });
  };

  //Experience

  const createExperienceValues = {
    clientusername: "9862058913",
    clientguid: "456",
    JobTitle: "",
    CompanyName: "",
    CompanyAddress: "",
    JobDuration: "",
    Role: "",
  };
  const [experienceValues, setexperienceValues] = useState(
    createExperienceValues
  );
  const [experienceDatas, setexperienceDatas] = useState([]);

  const [experienceErrors, setexperienceErrors] = useState({});

  const [isexperienceSubmit, setIsExperienceSubmit] = useState(false);

  const [ExpsaveButton, setExpSaveButton] = useState(true);

  const SaveExperience = (e) => {
    e.preventDefault();
    console.log(experienceValues);
    setexperienceErrors(ExperienceValidate(experienceValues));
    setIsExperienceSubmit(true);
  };

  const PostExperienceDetails = async () => {
    const result = await axios.post(
      "https://tsnpl.com.np/TraineeAPI/api/Experience",
      experienceValues
    );
    //navigate("/");
    console.log(result);
    if (result.data == -1) {
      alert("Data Saved Successfully");
    } else {
      alert("Data cannot be Saved");
    }
    loadExperienceData();
    setIsExperienceSubmit(false);
  };

  const loadExperienceData = async () => {
    const result = await axios.get(
      "https://tsnpl.com.np/TraineeAPI/api/Experience?ClientUserName=9862058913&ClientGUID=456"
    );
    //console.log(result);
    setexperienceDatas(result.data);
  };

  const ExperienceValidate = (values) => {
    const errors = {};
    if (!values.JobTitle) {
      errors.JobTitle = "Experience Job is req";
    }
    if (!values.CompanyName) {
      errors.CompanyName = "Experience company is req";
    }
    if (!values.CompanyAddress) {
      errors.CompanyAddress = "Experience Address is req";
    }
    if (!values.JobDuration) {
      errors.JobDuration = "Experience Duration is req";
    }
    if (!values.Role) {
      errors.Role = "Experience Role is req";
    }
    return errors;
  };

  const DeleteExpData = async (Id) => {
    const result = await axios.delete(
      `https://tsnpl.com.np/TraineeAPI/api/Experience/${Id}`
    );
    console.log(result);

    if (result.data == -1) {
      alert("Data Deleted Successfully");
      loadExperienceData();
    }
  };

  const handleExperienceChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setexperienceValues({ ...experienceValues, [name]: value });
  };

  useEffect(() => {
    loadExperienceData();
  }, []);
  //Projects
  const createProjectValues = {
    ClientUserName: "9862058913",
    ClientGUID: "456",
    ProjectName: "",
    LanguageUsed: "",
    Description: "",
    Role: "",
  };
  const [projectValues, setprojectValues] = useState(createProjectValues);
  const handleProjectChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setprojectValues({ ...projectValues, [name]: value });
  };

  const [projectDatas, setprojectDatas] = useState([]);

  const [projectErrors, setprojectErrors] = useState({});

  const [isprojectSubmit, setIsprojectSubmit] = useState(false);

  const SaveProject = (e) => {
    e.preventDefault();
    console.log(projectValues);
    setprojectErrors(ProjectValidate(projectValues));
    setIsprojectSubmit(true);
  };

  const PostProjectDetails = async () => {
    const result = await axios.post(
      "https://tsnpl.com.np/TraineeAPI/api/Project",
      projectValues
    );
    //navigate("/");
    console.log(result);
    if (result.data == -1) {
      alert("Data Saved Successfully");
      loadProjectData();
    } else {
      alert("Data cannot be Saved");
    }
    setIsprojectSubmit(false);
  };

  const loadProjectData = async () => {
    const result = await axios.get(
      "https://tsnpl.com.np/TraineeAPI/api/Project?ClientUserName=9862058913&ClientGUID=456"
    );
    //console.log(result);
    setprojectDatas(result.data);
  };

  const ProjectValidate = (values) => {
    const errors = {};
    if (!values.ProjectName) {
      errors.ProjectName = "Project Name Job is req";
    }
    if (!values.LanguageUsed) {
      errors.LanguageUsed = "Language is req";
    }
    if (!values.Description) {
      errors.Description = "Description is req";
    }
    if (!values.Role) {
      errors.Role = "Role is req";
    }
    return errors;
  };

  const DeleteProjectData = async (Id) => {
    const result = await axios.delete(
      `https://tsnpl.com.np/TraineeAPI/api/Project/${Id}`
    );
    console.log(result);

    if (result.data == -1) {
      alert("Data Deleted Successfully");
      loadProjectData();
    }
  };

  useEffect(() => {
    loadProjectData();
  }, []);

  //Skills
  const createSkillValues = {
    Skill: "",
  };
  const [skillValues, setskillValues] = useState(createSkillValues);
  const handleSkillChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setskillValues({ ...skillValues, [name]: value });
  };

  //Acheivements

  const createAcheivementsValues = {
    ClientUserName: "9813715932",
    ClientGUID: "456",
    Title: "",
    Date: "",
    Description: "",
  };
  const [AcheivementValues, setAcheivementValues] = useState(
    createAcheivementsValues
  );
  const handleAcheivementsChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setAcheivementValues({ ...AcheivementValues, [name]: value });
  };

  const [AcheivementsDatas, setAcheivementsDatas] = useState([]);

  const [AcheivementsErrors, setAcheivementsErrors] = useState({});

  const [isAcheivementsSubmit, setIsAcheivementsSubmit] = useState(false);

  const SaveAcheivements = (e) => {
    e.preventDefault();
    console.log(AcheivementValues);
    setAcheivementsErrors(AcheivementValidate(AcheivementValues));
    setIsAcheivementsSubmit(true);
  };

  const PostAcheivementsDetails = async () => {
    const result = await axios.post(
      "https://tsnpl.com.np/TraineeAPI/api/Acheivement",
      AcheivementValues
    );
    //navigate("/");
    console.log(result);
    if (result.data == -1) {
      alert("Data Saved Successfully");
      loadAcheivementData();
    } else {
      alert("Data cannot be Saved");
    }
    setIsAcheivementsSubmit(false);
  };

  const loadAcheivementData = async () => {
    const result = await axios.get(
      "https://tsnpl.com.np/TraineeAPI/api/Acheivement?ClientUserName=9813715932&ClientGUID=456"
    );
    //console.log(result);
    setAcheivementsDatas(result.data);
  };

  const AcheivementValidate = (values) => {
    const errors = {};
    if (!values.Title) {
      errors.Title = "Acheivement Title is req";
    }
    if (!values.Date) {
      errors.Date = "Acheivement Date is req";
    }
    if (!values.Description) {
      errors.Description = "Description is req";
    }
    return errors;
  };

  const DeleteAcheivementData = async (Id) => {
    const result = await axios.delete(
      `https://tsnpl.com.np/TraineeAPI/api/Acheivement/${Id}`
    );
    console.log(result);

    if (result.data == -1) {
      alert("Data Deleted Successfully");
      loadAcheivementData();
    }
  };

  useEffect(() => {
    loadAcheivementData();
  }, []);

  //Training
  const createTrainingValues = {
    ClientUserName: "9813715932",
    ClientGUID: "456",
    Name: "",
    Description: "",
  };
  const [trainingValues, setTrainingValues] = useState(createTrainingValues);
  const handleTrainingChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setTrainingValues({ ...trainingValues, [name]: value });
  };

  const [TrainingsDatas, setTrainingsDatas] = useState([]);

  const [TrainingsErrors, setTrainingsErrors] = useState({});

  const [isTrainingsSubmit, setIsTrainingsSubmit] = useState(false);

  const SaveTrainings = (e) => {
    e.preventDefault();
    console.log(trainingValues);
    setTrainingsErrors(TrainingValidate(trainingValues));
    setIsTrainingsSubmit(true);
  };

  const PostTrainingsDetails = async () => {
    const result = await axios.post(
      "https://tsnpl.com.np/TraineeAPI/api/Training",
      trainingValues
    );
    //navigate("/");
    console.log(result);
    if (result.data == -1) {
      alert("Data Saved Successfully");
      loadTrainingData();
    } else {
      alert("Data cannot be Saved");
    }
    setIsTrainingsSubmit(false);
  };

  const loadTrainingData = async () => {
    const result = await axios.get(
      "https://tsnpl.com.np/TraineeAPI/api/Training?ClientUserName=9813715932&ClientGUID=456"
    );
    //console.log(result);
    setTrainingsDatas(result.data);
  };

  const TrainingValidate = (values) => {
    const errors = {};
    if (!values.Name) {
      errors.Name = "Name is req";
    }
    if (!values.Description) {
      errors.Description = "Description is req";
    }

    return errors;
  };

  const DeleteTrainingData = async (Id) => {
    const result = await axios.delete(
      `https://tsnpl.com.np/TraineeAPI/api/Training/${Id}`
    );
    console.log(result);

    if (result.data == -1) {
      alert("Data Deleted Successfully");
      loadTrainingData();
    }
  };
  useEffect(() => {
    loadTrainingData();
  }, []);

  //Language

  const createLanguageValues = {
    ClientUserName: "9862058913",
    ClientGUID: "456",
    Name: "",
  };
  const [languageValues, setlanguageValues] = useState(createLanguageValues);
  const handleLanguageChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setlanguageValues({ ...languageValues, [name]: value });
  };

  const [LanguageDatas, setLanguageDatas] = useState([]);

  const [LanguageErrors, setLanguageErrors] = useState({
    createLanguageValues,
  });

  const [isLanguageSubmit, setIsLanguageSubmit] = useState(false);

  const SaveLanguage = (e) => {
    e.preventDefault();
    console.log(languageValues);
    setLanguageErrors(LanguageValidate(languageValues));
    setIsLanguageSubmit(true);
  };

  const PostLanguageDetails = async () => {
    const result = await axios.post(
      "https://tsnpl.com.np/TraineeAPI/api/Language",
      languageValues
    );
    //navigate("/");
    console.log(result);
    if (result.data == -1) {
      alert("Data Saved Successfully");
      loadLanguageData();
    } else {
      alert("Data cannot be Saved");
    }
    setIsLanguageSubmit(false);
  };

  const loadLanguageData = async () => {
    const result = await axios.get(
      "https://tsnpl.com.np/TraineeAPI/api/Language?ClientUserName=9862058913&ClientGUID=456"
    );
    //console.log(result);
    setLanguageDatas(result.data);
  };

  const LanguageValidate = (values) => {
    alert("hjhjj");
    const errors = {};
    if (!values.Title) {
      errors.Title = "Acheivement Title is req";
    }
    if (!values.Date) {
      errors.Date = "Acheivement Date is req";
    }
    if (!values.Description) {
      errors.Description = "Description is req";
    }

    return errors;
  };

  const DeleteLanguageData = async (Id) => {
    const result = await axios.delete(
      `https://tsnpl.com.np/TraineeAPI/api/Language/${Id}`
    );
    console.log(result);

    if (result.data == -1) {
      alert("Data Deleted Successfully");
      loadLanguageData();
    }
  };

  useEffect(() => {
    loadLanguageData();
  }, []);

  //References
  const createReferenceValues = {
    ClientUserName: "9862058913",
    ClientGUID: "456",
    Position: "",
    Company: "",
    Contact: "",
  };
  const [refereneceValues, setReferenceValues] = useState(
    createReferenceValues
  );
  const handleReferencesChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setReferenceValues({ ...refereneceValues, [name]: value });
  };
  const [referenceDatas, setreferenceDatas] = useState([]);

  const [referenceErrors, setreferenceErrors] = useState({
    createReferenceValues,
  });

  const [isReferenceSubmit, setIsReferenceSubmit] = useState(false);

  const SaveReference = (e) => {
    e.preventDefault();
    console.log(referenceValues);
    setLanguageErrors(LanguageValidate(languageValues));
    setIsLanguageSubmit(true);
  };

  const PostReferenceDetails = async () => {
    const result = await axios.post(
      "https://tsnpl.com.np/TraineeAPI/api/Reference",
      referenceValues
    );
    //navigate("/");
    console.log(result);
    if (result.data == -1) {
      alert("Data Saved Successfully");
      loadreferenceData();
    } else {
      alert("Data cannot be Saved");
    }
    setIsReferenceSubmit(false);
  };

  const loadreferenceData = async () => {
    const result = await axios.get(
      "https://tsnpl.com.np/TraineeAPI/api/Reference?ClientUserName=9813715932&ClientGUID=456"
    );
    //console.log(result);
    setreferenceDatas(result.data);
  };

  const referenceValidate = (values) => {
    const errors = {};
    if (!values.Position) {
      errors.Position = "Acheivement Title is req";
    }
    if (!values.Company) {
      errors.Company = "Acheivement Date is req";
    }
    if (!values.Contact) {
      errors.Contact = "Description is req";
    }

    return errors;
  };

  const DeletereferenceData = async (Id) => {
    const result = await axios.delete(
      `https://tsnpl.com.np/TraineeAPI/api/Reference/${Id}`
    );
    console.log(result);

    if (result.data == -1) {
      alert("Data Deleted Successfully");
      loadreferenceData();
    }
  };

  useEffect(() => {
    loadreferenceData();
  }, []);
  return (
    <div className="create">
      <div className="cv">
        <span>Curriculum vitae</span>
      </div>

      <div className="main">
        <div className="upperflex">
          <div className="flex">
            <div className="About">
              <label>
                <span>About Me:</span>
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="Briefly Explain About Yourself"
              />
            </div>

            <div className="photo">
              <label>
                {/* Select Image Tap Here! */}
                <i className="fa fa-1x fa-camera"></i>
                <input id="inputTag" type="file" />
                <span id="imageName"></span>
              </label>
            </div>
          </div>

          <div className="Name">
            <label>
              <span>Your Name:</span>
            </label>

            <input
              type="text"
              name="fullName"
              placeholder="Enter your FullName"
            />
          </div>

          <div className="Designation">
            <label>
              <span>Designation:</span>
            </label>

            <input
              type="text"
              name="fullName"
              placeholder="Enter Your Designation"
            />
          </div>
        </div>

        <div className="flex">
          {/* <div className="Details">
            <div className="Education">
              <span>Education</span>
            </div>

            <div className="Edu">
              <label>
                <b>Level:</b>
              </label>
              <input
                type="text"
                id="Level"
                name="edulevel"
                placeholder="Enter Your Level"
              />
            </div>

            <div className="Edu">
              <label>
                {" "}
                <b>University:</b>
              </label>
              <input
                type="text"
                id="University"
                name="university"
                placeholder="Enter Your University "
              />
            </div>

            <div className="Edu">
              <label>
                {" "}
                <b>Address:</b>
              </label>
              <input
                type="text"
                id="UAddress"
                name="address"
                placeholder="Enter Your Address"
              />
            </div>
            <div className="Edu">
              <label>
                <b>Board:</b>
              </label>
              <input
                type="text"
                id="Board"
                name="board"
                placeholder="Enter Your Board"
              />
            </div>

            <div className="Edu">
              <label>
                {" "}
                <b>Gpa:</b>
              </label>
              <input
                type="text"
                id="gpa"
                name="gpa"
                placeholder="Enter Your Gpa"
              />
            </div>
          </div> */}

          <div className="Detail">
            <div
              className="
        Experience"
            >
              <span>Experience</span>
            </div>

            <div className="Edu">
              <label>
                <b>Job Title:</b>
              </label>
              <input
                type="text"
                id="JobTitle"
                name="JobTitle"
                value={experienceValues.JobTitle}
                onChange={handleExperienceChange}
              />
            </div>

            <div className="Edu">
              <label>
                <b>Company Name:</b>
              </label>
              <input
                type="text"
                id="CompanyName"
                name="CompanyName"
                value={experienceValues.CompanyName}
                onChange={handleExperienceChange}
              />
            </div>

            <div className="Edu">
              <label>
                <b>JobDuration:</b>
              </label>
              <input
                type="text"
                id="JobDuration"
                name="JobDuration"
                value={experienceValues.JobDuration}
                onChange={handleExperienceChange}
              />
            </div>

            <div className="Edu">
              <label>
                <b>Address:</b>
              </label>
              <input
                type="text"
                id="JobTitle"
                name="CompanyAddress"
                value={experienceValues.CompanyAddress}
                onChange={handleExperienceChange}
              />
            </div>

            {/* <div className="addbtnExperience">
            <input type="button" value={SaveExperience ? "Add" : ""}className="addbtn1" onClick={PostExperienceDetails}></input>
            <input type="button" value="Update" className="updatebtn1"></input>
           </div> */}

            <input
              type="button"
              id="btnid"
              value={SaveExperience ? "Save" : "Update"}
              onClick={PostExperienceDetails}
            />
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Job Title</th>
                  <th>Company Name</th>
                  <th>Address</th>
                  <th>Duration</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {experienceDatas.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.JobTitle}</td>
                    <td>{data.CompanyName}</td>
                    <td>{data.CompanyAddress}</td>
                    <td>{data.JobDuration}</td>
                    <td>{data.Role}</td>
                    <td>
                      <input
                        type="button"
                        className="btns"
                        id="btnSaved"
                        value="Edit"
                      />{" "}
                      |{" "}
                      <input
                        type="button"
                        className="btns"
                        id="btnSaved"
                        value="Delete"
                        onClick={() => DeleteExpData(data.Id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex">
          <div className="ReferenceDetails">
            <div
              className="
        Reference"
            >
              <span>Reference:</span>
            </div>

            <div className="Edu">
              <label>
                <b>Designation:</b>
              </label>
              <input
                type="text"
                name="Position"
                value={refereneceValues.Position}
                onChange={handleReferencesChange}
              />
            </div>

            <div className="Edu">
              <label>
                <b>Company Name:</b>
              </label>
              <input
                type="text"
                id="Level"
                name="Company"
                value={referenceValues.Company}
                onChange={handleReferencesChange}
              />
            </div>
            <div className="Edu">
              <label>
                <b>Contact:</b>
              </label>
              <input
                type="text"
                id="Level"
                name="Contact"
                value={refereneceValues.Contact}
                onChange={handleReferencesChange}
              />
            </div>

            <input
              type="button"
              id="btnid"
              value={SaveReference ? "Save" : "Update"}
              onClick={PostRefereEDetails}
            />
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Job Title</th>
                  <th>Company Name</th>
                  <th>Address</th>
                  <th>Duration</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {experienceDatas.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.JobTitle}</td>
                    <td>{data.CompanyName}</td>
                    <td>{data.CompanyAddress}</td>
                    <td>{data.JobDuration}</td>
                    <td>{data.Role}</td>
                    <td>
                      <input
                        type="button"
                        className="btns"
                        id="btnSaved"
                        value="Edit"
                      />{" "}
                      |{" "}
                      <input
                        type="button"
                        className="btns"
                        id="btnSaved"
                        value="Delete"
                        onClick={() => DeleteExpData(data.Id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="AchivementDetails">
            <div
              className="
        Achivement"
            >
              <span>Achivement:</span>
            </div>

            <div className="Edu">
              <label>
                <b>Title:</b>
              </label>
              <input type="text" id="Level" name="edulevel" />
            </div>

            <div className="Edu">
              <label>
                <b>Date:</b>
              </label>
              <input type="text" id="Level" name="edulevel" />
            </div>

            <div className="Edu">
              <label>
                <b>Description:</b>
              </label>
              <input type="text" id="Level" name="edulevel" />
            </div>
            <input
              type="button"
              id="btnid"
              value={SaveExperience ? "Save" : "Update"}
              onClick={PostExperienceDetails}
            />
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Job Title</th>
                  <th>Company Name</th>
                  <th>Address</th>
                  <th>Duration</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {experienceDatas.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.JobTitle}</td>
                    <td>{data.CompanyName}</td>
                    <td>{data.CompanyAddress}</td>
                    <td>{data.JobDuration}</td>
                    <td>{data.Role}</td>
                    <td>
                      <input
                        type="button"
                        className="btns"
                        id="btnSaved"
                        value="Edit"
                      />{" "}
                      |{" "}
                      <input
                        type="button"
                        className="btns"
                        id="btnSaved"
                        value="Delete"
                        onClick={() => DeleteExpData(data.Id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex">
          <div className="ProjectDetails">
            <div className=" Project">
              <span>Project:</span>
            </div>

            <div className="Edu">
              <label>
                <b>Project Name:</b>
              </label>
              <input type="text" id="Level" name="edulevel" />
            </div>
            <div className="Edu">
              <label>
                <b>Language Used:</b>
              </label>
              <input type="text" id="Level" name="edulevel" />
            </div>
            <input
              type="button"
              id="btnid"
              value={SaveExperience ? "Save" : "Update"}
              onClick={PostExperienceDetails}
            />
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Job Title</th>
                  <th>Company Name</th>
                  <th>Address</th>
                  <th>Duration</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {experienceDatas.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.JobTitle}</td>
                    <td>{data.CompanyName}</td>
                    <td>{data.CompanyAddress}</td>
                    <td>{data.JobDuration}</td>
                    <td>{data.Role}</td>
                    <td>
                      <input
                        type="button"
                        className="btns"
                        id="btnSaved"
                        value="Edit"
                      />{" "}
                      |{" "}
                      <input
                        type="button"
                        className="btns"
                        id="btnSaved"
                        value="Delete"
                        onClick={() => DeleteExpData(data.Id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="TrainingDetails">
            <div className=" Project">
              <span>Training:</span>
            </div>

            <div className="Edu">
              <label>
                <b>Training Name:</b>
              </label>
              <input type="text" id="Level" name="edulevel" />
            </div>

            <div className="Edu">
              <label>
                <b>Date:</b>
              </label>
              <input type="text" id="Level" name="edulevel" />
            </div>

            <div className="Edu">
              <label>
                <b>Description:</b>
              </label>
              <input type="text" id="Level" name="edulevel" />
            </div>
            <input
              type="button"
              id="btnid"
              value={SaveExperience ? "Save" : "Update"}
              onClick={PostExperienceDetails}
            />
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Job Title</th>
                  <th>Company Name</th>
                  <th>Address</th>
                  <th>Duration</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {experienceDatas.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.JobTitle}</td>
                    <td>{data.CompanyName}</td>
                    <td>{data.CompanyAddress}</td>
                    <td>{data.JobDuration}</td>
                    <td>{data.Role}</td>
                    <td>
                      <input
                        type="button"
                        className="btns"
                        id="btnSaved"
                        value="Edit"
                      />{" "}
                      |{" "}
                      <input
                        type="button"
                        className="btns"
                        id="btnSaved"
                        value="Delete"
                        onClick={() => DeleteExpData(data.Id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex">
          <div className="SkillDetails">
            <div
              className="
        Skill"
            >
              <span>Skills</span>
            </div>

            <div className="Edu">
              <label>
                <b>SkillName:</b>
              </label>
              <input
                type="text"
                id="Level"
                name="Skill"
                value={skillValues.Skill}
                onChange={handleExperienceChange}
              />
            </div>
            <input
              type="button"
              id="btnid"
              value={SaveExperience ? "Save" : "Update"}
              onClick={PostExperienceDetails}
            />
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Job Title</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {LanguageDatas.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.JobTitle}</td>
                    <td>
                      <input
                        type="button"
                        className="btns"
                        id="btnSaved"
                        value="Edit"
                      />{" "}
                      |{" "}
                      <input
                        type="button"
                        className="btns"
                        id="btnSaved"
                        value="Delete"
                        onClick={() => DeleteExpData(data.Id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="LanguageDetails">
            <div
              className="
        Language"
            >
              <span>Languages</span>
            </div>

            <div className="Edu">
              <label>
                <b>Language:</b>
              </label>
              <input
                type="text"
                id="Level"
                name="Name"
                value={languageValues.Name}
                onChange={handleLanguageChange}
              />
            </div>
            <input
              type="button"
              id="btnid"
              value={SaveExperience ? "Save" : "Update"}
              onClick={PostLanguageDetails}
            />
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Language</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {LanguageDatas.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.Name}</td>

                    <td>
                      <input
                        type="button"
                        className="btns"
                        id="btnSaved"
                        value="Edit"
                      />{" "}
                      |{" "}
                      <input
                        type="button"
                        className="btns"
                        id="btnSaved"
                        value="Delete"
                        onClick={() => DeleteLanguageData(data.Id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="ContactDetails">
          <div className="Contact">
            <span>Contact:</span>
          </div>

          <div className="Edu">
            <label>
              <b>Name:</b>
            </label>
            <input type="text" id="Level" name="edulevel" />

            <label>
              <b>Email-Address:</b>
            </label>
            <input type="text" id="Level" name="edulevel" />

            <label>
              <b>Address:</b>
            </label>
            <input type="text" id="Level" name="edulevel" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCv;
