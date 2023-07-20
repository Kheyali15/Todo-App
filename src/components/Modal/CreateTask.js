import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function CreateTask({ modal, toggle, save }) {
  const [taskName, setTaskName] = useState("");
  const [bio, setBio] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setTaskName(value);
    } else {
      setBio(value);
    }
  };

  const handleSave = () => {
    let task = {};
    task["title"] = taskName;
    task["bio"] = bio;
    save(task);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Title</Label>
              <Input name="title" type="text" value={taskName} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label>Bio</Label>
              <Input name="bio" type="textarea" value={bio}onChange={handleChange} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateTask;
