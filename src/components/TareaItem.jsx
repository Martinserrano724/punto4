import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
const TareaItem = ({tarea,eliminar}) => {
    
    return (
        <div className='d-flex flex-row mt-3 '>
            <ListGroup.Item className='w-100 d-flex justify-content-between overflow-auto me-3 ' >{tarea}</ListGroup.Item> <button className='btn btn-danger' onClick={()=>eliminar(tarea)}>Borrar</button>
        </div>
    );
};

export default TareaItem;