import React from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import "./ListTasks.css";

const ListTasks = ({ filteredTasks, filterStatus }) => {
  const listTasks = useSelector((state) => state.todoReducer.listTasks);

  return (
    <div>
      {filterStatus === "all" ||
      filterStatus === "done" ||
      filterStatus === "undone"
        ? filteredTasks.map((task) => <Task task={task} key={task.id} />)
        : listTasks.map((task) => <Task task={task} key={task.id} />)}
    </div>
  );
};

export default ListTasks;
