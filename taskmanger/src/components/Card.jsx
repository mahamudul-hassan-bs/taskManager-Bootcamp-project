// import React, { useState } from "react";

const Card = ({ title, description, status }) => {
  // const [taskStatus, setTaskStatus] = useState("Remaining");
  // // const handleTaskStatus = ()=>{
  // //   setTaskStatus()
  // // }
  // console.log(taskStatus);
  console.log(title, description, status);
  return (
    <div className="flex justify-between p-2 w-full  h-auto px-4 border-b-2 border-gray-200">
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <select
          name=""
          value={status}
          // onChange={}
          id=""
        >
          <option value="Completed">Completed</option>
          <option value="Remaining">Remaining</option>
        </select>
      </div>
    </div>
  );
};

export default Card;
