import React from "react";
import Button from "./Button";

const CreateTaskPanel = () => {
  return (
    <div className="card max-w-[300px] flex mx-auto">
      <h1 className="text-center font-bold">Create Task</h1>
      <hr className="border-[#dadada]" />
      <label htmlFor="">Task name</label>
      <input
        className="bg-transparent rounded-md border border-white/10 focus:outline-none md:px-4 py-1"
        placeholder="Enter task title"
      />
      <label htmlFor="">Task description</label>
      <input
        className="bg-transparent rounded-md border border-white/10 focus:outline-none md:px-4 py-1"
        placeholder="Enter task description"
      />
      <Button>Create</Button>
    </div>
  );
};

export default CreateTaskPanel;
