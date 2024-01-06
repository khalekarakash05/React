import React, { useState } from 'react';
import Task from '../components/Task';
import DisplayTasks from '../components/DisplayTask';
import toast from 'react-hot-toast';

const Dashboard = ({ setLoggedin }) => {
  const [accountType, setAccountType] = useState('RemindMe');
  const [isFormVisible, setFormVisible] = useState(true);
  const [tasks, setTasks] = useState([]);

  const addTask = (taskData) => {
    setTasks((prevTasks) => [...prevTasks, taskData]);
  };

  const handleComplete = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      return updatedTasks;
    });
    toast.success('Task completed successfully');
  };

  return (
    <div className='flex flex-col items-center text-white text-3xl px-4 sm:px-6 lg:px-8'>

      <p className='mb-4 text-2xl sm:text-3xl'>Create your first Task</p>

      <div className='flex flex-col sm:flex-row gap-4 text-xl sm:text-2xl'>
        <button
          onClick={() => {
            setAccountType('RemindMe');
            setFormVisible(true);
          }}
          className={`${
            accountType === 'RemindMe'
              ? 'bg-richblack-900 text-richblack-5 py-2 px-4 sm:px-6 rounded-full transition-all duration-200'
              : 'bg-transparent text-richblack-200 py-2 px-4 sm:px-6 rounded-full transition-all duration-200'
          } mb-2 sm:mb-0`}
        >
          Remind me
        </button>
        <button
          onClick={() => {
            setAccountType('Personal');
            setFormVisible(true);
          }}
          className={`${
            accountType === 'Personal'
              ? 'bg-richblack-900 text-richblack-5 py-2 px-4 sm:px-6 rounded-full transition-all duration-200'
              : 'bg-transparent text-richblack-200 py-2 px-4 sm:px-6 rounded-full transition-all duration-200'
          } mb-2 sm:mb-0`}
        >
          Personal
        </button>
        <button
          onClick={() => {
            setAccountType('Tags');
            setFormVisible(true);
          }}
          className={`${
            accountType === 'Tags'
              ? 'bg-richblack-900 text-richblack-5 py-2 px-4 sm:px-6 rounded-full transition-all duration-200'
              : 'bg-transparent text-richblack-200 py-2 px-4 sm:px-6 rounded-full transition-all duration-200'
          } mb-2 sm:mb-0`}
        >
          Tags
        </button>
      </div>

      <div className="lg:flex justify-center items-center w-full mt-4">
        {isFormVisible ? (
          <Task
            accountType={accountType}
            addTask={addTask}
            setFormVisible={setFormVisible}
          />
        ) : (
          <DisplayTasks
            setTasks={setTasks}
            tasks={tasks}
            setFormVisible={setFormVisible}
            handleComplete={handleComplete}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
