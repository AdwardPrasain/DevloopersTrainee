import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios";
import './CreateCV.css';
function CreateCV() {

    const CreateCvValues= {
        txtAboutDes: "",
        txtFacebook:"",
        txtInstagram:"",
        txtLinkedIn:""
    }
    const [cvValues, setcvValues] = useState(CreateCvValues);
    const handlecvChange = (e) =>{
        e.preventDefault();
        console.log(e.target);
        const { name, value } = e.target;
        setcvValues({ ...cvValues, [name]: value });
        }

 //Experience 

const createExperienceValues ={
        clientusername: "9813715932",
        clientguid: "456",
        JobTitle:"",
        CompanyName:"",
        CompanyAddress:"",
        JobDuration:"",
        Role:""
}
const [experienceValues, setexperienceValues] = useState(createExperienceValues);
const [experienceDatas, setexperienceDatas] = useState([]);

const [experienceErrors, setexperienceErrors] = useState({});

      const [isexperienceSubmit, setIsExperienceSubmit] = useState(false);

      const [ExpsaveButton, setExpSaveButton] = useState(true)

      const SaveExperience = (e) => {
        e.preventDefault();
        console.log(experienceValues);
        setexperienceErrors(ExperienceValidate(experienceValues));
        setIsExperienceSubmit(true);
      };

      const PostExperienceDetails = async () => {
      
        const result = await axios.post("https://tsnpl.com.np/TraineeAPI/api/Experience", experienceValues);
        //navigate("/");
        console.log(result);
        if(result.data == -1){
          alert("Data Saved Successfully");
        }
        else {
          alert("Data cannot be Saved");
        }
        loadExperienceData();
        setIsExperienceSubmit(false);
      }
    
      const loadExperienceData = async () =>{
      const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/Experience?ClientUserName=9813715932&ClientGUID=456")
      //console.log(result);
      setexperienceDatas(result.data)
    }
    
      const ExperienceValidate = (values) => {
        const errors = {};
        if (!values.JobTitle) {
          errors.JobTitle= "Experience Job is req";
        }
        if (!values.CompanyName) {
          errors.CompanyName= "Experience company is req";
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

      const DeleteExpData = async(Id) => {
 
        const result = await axios.delete(`https://tsnpl.com.np/TraineeAPI/api/Experience/${Id}`)
        console.log(result);
    
        if(result.data == -1)
        {
          alert("Data Deleted Successfully");
          loadExperienceData();
        }
        
      }
    
    const handleExperienceChange = (e) =>{
        e.preventDefault();
        console.log(e.target);
        const { name, value } = e.target;
        setexperienceValues({ ...experienceValues, [name]: value });
    }

    useEffect(()=>{
      loadExperienceData();
    }
    , []);
//Projects
const createProjectValues={
    ClientUserName:"9813715932",
    ClientGUID:"456",
    ProjectName:"",
    LanguageUsed:"",
    Description:"",
    Role:"",
}
const [projectValues, setprojectValues] = useState(createProjectValues);
    const handleProjectChange = (e) =>{
        e.preventDefault();
        console.log(e.target);
        const { name, value } = e.target;
        setprojectValues({ ...projectValues, [name]: value });
  }

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
      
        const result = await axios.post("https://tsnpl.com.np/TraineeAPI/api/Project", projectValues);
        //navigate("/");
        console.log(result);
        if(result.data == -1){
          alert("Data Saved Successfully");
          loadProjectData();
        }
        else {
          alert("Data cannot be Saved");
        }
        setIsprojectSubmit(false);
      }
    
      const loadProjectData = async () =>{
      const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/Project?ClientUserName=9813715932&ClientGUID=456")
      //console.log(result);
      setprojectDatas(result.data)
    }
    
      const ProjectValidate = (values) => {
        const errors = {};
        if (!values.ProjectName) {
          errors.ProjectName= "Project Name Job is req";
        }
        if (!values.LanguageUsed) {
          errors.LanguageUsed= "Language is req";
        }
        if (!values.Description) {
          errors.Description = "Description is req";
        }
        if (!values.Role) {
            errors.Role = "Role is req";
          }
        return errors;
      };

      const DeleteProjectData = async(Id) => {
 
        const result = await axios.delete(`https://tsnpl.com.np/TraineeAPI/api/Project/${Id}`)
        console.log(result);
    
        if(result.data == -1)
        {
          alert("Data Deleted Successfully");
          loadProjectData();
        }
        
      }
      
      useEffect(()=>{
        loadProjectData();
      }, []);


    //Skills
    const createSkillValues={
      ClientUserName:"9813715932",
      ClientGUID:"456",
        Name:""
    }
    const [skillValues, setskillValues] = useState(createSkillValues);
    const handleSkillChange = (e) =>{
        e.preventDefault();
        console.log(e.target);
        const { name, value } = e.target;
        setskillValues({ ...skillValues, [name]: value });
    }

    const [skillDatas, setskillDatas] = useState([]);

     const [skillErrors, setskillErrors] = useState({});

      const [isSkillSubmit, setIsSkillSubmit] = useState(false);

      const SaveSkill = (e) => {
        e.preventDefault();
        console.log(skillValues);
        setskillErrors(skillValidate(skillValues));
        setIsSkillSubmit(true);
      };

      const PostSkillDetails = async () => {
      
        const result = await axios.post("https://tsnpl.com.np/TraineeAPI/api/Skill", skillValues);
        //navigate("/");
        console.log(result);
        if(result.data == -1){
          alert("Data Saved Successfully");
          loadskillData();
        }
        else {
          alert("Data cannot be Saved");
        }
        setIsSkillSubmit(false);
      }
    
      const loadskillData = async () =>{
      const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/Skill?ClientUserName=9813715932&ClientGUID=456")
      //console.log(result);
      setskillDatas(result.data)
    }
    
      const skillValidate = (values) => {
        const errors = {};
        if (!values.Name) {
          errors.Name= "Project Name Job is req";
        }
       
        return errors;
      };

      const DeleteSkillData = async(Id) => {
 
        const result = await axios.delete(`https://tsnpl.com.np/TraineeAPI/api/Skill/${Id}`)
        console.log(result);
    
        if(result.data == -1)
        {
          alert("Data Deleted Successfully");
          loadskillData();
        }
        
      }
      
      useEffect(()=>{
        loadskillData();
      }, []);
//Acheivements

const createAcheivementsValues={
    ClientUserName:"9813715932",
    ClientGUID:"456",
    Title:"",
    Date:"",
    Description:"",
}
const [AcheivementValues, setAcheivementValues] = useState(createAcheivementsValues);
const handleAcheivementsChange = (e) =>{
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setAcheivementValues({ ...AcheivementValues, [name]: value });
}

     const [AcheivementsDatas, setAcheivementsDatas] = useState([]);

     const [AcheivementsErrors, setAcheivementsErrors] = useState({});

     const [isAcheivementsSubmit, setIsAcheivementsSubmit] = useState(false);

      const SaveAcheivements= (e) => {
        e.preventDefault();
        console.log(AcheivementValues);
        setAcheivementsErrors(AcheivementValidate(AcheivementValues));
        setIsAcheivementsSubmit(true);
      };

      const PostAcheivementsDetails = async () => {
      
        const result = await axios.post("https://tsnpl.com.np/TraineeAPI/api/Acheivement", AcheivementValues);
        //navigate("/");
        console.log(result);
        if(result.data == -1){
          alert("Data Saved Successfully");
          loadAcheivementData();  
        }
        else {
          alert("Data cannot be Saved");
        }
        setIsAcheivementsSubmit(false);
      }
    
      const loadAcheivementData = async () =>{
      const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/Acheivement?ClientUserName=9813715932&ClientGUID=456")
      //console.log(result);
      setAcheivementsDatas(result.data)
    }
    
      const AcheivementValidate = (values) => {
        const errors = {};
        if (!values.Title) {
          errors.Title= "Acheivement Title is req";
        }
        if (!values.Date) {
          errors.Date= "Acheivement Date is req";
        }
        if (!values.Description) {
          errors.Description = "Description is req";
        }
        return errors;
      };

      const DeleteAcheivementData = async(Id) => {
 
        const result = await axios.delete(`https://tsnpl.com.np/TraineeAPI/api/Acheivement/${Id}`)
        console.log(result);
    
        if(result.data == -1)
        {
          alert("Data Deleted Successfully");
          loadAcheivementData();
        }
        
      }
      
      useEffect(()=>{
        loadAcheivementData();
      }, []);


//Training
const createTrainingValues={
        ClientUserName:"9813715932",
        ClientGUID:"456",
        Name:"",
        Description:"",
}
const [trainingValues, setTrainingValues] = useState(createTrainingValues);
const handleTrainingChange = (e) =>{
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setTrainingValues({ ...trainingValues, [name]: value });
}

const [TrainingsDatas, setTrainingsDatas] = useState([]);

     const [TrainingsErrors, setTrainingsErrors] = useState({});

     const [isTrainingsSubmit, setIsTrainingsSubmit] = useState(false);

      const SaveTrainings= (e) => {
        e.preventDefault();
        console.log(trainingValues);
        setTrainingsErrors(TrainingValidate(trainingValues));
        setIsTrainingsSubmit(true);
      };

      const PostTrainingsDetails = async () => {
      
        const result = await axios.post("https://tsnpl.com.np/TraineeAPI/api/Training", trainingValues);
        //navigate("/");
        console.log(result);
        if(result.data == -1){
          alert("Data Saved Successfully");
          loadTrainingData();  
        }
        else {
          alert("Data cannot be Saved");
        }
        setIsTrainingsSubmit(false);
      }
    
      const loadTrainingData = async () =>{
      const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/Training?ClientUserName=9813715932&ClientGUID=456")
      //console.log(result);
      setTrainingsDatas(result.data)
    }
    
      const TrainingValidate = (values) => {
        const errors = {};
        if (!values.Name) {
          errors.Name= "Name is req"; 
        }
        if (!values.Description) {
          errors.Description = "Description is req";
        }

        return errors;
      };

      const DeleteTrainingData = async(Id) => {
 
        const result = await axios.delete(`https://tsnpl.com.np/TraineeAPI/api/Training/${Id}`)
        console.log(result);
    
        if(result.data == -1)
        {
          alert("Data Deleted Successfully");
          loadTrainingData();
        }
        
      }
      useEffect(()=>{
        loadTrainingData();
      }, []);

//Language

const createLanguageValues={
    ClientUserName:"9813715932",
    ClientGUID:"456",
    Name:""
}
const [languageValues, setlanguageValues] = useState(createLanguageValues);
const handleLanguageChange = (e)=>{
    e.preventDefault();
    console.log(e.target);
    const{name, value} = e.target;
    setlanguageValues({ ...languageValues, [name]: value});
}

     const [LanguageDatas, setLanguageDatas] = useState([]);

     const [LanguageErrors, setLanguageErrors] = useState({createLanguageValues});

     const [isLanguageSubmit, setIsLanguageSubmit] = useState(false);

      const SaveLanguage= (e) => {
        e.preventDefault();
        console.log(languageValues);
        setLanguageErrors(LanguageValidate(languageValues));
        setIsLanguageSubmit(true);
      };

      const PostLanguageDetails = async () => {
      
        const result = await axios.post("https://tsnpl.com.np/TraineeAPI/api/Language", languageValues);
        //navigate("/");
        console.log(result);
        if(result.data == -1){
          alert("Data Saved Successfully");
          loadLanguageData();  
        }
        else {
          alert("Data cannot be Saved");
        }
        setIsLanguageSubmit(false);
      }
    
      const loadLanguageData = async () =>{
      const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/Language?ClientUserName=9813715932&ClientGUID=456")
      //console.log(result);
      setLanguageDatas(result.data)
    }
    
      const LanguageValidate = (values) => {
        const errors = {};
        if (!values.Title) {
          errors.Title= "Acheivement Title is req";
        }
        if (!values.Date) {
          errors.Date= "Acheivement Date is req";
        }
        if (!values.Description) {
          errors.Description = "Description is req";
        }

        return errors;
      };

      const DeleteLanguageData = async(Id) => {
 
        const result = await axios.delete(`https://tsnpl.com.np/TraineeAPI/api/Language/${Id}`)
        console.log(result);
    
        if(result.data == -1)
        {
          alert("Data Deleted Successfully");
          loadLanguageData();
        }
        
      }
      
      useEffect(()=>{
        loadLanguageData();
      }, []);



//References
const createReferenceValues={
  ClientUserName:"9813715932",
    ClientGUID:"456",
    Position:"",
    Company:"",
    Contact:"",
}
const[referenceValues, setReferenceValues] = useState(createReferenceValues);
const handleReferencesChange = (e)=>{
    e.preventDefault();
    console.log(e.target);
    const{name, value} = e.target;
    setReferenceValues({ ...referenceValues, [name]: value});
}
const [referenceDatas, setreferenceDatas] = useState([]);

     const [referenceErrors, setreferenceErrors] = useState({createReferenceValues});

     const [isReferenceSubmit, setIsReferenceSubmit] = useState(false);

      const SaveReference= (e) => {
        e.preventDefault();
        console.log(referenceValues);
        setLanguageErrors(LanguageValidate(languageValues));
        setIsLanguageSubmit(true);
      };

      const PostReferenceDetails = async () => {
      
        const result = await axios.post("https://tsnpl.com.np/TraineeAPI/api/Reference", referenceValues);
        //navigate("/");
        console.log(result);
        if(result.data == -1){
          alert("Data Saved Successfully");
          loadreferenceData();  
        }
        else {
          alert("Data cannot be Saved");
        }
        setIsReferenceSubmit(false);
      }
    
      const loadreferenceData = async () =>{
      const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/Reference?ClientUserName=9813715932&ClientGUID=456")
      //console.log(result);
      setreferenceDatas(result.data)
    }
    
      const referenceValidate = (values) => {
        const errors = {};
        if (!values.Position) {
          errors.Position= "Acheivement Title is req";
        }
        if (!values.Company) {
          errors.Company= "Acheivement Date is req";
        }
        if (!values.Contact) {
          errors.Contact= "Description is req";
        }

        return errors;
      };

      const DeletereferenceData = async(Id) => {
 
        const result = await axios.delete(`https://tsnpl.com.np/TraineeAPI/api/Reference/${Id}`)
        console.log(result);
    
        if(result.data == -1)
        {
          alert("Data Deleted Successfully");
          loadreferenceData();
        }
        
      }
      
      useEffect(()=>{
        loadreferenceData();
      }, []);

  return (
    <div>
        <div className='Contains'>
        <div className='headTag'>
                    <span>W-e-l-c-o-m-e</span>
                    <p>Let's Get Started</p>
        </div>
            <div className='WholeSection'>
                <div className='CommonSection'>
                <h4>Fill out the Information</h4>
                <div className='name'>
                  <label>Full Name</label>
                  <input type='text'/>
                </div>
                    <div className='aboutMe'>
                        <div className='dgf'><h2>About Yourself</h2>
                        <input type="text"/>
                        </div>
                        
                        <label>Designation</label>
                        <input type="text" placeholder='Web Developer' name='txtAboutDes' value={cvValues.txtAboutDes} onChange={handlecvChange}/>
                    </div>
                    <div className='Experience'>
                        <h2>Experience</h2>
                        <div className='form-group'>
                        <label>Job Title</label>
                        <input type="text" placeholder='Web Developer' name='JobTitle' value={experienceValues.JobTitle} onChange={handleExperienceChange}/>
           
                        <label>Company Name</label>
                        <input type="text" placeholder='Technology Solution Nepal' name='CompanyName' value={experienceValues.CompanyName} onChange={handleExperienceChange}/>
                        </div>
                        <div className='form-group'>
                        <label>Address</label>
                        <input type="text" placeholder='Itahari, Sunsari' name='CompanyAddress' value={experienceValues.CompanyAddress} onChange={handleExperienceChange}/>
                        <label>Job Duration</label>
                        <input type="text" placeholder='3 month' name='JobDuration' value={experienceValues.JobDuration} onChange={handleExperienceChange}/>
                        </div>
                        <div className='Role'>
                        <label>Role</label>
                        <input type="text" placeholder='short description about your in company.' id='idRole' name='Role' value={experienceValues.Role} onChange={handleExperienceChange}/>
                        </div>
                        <table className="tables">
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
                            {
                                experienceDatas.map((data, index) => (
                                <tr key={index}>
                                <td>{index+1}</td>
                                <td>{data.JobTitle}</td>
                                <td>{data.CompanyName}</td>
                                <td>{data.CompanyAddress}</td>
                                <td>{data.JobDuration}</td>
                                <td>{data.Role}</td>
                                <td><input type="button" className="btns" id='btnid' value="Edit" /> | <input type="button" className="btns" id='btnid' value="Delete" onClick={() => DeleteExpData(data.Id)}/></td>
                                </tr>
                                ))
                            }
                                </tbody>  
                      </table>
                      <div className="buttonss">
                        <input type="button" id="btnSaved" value={SaveExperience ? "Save" : "Update"} onClick={PostExperienceDetails}/>
                      </div>
                    </div>
                    <div className='Projects'>
                        <h2>Projects</h2>
                        <div className='form-group'>
                            <label>Project Name</label>
                            <input type='text' name='ProjectName' value={projectValues.ProjectName} onChange={handleProjectChange}/>
                            <label>Language Used</label>
                            <input type='text' name='LanguageUsed' value={projectValues.LanguageUsed} onChange={handleProjectChange}/>
                        </div>
                        <div className='description'>
                            <label>Description</label>
                            <input type='text' name='Description' value={projectValues.Description} onChange={handleProjectChange}/>
                        </div>
                        <div className='description'>
                            <label>Role</label>
                            <input type='text' name='Role' value={projectValues.Role} onChange={handleProjectChange}/>
                        </div>
                        <table className="tables">
                         <thead>
                            <tr>
                            <th>ID</th>
                            <th>Project Name</th>
                            <th>Language Used</th>
                            <th>Description</th>
                            <th>Role</th>
                            <th>Action</th>
                            </tr>
                         </thead>
                         <tbody>
                         {
                                projectDatas.map((data, index) => (
                                <tr key={index}>
                                <td>{index+1}</td>
                                <td>{data.ProjectName}</td>
                                <td>{data.LanguageUsed}</td>
                                <td>{data.Description}</td>
                                <td>{data.Role}</td>
                                <td><input type="button" className="btns" id='btnid' value="Edit" /> | <input type="button" className="btns" id='btnid' value="Delete" onClick={() => DeleteProjectData(data.Id)}/></td>
                                </tr>
                                ))
                            }
                            </tbody>  
                      </table>
                      <div className="buttonss">
                        <input type="button" id="btnSaved" value={SaveProject ? "Save" : ""} onClick={PostProjectDetails} />
                      </div>
                    </div>
                    <div className='Skills'>
                        <h2>Skills</h2>
                        <input type='text' name='Name' value={skillValues.Name} onChange={handleSkillChange}/>
                    </div>
                    <table className="tables">
                        <thead>
                            <tr>
                              <th>ID</th>
                            <th>Skills</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                skillDatas.map((data, index) => (
                                <tr key={index}>
                                <td>{index+1}</td>
                                <td>{data.Name}</td>
                                <td><input type="button" className="btns" id='btnid' value="Edit" /> | <input type="button" className="btns" id='btnid' value="Delete" onClick={() => DeleteSkillData(data.Id)}/></td>
                                </tr>
                                ))
                            }
                          </tbody>  
                    </table>
                    <div className="buttonss">
                        <input type="button" id="btnSaved" value={SaveSkill ? "Save" : ""} onClick={PostSkillDetails} />
                      </div>
                    <div className='Acheivements'>
                        <h2>Acheivements</h2>
                        <div className='form-group'>
                            <label>Title</label>
                            <input type='text' name='Title' value={AcheivementValues.Title} onChange={handleAcheivementsChange}/>
                            <label>Date</label>
                            <input type='Date' name='Date' value={AcheivementValues.Date} onChange={handleAcheivementsChange}/>
                        </div>
                        <div className='description'>
                            <label>Description</label>
                            <input type='text' name='Description' value={AcheivementValues.Description} onChange={handleAcheivementsChange}/>
                        </div>
                        <table className="tables">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                AcheivementsDatas.map((data, index) => (
                                <tr key={index}>
                                <td>{index+1}</td>
                                <td>{data.Title}</td>
                                <td>{data.Date}</td>
                                <td>{data.Description}</td>
                                <td><input type="button" className="btns" id='btnid' value="Edit" /> | <input type="button" className="btns" id='btnid' value="Delete" onClick={() => DeleteAcheivementData(data.Id)}/></td>
                                </tr>
                                ))
                            }
                            </tbody>  
                        </table>
                        <div className="buttonss">
                        <input type="button" id="btnSaved" value={SaveAcheivements ? "Save" : ""} onClick={PostAcheivementsDetails} />
                      </div>
                    </div>
                </div>
            
                <div className='CommonSection'>
                    <div className='inputPhoto'>
                        <input type='file'/>
                    </div>
                    <div className='Trainings'>
                        <h2>Training</h2>
                        <div className='form-group'>
                            <label>Training Name</label>
                            <input type='text' name='Name' value={trainingValues.Name} onChange={handleTrainingChange}/>
                        </div>
                        <div className='description'>
                            <label>Description</label>
                            <input type='text' name='Description' value={trainingValues.Description} onChange={handleTrainingChange}/>
                        </div>
                        <table className="tables">
                            <thead>
                                <tr>
                                  <th>ID</th>
                                <th>Training Name</th>
                                <th>Description</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                TrainingsDatas.map((data, index) => (
                                <tr key={index}>
                                <td>{index+1}</td>
                                <td>{data.Name}</td>
                                <td>{data.Description}</td>
                                <td><input type="button" className="btns" id='btnid' value="Edit" /> | <input type="button" className="btns" id='btnid' value="Delete" onClick={() => DeleteTrainingData(data.Id)}/></td>
                                </tr>
                                ))
                            }
                              </tbody>  
                        </table>
                        <div className="buttonss">
                        <input type="button" id="btnSaved" value={SaveTrainings ? "Save": ""} onClick={PostTrainingsDetails}/>
                      </div>
                    </div>
                    <div className='language'>
                        <h2>Language</h2>
                        <input type='text' name='Name' value={languageValues.Name} onChange={handleLanguageChange}/>
                        <table className="tables">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Language</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                              LanguageDatas.map((data, index) => (
                                <tr key={index}>
                                <td>{index+1}</td>
                                <td>{data.Name}</td>
                                <td><input type="button" className="btns" id='btnid' value="Edit" /> | <input type="button" className="btns" id='btnid' value="Delete" onClick={() => DeleteLanguageData(data.Id)}/></td>
                                </tr>
                                ))
                            
                            }  
                            </tbody>  
                        </table>
                        <div className="buttonss">
                        <input type="button" id="btnSaved" value={SaveLanguage ? "Save" : ""} onClick={PostLanguageDetails}/>
                      </div>
                    </div>
                    <div className='References'>
                        <h2>References</h2>
                        <div className='form-group'>
                            <label>Position</label>
                            <input type='text' name='Position' value={referenceValues.Position} onChange={handleReferencesChange}/>
                            <label>Company</label>
                            <input type='text' name='Company' value={referenceValues.Company} onChange={handleReferencesChange}/>
                       </div>
                       <div className='contact'>
                        <label>Contact</label>
                        <input type='text' name='Contact' value={referenceValues.Contact} onChange={handleReferencesChange}/>
                       </div>
                       <table className="tables">
                        <thead>
                            <tr>
                              <th>ID</th>
                            <th>Position</th>
                            <th>Company Name</th>
                            <th>Contact</th>
                            <th>Action</th>
                            </tr>
                         </thead>
                         <tbody>
                         {
                              referenceDatas.map((data, index) => (
                                <tr key={index}>
                                <td>{index+1}</td>
                                <td>{data.Position}</td>
                                <td>{data.Company}</td>
                                <td>{data.Contact}</td>
                                
                                <td><input type="button" className="btns" id='btnid' value="Edit" /> | <input type="button" className="btns" id='btnid' value="Delete" onClick={() => DeletereferenceData(data.Id)}/></td>
                                </tr>
                                ))
                            
                            }  
                          </tbody>  
                       </table>
                       <div className="buttonss">
                        <input type="button" id="btnSaved"  value={SaveReference ? "Save" : ""} onClick={PostReferenceDetails}/>
                      </div>
                    </div>
                    <div className='SocialMedia'>
                        <h2>Social Media</h2>
                        <div className='facebook'>
                        <label>Facebook</label>
                        <input type='text' name='txtFacebook' value={cvValues.txtFacebook} onChange={handlecvChange}/>
                        </div>
                        <div className='instagram'>
                        <label>Instagram</label>
                        <input type='text' name='txtInstagram' value={cvValues.txtInstagram} onChange={handlecvChange}/>
                        </div>
                        <div className='linkedin'>
                        <label>LinkedIn</label>
                        <input type='text' name='txtLinkedIn' value={cvValues.txtLinkedIn} onChange={handlecvChange}/>
                        </div>
                    </div>
                    <div className='Contact'>
                 <h3>Contact</h3>
                 <div className='Contactgroup'>
                  <label>Address</label>
                  <input type='text'/>
                 </div>
                 <div className='Contactgroup'>
                  <label>Email</label>
                  <input type='text'/>
                 </div>
                 <div className='Contactgroup'>
                  <label>Phone Number</label>
                  <input type='text'/>
                 </div>
            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateCV