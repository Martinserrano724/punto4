import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
const TareaItem = ({tarea,eliminar}) => {
    
    return (
        <div >
            <ListGroup.Item className='d-flex justify-content-between' onClick={()=>eliminar(tarea)}>{tarea} <button className='btn btn-danger'>Borrar</button></ListGroup.Item>
        </div>
    );
};

export default TareaItem;