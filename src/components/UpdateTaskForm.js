import React from "react";
import { useState } from "react";

const UpdateTaskForm = ({ task, updateIndex, handleUpdateTask, setFormVisible }) => {
  const [formData, setFormData] = useState({
    notes: task.notes,
    subnotes1: task.subnotes1,
    subnotes2: task.subnotes2,
    completed: task.completed,
  });

  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleUpdateTask(updateIndex, {
      notes: formData.notes,
      subnotes1: formData.subnotes1,
      subnotes2: formData.subnotes2,
    });
    setFormVisible(false);
  };

  return (
    <div className="mt-8">
      <h2 className="text-[27px] text-richblack-5 mb-1 leading-[1.375]">Update Task</h2>

      <form onSubmit={submitHandler} className="flex flex-col gap-y-4 mt-6">
        <label className="w-full">
          <p className="text-[20px] text-richblack-5 mb-1 leading-[1.375]">
            NOTES<sup className="text-pink-200">*</sup>
          </p>

          <input
            required
            name="notes"
            type="text"
            value={formData.notes}
            placeholder="Insert your notes here"
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.5rem] text-[15px] text-richblack-5 w-full md:w-[500px] p-[6px]"
          />
        </label>

        <div className="text-[17px]">SUBTASKS</div>

        <label className="w-full">
          <p className="text-[0.975rem] text-richblack-5 mb-1 leading-[1.375]">Sub Task 1</p>

          <input
            name="subnotes1"
            type="text"
            value={formData.subnotes1}
            placeholder="Insert your notes here"
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.5rem] text-[15px] text-richblack-5 w-full md:w-[500px] p-[6px]"
          />
        </label>

        <label className="w-full">
          <p className="text-[0.975rem] text-richblack-5 mb-1 leading-[1.375]">Sub Task 2</p>

          <input
            name="subnotes2"
            type="text"
            value={formData.subnotes2}
            placeholder="Insert your notes here"
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.5rem] text-[15px] text-richblack-5 w-full md:w-[500px] p-[6px]"
          />
        </label>

        <button className="bg-green-500 rounded-[8px] font-medium text-white text-[20px] px-[8px] py-[8px] mt-6 w-full md:w-[500px]">
          Submit Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTaskForm;
