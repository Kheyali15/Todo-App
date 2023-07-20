import React from "react";
import { Card, CardBody, CardHeader, CardText } from "reactstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const Cards = ({ taskObj, index }) => {
  

  return (
    <>
      <Card
        style={{
          width: "18rem",
          //   height:"15rem",
          display: "flex",
          flex: "wrap",
        }}
      >
        <CardHeader>{taskObj.title}</CardHeader>
        <CardBody>
          <CardText>{taskObj.bio}</CardText>
          <div style={{ position: "absolute", right: "20px", bottom: "10px" }}>
            <FiEdit />
            <AiOutlineDelete onClick={handleDelete} />
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Cards;
