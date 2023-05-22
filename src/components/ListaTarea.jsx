import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import TareaItem from './TareaItem';

const ListaTarea = ({tareas}) => {

    
    return (
        <div>
            <ListGroup className='mt-5'>
        {
            tareas.map((tar,key)=>{return <TareaItem tarea={tar} key={key} ></TareaItem>})
        }
            
        
      
      
    </ListGroup>
        </div>
    );
};

export default ListaTarea;