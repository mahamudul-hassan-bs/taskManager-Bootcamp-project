import React, { useContext } from "react";
import Card from "../components/Card";
import { TaskContext } from "../context/TaskContext";
const TodoTask = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="container mt-6 p-2 text-center">
      {Array.isArray(tasks) && tasks.length > 0 ? (
        <>
          <div className="grid grid-cols-7 gap-4 p-2 w-full text-lg h-auto bg-gray-200 px-4">
            <div>
              <p>Title</p>
            </div>
            <div>
              <p>Description</p>
            </div>
            <div>
              <p>Category</p>
            </div>
            <div>
              <p>Priority</p>
            </div>
            <div>
              <p>Due Date</p>
            </div>
            <div>
              <p>Status</p>
            </div>
            <div>
              <p>Action</p>
            </div>
          </div>
          {tasks.map((task, index) => (
            <Card
              key={index}
              title={task.title}
              description={task.description}
              status={task.status}
              priority={task.priority}
              dueDate={task.dueDate}
              category={task.category}
              id={task._id}
            />
          ))}
        </>
      ) : (
        <h1>No task to show!</h1>
      )}
    </div>
  );
};

export default TodoTask;
