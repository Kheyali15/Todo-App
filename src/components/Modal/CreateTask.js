import React from "react";
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

function CreateTask({ modal, toggle }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Title</Label>
              <Input name="title" type="text" />
            </FormGroup>
            <FormGroup>
              <Label>Bio</Label>
              <Input name="text" type="textarea" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
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
