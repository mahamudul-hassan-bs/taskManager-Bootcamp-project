import React, { useContext } from "react";
import Card from "../components/Card";
import { TaskContext } from "../context/TaskContext";
const TodoTask = () => {
  const tasks = useContext(TaskContext);
  console.log(tasks);
  return (
    <div className="container mt-6 text-center">
      <h1>No task today!</h1>
      <div className="flex justify-between p-2 w-full text-lg h-auto bg-gray-200 px-4">
        <div>
          <p>Title</p>
        </div>
        <div>
          <p>Description</p>
        </div>
        <div>Status</div>
      </div>
      {tasks.map((task, index) => (
        <Card
          key={index}
          title={task.title}
          description={task.description}
          status={task.status}
        />
      ))}
    </div>
  );
};

export default TodoTask;
