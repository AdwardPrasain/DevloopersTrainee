import React,{useEffect} from 'react'
import {useState} from 'react'
import "./CreateCv.css";
import axios from "axios";


function Cv() {
    // Function for Experiance
    const createExperienceValues ={
      clientusername: "9803322067",
      clientguid: "123",
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
        loadExperienceData();
        setexperienceValues(createExperienceValues);
      }
      
      else {
        alert("Data cannot be Saved");
      }
      
      setIsExperienceSubmit(false);
    }
  
    const loadExperienceData = async () =>{
    const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/Experience?ClientUserName=9803322067&ClientGUID=123")
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



  //Function for reference
  const createReferenceValues = {
    ClientUserName: "9803322067",
    ClientGUID: "123",
    Position: "",
    Company: "",
    Contact: "",
  };
  const [referenceValues, setReferenceValues] = useState(createReferenceValues);
  const handleReferenceChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setReferenceValues({ ...referenceValues, [name]: value });
  };

  useEffect(() => {
    loadReferenceData();
  }, []);

  const [referenceDatas, setReferenceDatas] = useState([]);

  const PostReferenceDetails = async () => {
    const result = await axios.post( "https://tsnpl.com.np/TraineeAPI/api/Reference", referenceValues);
    console.log(result.data);
    if (result.data == -1) {
      alert("Data has been saved successfully.");
      loadReferenceData();
      setReferenceValues(createReferenceValues);
    } else {
      alert("Data cannot be saved.");
    }
  };

  const loadReferenceData = async () => {
    const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/Reference?ClientUserName=9803322067&ClientGUID=123");
  console.log(result.data);
  setReferenceDatas(result.data);
  };

  const DeleteReferenceData = async (Id) => {
    const result = await axios.delete( `https://tsnpl.com.np/TraineeAPI/api/Reference/${Id}`);

    if (result.data == -1) {
      alert("Data has been deleted successfully.");
      loadReferenceData();
    }
  };



  

  // Function for project
  const createProjectValues={
    ClientUserName:"9803322067",
    ClientGUID:"123",
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
          setprojectValues(createProjectValues);
        }
        else {
          alert("Data cannot be Saved");
        }
        setIsprojectSubmit(false);
      }
    
      const loadProjectData = async () =>{
      const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/Project?ClientUserName=9803322067&ClientGUID=123")
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



      


      // Function for achievement 
      const createAcheivementsValues={
        ClientUserName:"9803322067",
        ClientGUID:"123",
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
          const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/Acheivement?ClientUserName=9803322067&ClientGUID=123")
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
  




    //  Function for Training
    const createTrainingValues = {
      ClientUserName: "9803322067",
      ClientGUID: "123",
      Name: "",
      Description: ""
    };
    const [trainingValues, settrainingValues] = useState(createTrainingValues);
    const handleTrainingChange = (e) => {
      e.preventDefault();
      console.log(e.target);
      const { name, value } = e.target;
      settrainingValues({ ...trainingValues, [name]: value });
    };
  
    useEffect(() => {
      loadTrainingData();
    }, []);
   
  
    const [trainingDatas, settrainingDatas] = useState([]);
  
    const PostTrainingDetails = async () => {
    const result = await axios.post(
        "https://tsnpl.com.np/TraineeAPI/api/Training",trainingValues
      );
      //navigate("/");
      console.log(result.data);
  
      if (result.data == -1) {
        alert("Data has been saved successfully.");
        loadTrainingData();
        settrainingValues(createTrainingValues);
  
      } else {
        alert("Data cannot be Saved.");
      }
  
      // setIsSubmit(false);
    };
  
    const loadTrainingData = async () => {
      const result = await axios.get(
        "https://tsnpl.com.np/TraineeAPI/api/Training?ClientUserName=9803322067&ClientGUID=123"
      );
      console.log(result.data);
      settrainingDatas(result.data);
    };
  
    const DeleteTrainingData = async (Id) => {
      const result = await axios.delete(
        `https://tsnpl.com.np/TraineeAPI/api/Training/${Id}`
      );
      // console.log(result);
      if (result.data == -1) {
        alert("Data Deleted Successfully");
        loadTrainingData();
      }
    };

    //for language
    const createLanguageValues = {
      ClientUserName: "9803322067",
      ClientGUID: "123",
      Name: "",
    };

    const [languageValues, setLanguageValues] = useState(createLanguageValues);

    const handlelanguageChange = (e) => {
      e.preventDefault();
      console.log(e.target);
      const { name, value} = e.target;
      setLanguageValues({ ...languageValues, [name]: value});
    };

    useEffect(() => {
      loadLanguageData();
    }, []);

    const [languageDatas, setLanguageDatas] = useState([]);

    const PostLanguageDetails = async (data) => {
      const result = await axios.post("https://tsnpl.com.np/TraineeAPI/api/Language", languageValues);
      console.log(result.data);

      if (result.data == -1){
        alert("Data has been saved successfully.");
        loadLanguageData();
        setLanguageValues(createLanguageValues);
      } else {
        alert("Data cannot be saved.")
      }
    };

    const loadLanguageData = async (data) => {
      const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/Language?ClientUserName=9803322067&ClientGUID=123");
      console.log(result.data);
      setLanguageDatas(result.data);
    };

    const DeleteLanguageData = async (Id) => {
      const result = await axios.delete(`https://tsnpl.com.np/TraineeAPI/api/Language/${Id}`);

      if (result.data == -1){
        alert("Data has been deleted successfully.")
        loadLanguageData();
      }
    };


   return (
    <div className="createCv">
      <div className="form">
        <div className="up"></div>
        <div className="down"></div>

        <div className="container">
          <div className="topPart">
            <div className="photoSection"> {/* Photo section of the cv */}
            <input type="file" className="uploadPhoto" id="fullname"/>
          </div>
          
         <div className="nameSirName"> {/*  Here is the section of name, sirname and disignation */}
           
            <input type="text" className="fullName" id="fullname" placeholder="Enter Your Full Name"/>
            <input type="text" className="designation" id="designation" placeholder="Your Designation"/>
          </div>s
          </div>

         <div className="middlePart">  {/* Here is the section for about myself */}
          <div className="aboutMeContainer">
            <div className="aboutMe">ABOUT MYSELF</div>
            <textarea className="inputAboutMe" name="aboutMyself" rows="4" cols="50"/>
            </div>
              
       <div className="mainContainer">

         {/* Here is the section for left side of the  main container */}
        <div className="wholeContainer">

          <div className="cvContactReference">

          <div className="cvContactContainer">
          <div className="cvContactTitle">Contact</div>

          <div className="cvContactRow"  style={{marginTop:"2%"}}>
          Email Adress:<input type="text" className="cvContactInput" id="cvContactEmail"/>
          </div>

          <div className="cvContactRow">
          Address:<input type="text" className="cvContactInput" id="cvContactAddress"/>
          </div>

          <div className="cvContactRow"  style={{marginBottom:"10%"}}>
          Phone number:<input type="text" className="cvContactInput" id="cvContactPhone"/>
          </div>
      
      
         </div>


         <div className="experianceContainer">
          <div className="experienceTitle">Experience</div>
          <div className="cvExperienceRow">
          Job Title:<input type="text" className="exInput" id="fullname" name='JobTitle' value={experienceValues.JobTitle} onChange={handleExperienceChange}/>
          </div>

          <div className="cvExperienceRow">
          Company Name:<input type="text" className="exInput" id="fullname" name="CompanyName" value={experienceValues.CompanyName} onChange={handleExperienceChange}/>
          </div>

          <div className="cvExperienceRow">
          Address:<input type="text" className="exInput" id="fullname" name="CompanyAddress" value={experienceValues.CompanyAddress} onChange={handleExperienceChange}/>
          </div>

          <div className="cvExperienceRow">
          Job Duration:<input type="text" className="exInput" id="fullname" name="JobDuration" value={experienceValues.JobDuration} onChange={handleExperienceChange}/>
          </div>

          <div className="cvExperienceRow">
          Role:<input type="text" className="exInput" id="fullname" name="Role" value={experienceValues.Role} onChange={handleExperienceChange}/>
          </div>

           <div className="addbtnExperience">
            <input type="button" value={SaveExperience ? "Add" : ""}className="addbtn1" onClick={PostExperienceDetails}></input>
            <input type="button" value="Update" className="updatebtn1"></input>
           </div>

           <table >
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
                   ))}
              </tbody>
              </table>
  
         </div>
         </div>

         <div className="referenceAchievement">
         <div className="cvReferenceContainer">
          <div className="cvReferenceTitle">Reference</div>

          <div className="cvReferenceRow">
          Designation:<input type="text" className="cvReferenceInput" id="cvRefDesignation" name="Position" value={referenceValues.Position} onChange={handleReferenceChange}/>
          </div>

          <div className="cvReferenceRow">
          Company Name:<input type="text" className="cvReferenceInput" id="cvRefName" name="Company" value={referenceValues.Company} onChange={handleReferenceChange}/>
          </div>

          <div className="cvReferenceRow">
         Contact:<input type="text" className="cvReferenceInput" id="cvRefContact" name="Contact" value={referenceValues.Contact} onChange={handleReferenceChange}/>
          </div>
        

           <div className="addbtnContact">
            <input type="button" value="Add" className="refAddbtn" onClick={PostReferenceDetails}></input>
            <input type="button" value="Update" className="refUpdatebtn"></input>
           </div>

           <table >
              <thead>
                <tr>
                <th>ID</th>
                  <th>Designation</th>
                  <th>Company Name</th>
                  <th>Contact</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {referenceDatas.map((data, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{data.Position}</td>
                          <td>{data.Company}</td>
                          <td>{data.Contact}</td>
                          <td>
                            <input type="button" className="btn btn-sm btn-primary" value="Edit"/>{" "}
                            <input type="button" className="btn btn-sm btn-danger" value="Delete" onClick={() => DeleteReferenceData(data.Id)}/>
                      </td>
                    </tr>
                  ))}
              </tbody>
              </table>
  
         </div>

         <div className="cvAchievementContainer">
          <div className="cvAchievementTitle">Achievement</div>

          <div className="cvAchievementRow">
          Title:<input type="text" className="cvAchievementInput" id="achieveTitle" name="Title" value={AcheivementValues.Title} onChange={handleAcheivementsChange}/>
          </div>

          <div className="cvReferenceRow">
          Date:<input type="text" className="cvAchievementInput" id="achieveDate" name='Date' value={AcheivementValues.Date} onChange={handleAcheivementsChange}/>
          </div>

          <div className="cvReferenceRow">
         Description:<input type="text" className="cvAchievementInput" id="achieveDiscription" name='Description' value={AcheivementValues.Description} onChange={handleAcheivementsChange}/>
          </div>
        

           <div className="btnAcheivement">
            <input type="button" value={SaveAcheivements ? "Add" : ""} className="achieveAddbtn" onClick={PostAcheivementsDetails} />
            <input type="button" value="Update" className="achieveUpdatebtn"/>
           </div>

           <table >
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
  
         </div>
         </div>
         
         <div className="projectTraining">
         <div className="cvProjectContainer">
          <div className="cvProjectTitle">Project</div>

          <div className="cvProjectRow">
          Project Name:<input type="text" className="cvProjectInput"id="projectName" name="ProjectName" value={projectValues.ProjectName} onChange={handleProjectChange}/>
          </div>

          <div className="cvProjectRow">
          Project Description:<input type="text" className="cvProjectInput" id="projectDescription"  name="Description" value={projectValues.Description} onChange={handleProjectChange}/>
          </div>

          <div className="cvProjectRow">
         Language used:<input type="text" className="cvProjectInput" id="languageUsed"  name="LanguageUsed" value={projectValues.LanguageUsed} onChange={handleProjectChange}/>
          </div>
        

           <div className="projectButtons">
            <input type="button" value={SaveProject ? "Add" : ""}className="projectAddbtn" onClick={PostProjectDetails}/>
            <input type="button" value="Update" className="projectUpdatebtn"/>
           </div>

           <table >
              <thead>
                <tr>
                <th>ID</th>
                  <th>Project Name</th>
                  <th>project
                    Description</th>
                  <th>language used</th>
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
                                {/* <td>{data.Role}</td> */}
                                <td><input type="button" className="btns" id='btnid' value="Edit" /> | <input type="button" className="btns" id='btnid' value="Delete" onClick={() => DeleteProjectData(data.Id)}/></td>
                                </tr>
                                ))
                            }
              </tbody>
              </table>
  
         </div>

         <div className="cvTrainingContainer">
          <div className="cvTrainingTitle">Training</div>

          <div className="cvTrainingRow">
          Training Name:<input type="text" className="cvTrainingInput" id="cvTraininName" name='Name' value={trainingValues.Name} onChange={handleTrainingChange}/>
          </div>

          <div className="cvTrainingRow">
          Training Description:<input type="text" className="cvTrainingInput" id="trainingDescription" name='Description' value={trainingValues.Description} onChange={handleTrainingChange}/>
          </div>
 
          {/* <div className="cvTrainingRow">
         Date:<input type="text" className="cvTrainingInput" id="cvTrainingDate"/>
          </div> */}
        

           <div className="trainingButtons">
            <input type="button" value="Add" className="trainingAddbtn" onClick={PostTrainingDetails}/>
            <input type="button" value="Update" className="trainingUpdatebtn"/>
           </div>

           <table >
              <thead>
                <tr>
                <th>ID</th>
                  <th>Training Name</th>
                  <th>Training Description</th>
                  {/* <th>Training Date</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {trainingDatas.map((data, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{data.Name}</td>
                          <td>{data.Description}</td>
                          {/* <td>{data.Date}</td> */}
                        <td>
                         <input type="button"className="btn btn-sm btn-primary"value="Edit"/>
                         <input type="button"className="btn btn-sm btn-danger"value="Delete"onClick={() => DeleteTrainingData(data.Id)}/>
                        </td>
                       </tr>
                  ))}
              </tbody>
              </table>
  
         </div>
         </div>

         <div className="skillsLanguages">
          <div className="cvSkillsContainer">
            <div className="cvSkillsTitle">Skills</div>

            <div className="cvSkillsRow">
          Skill:<input type="text" className="cvSkillsInput" id="cvSkillName"/>
          </div>

          <div className="skillsButtons">
            <input type="button" value="Add" className="skillsAddbtn "/>
            <input type="button" value="Update" className="skillsUpdatebtn"/>
           </div>

          <table >
              <thead>
                <tr>
                <th>ID</th>
                  <th>Skills Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              </table>

          </div>

          <div className="cvLanguagesContainer">
            <div className="cvLanguagesTitle">Languages</div>

            <div className="cvLanguagesRow">
          Language:<input type="text" className="cvLanguagesInput" id="cvSkillName" name="Name" value={languageValues.Name} onChange={handlelanguageChange}/>
          </div>

          <div className="languagesButtons">
            <input type="button" value="Add" className="languagesAddbtn" onClick={PostLanguageDetails}/>
            <input type="button" value="Update" className="languagesUpdatebtn"/>
           </div>


          <table >
              <thead>
                <tr>
                <th>ID</th>
                  <th>Language Name</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                        {languageDatas.map((data, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.Name}</td> 
                            <td>
                              <input type="button" className="btn btn-sm btn-primary" value="Edit"/>{" "}
                              <input type="button" className="btn btn-sm btn-danger" value="Delete" onClick={() => DeleteLanguageData(data.Id)}/>
                            </td>
                          </tr>
                      ))}
                    </tbody>
              </table>

          </div>
         </div>

        </div>

       </div>
          </div>


          <div className="bottomPart">
            <div className="cvSocialContainer">
              <div className="cvSocialTitle">Social Media</div>
              <div className="cvSocialRowsSubmit">
              <div className="cvSocialRow">
              Facebook:<input type="text" className="cvSocialinput" id="cvSocialfb"/>
              </div>

              <div className="cvSocialRow">
              Instagram:<input type="text" className="cvSocialinput" id="cvSocialfb"/>
              </div>

              <div className="cvSocialRow">
              LinkedIn:<input type="text" className="cvSocialinput" id="cvSocialfb"/>
              </div>

              <div className="cvSubmitButton">
                <input type="button" value="Submit" className="cvSubmitbtn"/>
              </div>
              </div>
            </div>
          </div>
          
        </div>
        </div>  
     
    </div> 
  )
}

export default Cv
