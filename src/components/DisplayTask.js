import React, { useState } from 'react';
import toast from 'react-hot-toast';
import UpdateTaskForm from './UpdateTaskForm';

const DisplayTasks = ({ tasks, setTasks, setFormVisible, handleComplete, handleUpdate }) => {
  const [updateIndex, setUpdateIndex] = useState(null);
  const [displayVisible, setDisplayVisible] = useState(true);

  const handleShowForm = () => {
    setFormVisible(true);
    setUpdateIndex(null);
    setDisplayVisible(true);
  };

  const handleUpdateClick = (index) => {
    setUpdateIndex(index);
    setFormVisible(false);
    setDisplayVisible(false);
  };

  const handleUpdateTask = (index, updatedTask) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[index] = {
        ...newTasks[index], // Preserve existing properties
        ...updatedTask, // Update with new data
      }; // Update the task at the specified index
      return newTasks;
    });
    setUpdateIndex(null);
    setFormVisible(false);
    setDisplayVisible(true);
    toast.success('Task Updated Successfully');
  };

  const handleDeleteTask = (index) => {
    // Create a copy of tasks array
    const updatedTasks = [...tasks];
    // Remove the task at the specified index
    updatedTasks.splice(index, 1);
    // Update the tasks state
    setTasks(updatedTasks);
    toast.success('Task Deleted Successfully');
  };

  return (
    <div className="max-w-[600px] mx-auto">
      {displayVisible && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Task List</h2>
          <ul className='max-w-[550px]'>
            {tasks.map((task, index) => (
              <li key={index} className="mb-4">
              
                <div className="mb-2 flex text-lg md:text-xl">
                  <strong className="text-lg font-bold">Notes:</strong>
                  <span className='mx-2 md:mx-4'>{task.notes}</span>
                </div>
                <div className="mb-2 flex text-lg md:text-xl">
                  <strong className="text-lg font-bold ">Sub Task 1:</strong>
                  <span className='mx-2 md:mx-4'>{task.subnotes1}</span>
                </div>
                <div className="mb-2 flex text-lg md:text-xl">
                  <strong className="text-lg font-bold ">Sub Task 2:</strong>
                  <span className='mx-2 md:mx-4'>{task.subnotes2}</span>
                </div>
                <div className="mb-2 flex text-lg md:text-xl">
                  <strong className="text-lg font-bold ">Completed:</strong>
                  <span className='text-[20px] mx-2 md:mx-4'>{task.completed ? 'Yes' : 'No'}</span>
                </div>

                <div className=' flex gap-x-4 mt-4 '>
                  {!task.completed && (
                    <button
                      onClick={() => handleComplete(index)}
                      className="bg-yellow-50 w-[120px] md:w-[150px] text-[18px] md:text-[20px] rounded-[8px] font-medium text-richblack-900 px-1 py-1"
                    >
                      Mark Complete
                    </button>
                  )}
                  {!task.completed && (
                    <button
                      onClick={() => handleUpdateClick(index)}
                      className="bg-blue-500 w-[120px] md:w-[150px] rounded-[8px] font-medium text-richblack-900 px-1 text-[18px] md:text-[20px] py-1"
                    >
                      Update Task
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteTask(index)}
                    className="bg-red-500 text-richblack-900 font-medium rounded-[8px] px-1 text-[18px] md:text-[20px] w-[120px] md:w-[150px] py-1"
                  >
                    Delete
                  </button>
                </div>
                <hr className="my-4" />
              </li>
            ))}
          </ul>
          <div className='flex flex-col sm:w-[400px] md:w-[450px] lg:w-[550px] mx-auto gap-y-4 mt-6'
      >
        <button onClick={handleShowForm}
        className='bg-yellow-50 rounded-md font-medium text-richblack-900 text-lg sm:text-xl px-3 sm:px-4 py-2 sm:py-3 mt-6'
      >
        Add Task
      </button>
      </div>
        </div>
      )}

      {updateIndex !== null && (
        <UpdateTaskForm
          task={tasks[updateIndex]}
          updateIndex={updateIndex}
          handleUpdateTask={handleUpdateTask}
          setFormVisible={setFormVisible}
        />
      )}
    </div>
  );
};

export default DisplayTasks;
