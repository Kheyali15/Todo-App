import React, { useState } from "react";
import { Button } from "reactstrap";
import CreateTask from "../Modal/CreateTask";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (task) => {
    let tempList = taskList;
    tempList.push(task);
    setTaskList(tempList);
    setModal(false);
  };

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
        <Button
          color="primary"
          style={{ padding: "8px", marginTop: "10px" }}
          onClick={() => setModal(true)}
        >
          Create Task
        </Button>
      </div>
      <div className="task-container">
        {taskList.map((e) => <li>{e.title}</li>)}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default Header;
