import React from "react";
import ProfileCard from "../components/ProfileCard";
import TaskList from "../components/TaskList";
import CreateTaskPanel from "../components/CreateTaskPanel";

const HomeScreen = () => {
  return (
    <div className="flex flex-row w-full h-full p-4 gap-8">
      <div className="gap-8 hidden md:flex w-1/2 h-full flex-col">
        <ProfileCard />
        <CreateTaskPanel />
      </div>
      <div className="w-full">
        <TaskList />
      </div>
    </div>
  );
};

export default HomeScreen;
