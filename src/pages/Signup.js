import React from 'react'
import SignupImg from '../assets/signup.png'
import Template from '../components/Template'

const Signup = ({setLoggedin}) => {
  return(
    <Template
    title="Organize your work and life, finally."
    desc1="Become focused, organized, and calm with Task Management."
    desc2="The world’s #1 task manager  app."
    image={SignupImg}
    formtype="Signup"
    setLoggedin={setLoggedin}
    ></Template>
  )
}

export default Signup
