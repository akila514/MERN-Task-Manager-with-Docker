import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-black/10 border-white/10 rounded-lg border p-2 w-[180px]">
      <h1 className="font-medium truncate">{task.title}</h1>
      <hr className="border border-white/10 my-4" />
      <p className="truncate mb-2">{task.description}</p>
      <p className="px-3 py-1 rounded-xl w-min text-xs bg-green-500">
        {task.status}
      </p>
    </div>
  );
};

export default TaskCard;
