import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'

const LoginForm =({setLoggedin})=>{

    const [formData, setFormData]=useState({
        email:"",
        password:""
    })

    const navigate=useNavigate();


    const [showPassword, setShowPassword]=useState(false)

    function changeHandler(event){
        setFormData((prevdata)=>{
            
                return{
                    ...prevdata,
                [event.target.name]: event.target.value
                }
            
        })
    }
    function submitHandler(e){
        e.preventDefault();
        setLoggedin(true);
        toast.success("Logged In");
        navigate("/dashboard")
    }
    return(
        <div>
            <form onSubmit={submitHandler}
            className='flex flex-col w-full gap-y-4 mt-6'
            >
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>
                        Email Address<sup className='text-pink-200'>*</sup>
                    </p>
                

                <input 
                required
                name='email'
                type='email'
                value={formData.email}
                placeholder='Enter email id'
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px]'
                >
                </input>
                </label>



                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>
                        Password<sup className='text-pink-200'>*</sup>
                    </p>
                

                <input 
                required
                name='password'
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                placeholder='Enter password'
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px]'
                >
                </input>

                <span onClick={()=>setShowPassword((prev)=>!prev)}
                className='absolute right-3 top-[38px] cursor-pointer text-2xl'
                >
                    {showPassword ? 
                    (<AiOutlineEyeInvisible fontsize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>):
                     (<AiOutlineEye fontsize={24} fill='#AFB2BF'></AiOutlineEye>)}
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto '>Forgot Password</p>
                </Link>
                </label>

                <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default LoginForm
