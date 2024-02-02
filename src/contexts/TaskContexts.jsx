/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import initialTask from "./../data/task.js";
import taskReducer from "./../reducers/taskReducer";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export default function TaskContextProvider({ children }) {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTask);
  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export const useTasks = () => {
  return useContext(TaskContext);
};

export const useTasksDispatch = () => {
  return useContext(TaskDispatchContext);
};
