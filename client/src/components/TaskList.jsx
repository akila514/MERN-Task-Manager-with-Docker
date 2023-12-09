import React from "react";
import { taskList } from "../data/tasksList";
import TaskCard from "./TaskCard";

const TaskList = () => {
  return (
    <div className="card">
      <h1 className="text-center font-bold">My Tasks</h1>
      <hr className="border-[#dadada]" />
      <div className="flex flex-wrap gap-4">
        {taskList.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
