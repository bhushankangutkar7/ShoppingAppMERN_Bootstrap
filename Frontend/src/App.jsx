import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import Home from "./Components/Home.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";

function App() {
  return (
    <>
      <div className="d-flex flex-column">
        <Router>
          <NavBar />
          <section>
            <Routes>
              <Route path="" element={<Home />}></Route>
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="sign-up" element={<SignUp />}></Route>
            </Routes>
          </section>
        </Router>
      </div>
    </>
  );
}

export default App;
