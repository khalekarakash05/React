import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About";


function App() {

  const [isLoggedin, setLoggedin]=useState(false);

  
  return (
    <div className=" bg-richblack-900 min-h-screen flex flex-col">
      
      <Navbar isLoggedin={isLoggedin} setLoggedin={setLoggedin}></Navbar>

      <Routes>
        <Route path="/" element={<Home isLoggedin={isLoggedin}></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login isLoggedin={isLoggedin} setLoggedin={setLoggedin}></Login>}></Route>
        <Route path="/signup" element={<Signup isLoggedin={isLoggedin} setLoggedin={setLoggedin}></Signup>}></Route>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedin={isLoggedin} setLoggedin={setLoggedin}>
            <Dashboard></Dashboard>
          </PrivateRoute>
        }></Route>
      </Routes>
    </div>
    )
}

export default App;
