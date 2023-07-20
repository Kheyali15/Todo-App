import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Cards from "../Card/Card";
import CreateTask from "../Modal/CreateTask";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (task) => {
    let tempList = taskList;
    tempList.push(task);
    localStorage.setItem("taskList", JSON.stringify(tempList));
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
      <div style={{ display: "flex", flexWrap: "wrap", padding: "0 40px", gap:"15px"}}>
        {taskList.map((e, index) => (
          <Cards taskObj={e} index={index} />
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default Header;
