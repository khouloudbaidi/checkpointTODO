import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../../Redux/Actions/Actions";
import EditTask from "../EditTask/EditTask";
import "./Task.css";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className="taskCard">
      <span style={task.isDone ? { textDecoration: "line-through" } : null}>
        {task.title}
      </span>
      <EditTask task={task} />
      <Button
        variant="outline-primary"
        onClick={() => dispatch(deleteTask(task.id))}
      >
        Delete
      </Button>

      <Button
        variant="outline-primary"
        onClick={() => dispatch(completeTask(task.id))}
      >
        {task.isDone ? "unDone" : "Done"}
      </Button>
    </div>
  );
};

export default Task;
