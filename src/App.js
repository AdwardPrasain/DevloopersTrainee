
import './App.css';
import { useState } from 'react';
import NavBar from './Layout/NavBar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import EduDetails from './Components/EduDetails/EduDetails';
import Login from './Components/Login/Login';
import TraineeDetails from './Components/TraineeDetails/TraineeDetails';
import CreateCV from './Components/CV/CreateCV';
import TraineePrint from './Components/TraineeDetails/TraineePrint';
import CreateLog from './Components/Log/CreateLog';
import ViewLog from './Components/Log/ViewLog';
import ViewCV from './Components/CV/ViewCV';
import DashBoard from './Layout/DashBoard';
import LoginContext from './Context/LoginContext';
//import Create from './Components/CV/Create';
function App() {
  const [URL, setURL] = useState([]);
  const [ClientUserName, setClientUserName] = useState([]);
  const [ClientGUID, setClientGUID] = useState([]);
  return (
   <div>   
   <Router>
      <div className="App">
        
      <LoginContext.Provider value={{URL, setURL, ClientGUID, setClientGUID, ClientUserName, setClientUserName}}>
      <NavBar/>
      
      <Routes>
      <Route exact path="/" element={<DashBoard/>} />
        <Route exact path="/traineedetails" element={<TraineeDetails />} />
        <Route exact path="/createcv" element={<CreateCV />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/TraineePrint" element={<TraineePrint/>}/>
        <Route exact path="/EduDetails" element={<EduDetails/>}/>
        <Route exact path="/createLog" element={<CreateLog/>}/>
        <Route exact path="/viewLog" element={<ViewLog/>}/>
        <Route exact path="/ViewCV" element={<ViewCV/>}/>
       {/* <Route exact path="/Create" element={<Create/>}/> */}
      </Routes>
      </LoginContext.Provider> 
    </div>
    
    </Router>
   </div> 
  );
}

export default App;
