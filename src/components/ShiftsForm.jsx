import React from "react";
import { Button, Form } from "react-bootstrap";

const ShiftsForm = () => {
    return (
        <section className='my-4'>
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
                    />
                </Form.Group>

                <Form.Group
                    className="d-inline-flex justify-content-around w-100 row"
                    controlId="formBasicPassword"
                >
                    <Form.Label className="col-4">Fecha:</Form.Label>
                    <Form.Control className="col-3" type="date" />
                    <Form.Label className="col">hora:</Form.Label>
                    <Form.Control className="col-3" type="time" />
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
