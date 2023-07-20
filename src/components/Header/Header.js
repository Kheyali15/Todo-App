import React, {useState} from "react";
import { Button } from "reactstrap";
import CreateTask from "../Modal/CreateTask";

const Header = () => {

  const [modal, setModal] = useState("")

  const toggle = () => {
    setModal(!modal)
  }

  return (
    <>
      <div
        className="header text-center"
        style={{
          height: "200px",
          width: "100%",
          backgroundColor: "#e6ffff",
          paddingTop: "40px",
        }}
      >
        <h3>Todo App</h3>
        <Button color="primary" style={{ padding: "8px" }} onClick={() => setModal(true)}>
          Create Task
        </Button>
      </div>
      <CreateTask toggle={toggle} modal={modal}/>
    </>
  );
};

export default Header;
