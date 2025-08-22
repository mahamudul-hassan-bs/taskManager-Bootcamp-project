import { useContext } from "react";
import { createContext } from "react";
import { UserContext } from "./UserContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const { token, backendUrl } = useContext(UserContext);

  const [tasks, setTasks] = useState([]);
  const [taskStats, setTaskStats] = useState([]);

  const getTask = async () => {
    try {
      const res = await axios.get(
        backendUrl + "/api/task/allTask",

        { headers: { token } }
      );
      // console.log(res.data);
      if (res.data.success) {
        setTasks(res.data.taskList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTaskStats = async () => {
    try {
      const stats = await axios.get(
        backendUrl + "/api/task/taskStats",

        { headers: { token } }
      );

      if (stats.data.success) {
        const data = [
          ["Status", "No. of Task"],
          ["Pending", stats.data.result.pending],
          ["Completed", stats.data.result.completed],
        ];
        setTaskStats(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTask(token);
  }, [token]);

  useEffect(() => {
    getTaskStats(token);
  }, [tasks]);
  const value = {
    tasks,
    setTasks,
    getTask,
    taskStats,
  };

  return (
    <TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
  );
};

export default TaskContextProvider;
