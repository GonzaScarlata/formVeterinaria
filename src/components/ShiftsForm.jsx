import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import './shiftsForm.css';

const ShiftsForm = () => {
    const varMascota = 'mascota';
    const varDuenio = 'duenio';
    const varFecha = 'fecha';
    const varHora = 'hora';
    const varSintomas = 'sintomas';
    const [shift, setShift] = useState({mascota:'', duenio:'', fecha: Date, hora: Date, sintomas:'', id:'' });
    const [shiftsArray, setShiftsArray] = useState([]);

    const generateId = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const handleChange = (e, variable) => {
        var temporalVar = e.target.value;
        const id = generateId();

        if (variable === 'mascota') {
            setShift({...shift, mascota: temporalVar, id});
        } else if (variable === 'duenio') {
            setShift({...shift, duenio: temporalVar, id});
        } else if (variable === 'fecha') {
            setShift({...shift, fecha: temporalVar, id});
        } else if (variable === 'sintomas') {
            setShift({...shift, sintomas: temporalVar, id});
        } else {
            setShift({...shift, hora: temporalVar, id});
        };
    }

    return (
        <section id='shifts' className='shadow-lg rounded container my-4'>
            <h1 className='text-center'>Solicitud de turno</h1>
            <Form className="w-75 container my-4">
                <Form.Group className="d-inline-flex justify-content-around w-100 row">
                    <Form.Label className="col-4">
                        Nombre de mascota:
                    </Form.Label>
                    <Form.Control
                        className="col-8"
                        type="text"
                        placeholder="Nombre de mascota"
                        onChange={(e)=>handleChange(e, varMascota)}
                    />
                </Form.Group>

                <Form.Group
                    className="d-inline-flex justify-content-around w-100 row"
                    controlId="formBasicPassword"
                >
                    <Form.Label className="col-4">Nombre del dueño:</Form.Label>
                    <Form.Control
                        className="col-8"
                        type="text"
                        placeholder="Nombre del dueño"
                        onChange={(e)=>handleChange(e, varDuenio)}
                    />
                </Form.Group>

                <Form.Group
                    className="d-inline-flex justify-content-around w-100 row"
                    controlId="formBasicPassword"
                >
                    <Form.Label className="col-4">Fecha:</Form.Label>
                    <Form.Control className="col-3" type="date" onChange={(e)=>handleChange(e, varFecha)}/>
                    <Form.Label className="col">hora:</Form.Label>
                    <Form.Control className="col-3" type="time" onChange={(e)=>handleChange(e, varHora)}/>
                </Form.Group>

                <Form.Group
                    className="d-inline-flex justify-content-around w-100 row"
                    controlId="formBasicPassword"
                >
                    <Form.Label className="col-4">Síntomas:</Form.Label>
                    <Form.Control
                        className="col-8"
                        type="text-area"
                        placeholder="Describa los síntomas"
                        onChange={(e)=>handleChange(e, varSintomas)}
                    />
                </Form.Group>
                <div className="text-center">
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </section>
    );
};

export default ShiftsForm;
