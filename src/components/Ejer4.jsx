import React from 'react';

import {Form ,Button} from 'react-bootstrap'
const Ejer4 = () => {
    

    return (
        <div>
        <Form>
            <Form.Group className="mb-5" controlId="formTarea">
            <Form.Label>Tarea</Form.Label>
            <Form.Control type="text" placeholder="ingrese una Tarea" />
            </Form.Group>
            <Button className="btn btn-secondary" type="submit">
            Enviar Tarea
            </Button>
        </Form> 
    </div>
    );
};

export default Ejer4;