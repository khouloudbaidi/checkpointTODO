import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTaxk } from "../../Redux/Actions/Actions";

const EditTask = ({ task }) => {
  const [show, setShow] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit task :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Enter the new task title ..."
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(editTaxk(task.id, newTitle));
              handleClose();
            }}
          >
            Edit Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;
