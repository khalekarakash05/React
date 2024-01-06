import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";

const PrivateRoute =({isLoggedin, children})=>{
    
    if(isLoggedin)
    {
        return children;
    }
    else{
        return <Navigate to="/login"></Navigate>
    }


}
export default PrivateRoute;