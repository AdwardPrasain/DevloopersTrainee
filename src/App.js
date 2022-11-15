// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RLogin from "./Components/Login/RLogin";
import EduDetails from "./Components/EduDetails/EduDetails";
import ViewCv from "./Components/Cv/ViewCv";
import Traine from "./Components/Trainee/Traine";
import Print from "./Components/Print/Print";
// import Create from "./Components/Create";
import CreateCv from "./Components/Cv/CreateCv";
import Log from "./Components/Log/Log";
import Interncertificate from "./Components/interncertificate/interncertificate";
import Navbar from "./layout/Navbar";
import "./Context/LoginContext";
import LogTable from "./Components/Log/LogTable";
import LoginContext from "./Context/LoginContext";

function App() {
  const [URL, setURL] = useState([]);
  const [ClientUserName, setClientUserName] = useState([]);
  const [ClientGUID, setClientGUID] = useState([]);
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />
          <LoginContext.Provider
            value={{
              URL,
              setURL,
              ClientGUID,
              setClientGUID,
              ClientUserName,
              setClientUserName,
            }}
          >
            <Routes>
              {/* <Route exact path="create" element={<Create />} /> */}
              {/* <Route exact path="/" element={<RLogin/>} /> */}
              <Route exact path="/Trainee" element={<Traine />} />
              <Route exact path="/Print" element={<Print />} />
              <Route exact path="/Login" element={<RLogin />} />
              <Route exact path="/Cv" element={<ViewCv />} />
              <Route exact path="/CreateCv" element={<CreateCv />} />
              <Route exact path="/Log" element={<Log />} />
              <Route exact path="/LogTable" element={<LogTable />} />
              <Route exact path="/EduDetails" element={<EduDetails />} />
              <Route
                exact
                path="/interncertificate"
                element={<Interncertificate />}
              />
            </Routes>
          </LoginContext.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;
