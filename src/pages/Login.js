import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"


const Login = ({setLoggedin}) => {
  return(
    <Template
    title="Welcome Back"
    desc1="Capture tasks at the speed of thought"
    desc2="Organize, prioritize, and get things done"
    image={loginImg}
    formtype="Login"
    setLoggedin={setLoggedin}
    ></Template>
  )
}

export default Login
