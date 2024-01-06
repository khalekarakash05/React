import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'




const SignupForm=({setLoggedin})=>{


    const navigate=useNavigate();


    const [formData, setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""

    })
    const [showPassword, setShowPassword]=useState(false)
    const [showPassword1, setShowPassword1]=useState(false)


    const [accountType , setAccountType] =useState("student")
    

    function changeHandler(event){
        setFormData((prevData)=>{
            return{
                ...prevData,
            [event.target.name]: event.target.value
            }
            
        })
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password  != formData.confirmPassword){
            toast.error("Password do not match")
            return;
        }

        setLoggedin(true);
        toast.success("Account Created")


        navigate("/dashboard")

        const accountData={
            ...formData
        }


        const finalData={
            ...accountData,
            accountType
        }
        console.log("Printing final the Data");
        console.log(finalData)


    }

    return(
        <div className='flex flex-col' >

        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button onClick={()=>{
                setAccountType("student")
            }}
            
            className={`${accountType === "student" ? 
            "bg-richblack-900 text-richblack-5 py-2 px-5 rounded-full transition-all duration-200"
            :"bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"}`}
            >
                Student
            </button>
            <button onClick={()=>{
                setAccountType("Instructor")}}
                
                className={`${accountType === "Instructor" ? 
            "bg-richblack-900 text-richblack-5 py-2 px-5 rounded-full transition-all duration-200"
            :"bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"}`}
                >
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <div className='flex gap-x-4 mt-[5px]'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>First Name 
                <sup className='text-pink-200'>*</sup></p>
                <input
                type='text'
                name="firstName"
                value={formData.firstName}
                placeholder='Enter first name'
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px]'>
                </input>
            </label>

            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>Last Name 
                <sup className='text-pink-200'>*</sup></p>
                <input
                type='text'
                name='lastName'
                value={formData.lastName}
                placeholder='Enter last name'
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px]'>
                </input>
            </label>
        </div>


            <div className='mt-[5px]'>
            <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>
                        Email Address<sup className='text-pink-200 '>*</sup>
                    </p>
                

                <input 
                required
                name='email'
                type='email'
                value={formData.email}
                placeholder='Enter email id'
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px]'>
                </input>
                </label>
            </div>




                <div className='flex gap-x-4 mt-[10px]'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>
                       Create Password<sup className='text-pink-200'>*</sup>
                    </p>
                

                <input 
                required
                name='password'
                type={showPassword1 ? ("text") : ("password")}
                value={formData.password}
                placeholder='Create password'
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px]'>
                </input>

                <span onClick={()=>setShowPassword1((previ)=>!previ)}
                 className='absolute right-3 top-[38px] cursor-pointer text-2xl'>
                    {showPassword1 ? 
                    (<AiOutlineEyeInvisible fontsize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>):
                     (<AiOutlineEye fontsize={24} fill='#AFB2BF'></AiOutlineEye>)}
                </span>
                </label>




                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>
                       Confirm Password<sup className='text-pink-200'>*</sup>
                    </p>
                

                <input 
                required
                name='confirmPassword'
                type={showPassword ? ("text") : ("password")}
                value={formData.confirmPassword}
                placeholder='Confirm password'
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px]'>
                </input>

                <span onClick={()=>setShowPassword((prev)=>!prev)}
                className='absolute right-3 top-[38px] cursor-pointer text-2xl'>
                    {showPassword ? 
                    (<AiOutlineEyeInvisible fontsize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>):
                     (<AiOutlineEye fontsize={24} fill='#AFB2BF'></AiOutlineEye>)}
                </span>
                </label>
                </div>


                <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                    Create Account
                </button>
        </form>


        </div>
    )
}


export default SignupForm
