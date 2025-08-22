import React from "react";
import { Chart } from "react-google-charts";
import Form from "../components/Form";
import TodoTask from "../components/TodoTask";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { TaskContext } from "../context/taskContext";

const Task = () => {
  const { user } = useContext(UserContext);
  const { taskStats } = useContext(TaskContext);
  return (
    <div className="w-full">
      <h1 className="text-2xl mb-4 text-bold text-teal-700 text-center">
        Welcome <span className="bg-teal-700 text-white p-2">{user?.name}</span>
      </h1>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex flex-row justify-between mt-4 items-center gap-6">
          <div>
            <Form />
          </div>
          <div>
            <Chart
              chartType="PieChart"
              data={taskStats}
              // options={options}
              width={"100%"}
              height={"400px"}
            />
          </div>
        </div>
        <TodoTask />
      </div>
    </div>
  );
};

export default Task;
