import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/Actions/Actions";
import "./AddTask.css";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="addTaskContainer">
      <Form.Control
        type="Text"
        placeholder="Enter Task title ..."
        className="inputTask"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <Button
        variant="light"
        onClick={() => {
          dispatch(
            addTask({
              id: Math.random(),
              title,
              isDone: false,
            })
          );
          setTitle("");
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default AddTask;
