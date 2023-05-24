import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import TareaItem from "./TareaItem";

const ListaTarea = ({ tareas, eliminar }) => {
  return (
    <div>
      <ListGroup className="mt-5">
        {tareas.map((tar, index) => {
          return (
            <TareaItem tarea={tar} key={index} eliminar={eliminar}></TareaItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default ListaTarea;
