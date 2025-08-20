import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const value = [
    {
      title: "Test1",
      description: "Test Description1",
      status: "Completed",
    },
    {
      title: "Test2",
      description: "Test Description2",
      status: "Remaining",
    },
  ];

  return (
    <TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
  );
};

export default TaskContextProvider;
