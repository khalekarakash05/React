import React from 'react';
import { Link } from 'react-router-dom';
import Task from '../assets/Task.png';

const Home = ({ isLoggedin }) => {
  return (
    <div className="w-11/12 max-w-[1160px] flex flex-col sm:flex-row justify-between items-center h-full py-12 mx-auto gap-x-28 gap-y-8">
      <div style={{ flex: 1, marginRight: '2rem' }}>
        <div>
          <span className='text-richblack-700 lg:text-4xl text-2xl'>TASK MANAGEMENT</span>
          <h1 className='text-white text-2xl lg:text-[3rem] lg:leading-normal mt-[1rem] mb-[0.5rem] ' >
            Simplify task management and prioritize work
          </h1>
          <div>
            <p className='text-sm text-richblack-200 lg:text-[1.6rem] leading-10' >
              Asana is the leading software for project management, according to G2¹.
              See all your work in one place so you can prioritize what matters most.
            </p>
          </div>
        </div>
        <div className=''>
          <Link to='/signup'>
            <button 
            className="bg-yellow-50 lg:px-[2.5rem] lg:py-[1rem] mx-auto px-[2.5rem] py-[0.8rem] rounded-[28px] text-richblack-900 font-medium mt-6 transition duration-300 ease-in-out hover:bg-red-500 hover:text-richblack-900">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <div className='lg:mb-0 mt-4 mb-10'>
        <img src={Task} alt='Task'  className='sm:rounded-full rounded-3xl  h-[450px] w-[550px]' />
      </div>
    </div>
  );
};

export default Home;
