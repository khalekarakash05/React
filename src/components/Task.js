import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Task = ({ addTask, setFormVisible }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    notes: '',
    subnotes1: '',
    subnotes2: '',
    completed: false,
  });

  function clickHandler(e) {
    e.preventDefault();
    setFormVisible(false);
  }

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();

    toast.success('Task added successfully');
    navigate('/dashboard');

    const accountData = {
      ...formData,
    };

    const finalData = {
      ...accountData,
    };
    console.log('Printing final the Data');
    console.log(finalData);
    addTask(finalData);
    setFormVisible(false);
  }

  return (
    <div className='h-screen p-4 sm:p-6 md:p-8 lg:p-10'>
      <form
        onSubmit={submitHandler}
        className='flex flex-col sm:w-[400px] md:w-[450px] lg:w-[550px] mx-auto gap-y-4 mt-6'
      >
        <label className='w-full'>
          <p className='text-xl sm:text-2xl text-richblack-5 mb-1 leading-6 sm:leading-7'>
            NOTES<sup className='text-pink-200'>*</sup>
          </p>

          <input
            required
            name='notes'
            type='text'
            value={formData.notes}
            placeholder='Insert your notes here'
            onChange={changeHandler}
            className='bg-richblack-800 text-lg sm:text-xl rounded-md text-richblack-5 w-full p-2 sm:p-3'
          />
        </label>

        <div className='text-lg sm:text-xl'>SUBTASKS</div>

        <label className='w-full'>
          <p className='text-base sm:text-lg text-richblack-5 mb-1 leading-6 sm:leading-7'>
            Sub Task 1
          </p>

          <input
            name='subnotes1'
            type='text'
            value={formData.subnotes1}
            placeholder='Insert your sub tasks here'
            onChange={changeHandler}
            className='bg-richblack-800 rounded-md text-lg sm:text-xl text-richblack-5 w-full p-2 sm:p-3'
          />
        </label>

        <label className='w-full'>
          <p className='text-base sm:text-lg text-richblack-5 mb-1 leading-6 sm:leading-7'>
            Sub Task 2
          </p>

          <input
            name='subnotes2'
            type='text'
            value={formData.subnotes2}
            placeholder='Insert your sub tasks here'
            onChange={changeHandler}
            className='bg-richblack-800 rounded-md text-lg sm:text-xl text-richblack-5 w-full p-2 sm:p-3'
          />
        </label>

        <button className='bg-yellow-50 rounded-md font-medium text-richblack-900 text-lg sm:text-xl px-3 sm:px-4 py-2 sm:py-3 mt-6'>
          Submit Task
        </button>
      </form>
    <div className='flex flex-col sm:w-[400px] md:w-[450px] lg:w-[550px] mx-auto gap-y-4 mt-6'
      >
        <button
        onClick={clickHandler}
        className='bg-yellow-50 rounded-md font-medium text-richblack-900 text-lg sm:text-xl px-3 sm:px-4 py-2 sm:py-3 mt-6'
      >
        Display Task
      </button>
      </div>
      
    </div>
  );
};

export default Task;
