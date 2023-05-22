import React from 'react';

import {Form ,Button} from 'react-bootstrap'
import { useState } from 'react';
import ListaTarea from './ListaTarea'


const Ejer4 = () => {
const [tarea,setTarea] = useState('');
const [tareaArray,setTareaArray]=useState([]);

function handleSubmit(){
  setTareaArray([...tareaArray,tarea]);
 setTarea('');
  }
  const eliminarTarea =(nombreFiltrado)=>{
    let tareasFiltradas=tareaArray.filter((itemTarea)=>itemTarea!=nombreFiltrado)
    setTareaArray(tareasFiltradas);
  }
 
  function onSubmit(e){e.preventDefault();}
    return (
        <div>
        <Form onSubmit={onSubmit}   >
            <Form.Group className="mb-5" controlId="formTarea">
            <Form.Label>Tarea</Form.Label>
            <Form.Control type="text" placeholder="ingrese una Tarea" onChange={(e)=> setTarea(e.target.value)}
         value={tarea}
           />
            </Form.Group>
            <Button className="btn btn-secondary" type="button" onClick={()=>handleSubmit()} >
            Enviar Tarea
            </Button>
        </Form> 
        <ListaTarea tareas={tareaArray} eliminar={eliminarTarea}></ListaTarea>
    </div>
    );
};

export default Ejer4;