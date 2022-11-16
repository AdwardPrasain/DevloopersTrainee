 import './App.css';
 import {useState} from 'react'
 
 import NavBar from './Layout/NavBar';
import Login from './Components/Login/Login';
import CreateCv from './Components/CvDetails/CreateCv';
import TraineeDetails from './Components/Trainee/TraineeDetails';
// import Testing from './Components/CvDetails/Testing';
 import EduDetails from './Components/EduDetails/EduDetails';
 import Log from './Components/LogDetails/Log';
 import PrintTraineeDetails from './Components/PrintTraineeDetails/PrintTraineeDetails';
import ViewCv from './Components/ViewCv/ViewCv';
import Dashboard from './Components/Dashboard/Dashboard';
import Certificates from './Components/PrintCertificate/Certificates';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { LoginContext } from './Context/LoginContext';

function App() {
  const [URL, setURL] = useState("");
  const [ClientUserName, setClientUserName] = useState("");
  const [ClientGUID, setClientGUID] = useState("");
  return (

  <div>
   <Router>
      <div className="App">
      <LoginContext.Provider value={{URL, setURL, ClientGUID, setClientGUID, ClientUserName, setClientUserName}}>
      <NavBar/>
      <Routes>
      <Route exact path="/" element={<Dashboard/>} />
        <Route exact path="/traineedetails" element={<TraineeDetails />} />
        <Route exact path="/createcv" element={<CreateCv/>} />
        <Route exact path="/login" element={<Login />} />
         <Route exact path="/edudetails" element={<EduDetails />} /> 
         <Route exact path="/logdetails" element={<Log/>} /> 
        <Route exact path="/viewcv" element={<ViewCv />} />
        <Route exact path="/printcertificate" element={<Certificates/>} /> 
         <Route exact path="/printtraineedetails" element={<PrintTraineeDetails />} /> 

      </Routes>
      </LoginContext.Provider> 
    </div>
    
    </Router>
  </div>  
  );
}



export default App;
