import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
const TareaItem = ({tarea,eliminar}) => {
    
    return (
        <div >
            <ListGroup.Item className='d-flex justify-content-between' >{tarea} <button className='btn btn-danger' onClick={()=>eliminar(tarea)}>Borrar</button></ListGroup.Item>
        </div>
    );
};

export default TareaItem;