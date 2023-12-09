import React from "react";
import { FaUser } from "react-icons/fa";
import Button from "./Button";

const ProfileCard = () => {
  return (
    <div className="card max-w-[300px] flex mx-auto">
      <h1 className="text-center font-bold">My Profile</h1>
      <hr className="border-[#dadada]" />
      <div className="rounded-full w-min flex mx-auto bg-white p-4 bg-opacity-10">
        <FaUser className="w-20 h-20 flex mx-auto " />
      </div>
      <h1 className="font-medium">User Test</h1>
      <p>Total tasks available</p>
      <Button>Logout</Button>
    </div>
  );
};

export default ProfileCard;
