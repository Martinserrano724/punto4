import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
const TareaItem = ({tarea}) => {
    return (
        <div >
            <ListGroup.Item className='d-flex justify-content-between' >{tarea} <button className='btn btn-danger'>Borrar</button></ListGroup.Item>
        </div>
    );
};

export default TareaItem;