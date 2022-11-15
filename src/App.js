// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Traine from './Components/Trainee/Traine';
import Navbar from './Layout/Nabvar/Nabvar';



import Login from "./Components/Login/Login";
import EduDetails from './Components/EduDetails/EduDetails';
import CreateCv from './Components/CV/CreateCv';
import ViewCV from './Components/CV/ViewCV';
import Print from './Components/Print/Print';
import Log from './Components/Log/Log';

function App() {
  return (

    <div>
      
      <Router>
      <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route exact path ="create" element={<Create/>}/> */}
        <Route exact path="/Trainee" element={<Traine/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/Cv" element={<ViewCV/>} /> 
        <Route exact path="/CreateCv" element={<CreateCv/>} />
         <Route exact path="/EduDetails" element={<EduDetails/>} /> 
         <Route exact path="/Print" element={<Print/>} /> 
         <Route exact path="/Log" element={<Log/>} /> 


      </Routes>
      </div>
      </Router>
    </div>
    
  );
}

export default App;
