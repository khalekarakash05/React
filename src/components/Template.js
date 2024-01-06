import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import frameImg from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formtype, setLoggedin }) => {
  return (
    <div className="w-11/12 max-w-[1160px] flex flex-col sm:flex-row justify-between items-center h-full py-12 mx-auto sm:gap-x-12 gap-y-8">
      <div className="w-full sm:w-[45%] max-w-[450px]">
        <h1 className="text-richblack-5 font-semibold text-2xl sm:text-3xl leading-8 sm:leading-10">
          {title}
        </h1>

        <p className="text-base sm:text-lg mt-4">
          <span className="text-richblack-100">{desc1}</span> <br />
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formtype === "Signup" ? (
          <SignupForm setLoggedin={setLoggedin}></SignupForm>
        ) : (
          <LoginForm setLoggedin={setLoggedin}></LoginForm>
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium text-base sm:text-lg leading-5 sm:leading-6">
            OR
          </p>
          <div className="w-full h-[1px] bg-richblack-700"></div>
        </div>

        <div className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-3 py-2 gap-x-2 mt-6 text-base sm:text-lg">
          <FcGoogle></FcGoogle>
          <button>Sign in with Google</button>
        </div>
      </div>

      <div className="relative w-full sm:w-[45%] max-w-[450px] mt-8 sm:mt-0">
        <img
          src={frameImg}
          width={558}
          height={504}
          loading="lazy"
          alt="Pattern"
        ></img>

        <img
          src={image}
          width={558}
          height={504}
          loading="lazy"
          alt="Students"
          className="absolute -top-4 right-4"
        ></img>
      </div>
    </div>
  );
};

export default Template;
