import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./shiftsForm.css";
import ShiftsList from "./ShiftsList";

const ShiftsForm = () => {
    let localStorageShifts =
        JSON.parse(localStorage.getItem("shiftsArray")) || [];
    const varMascota = "mascota";
    const varDuenio = "duenio";
    const varFecha = "fecha";
    const varHora = "hora";
    const varSintomas = "sintomas";
    const [shift, setShift] = useState({
        mascota: "",
        duenio: "",
        fecha: "",
        hora: "",
        sintomas: "",
        id: "",
    });
    const [shiftsArray, setShiftsArray] = useState(localStorageShifts);

    const generateId = function () {
        return "_" + Math.random().toString(36).substr(2, 9);
    };

    const handleChange = (e, variable) => {
        var temporalVar = e.target.value;
        const id = generateId();

        if (variable === "mascota") {
            setShift({ ...shift, mascota: temporalVar, id });
        } else if (variable === "duenio") {
            setShift({ ...shift, duenio: temporalVar, id });
        } else if (variable === "fecha") {
            setShift({ ...shift, fecha: temporalVar, id });
        } else if (variable === "sintomas") {
            setShift({ ...shift, sintomas: temporalVar, id });
        } else {
            setShift({ ...shift, hora: temporalVar, id });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (shift.id !== '' && shift.mascota !== '' && shift.duenio !== '' && shift.fecha !== '' && shift.hora !== '' && shift.sintomas !== ''){
            setShiftsArray([...shiftsArray, shift]);
            setShift({
                mascota: "",
                duenio: "",
                fecha: Date,
                hora: Date,
                sintomas: "",
                id: "",
            });
        } else {
            alert('Debes llenar todos los campos');
        }
    };

    useEffect(() => {
        localStorage.setItem("shiftsArray", JSON.stringify(shiftsArray));
    }, [shiftsArray]);
    return (
        <section id="shifts" className="shadow-lg rounded container my-4">
            <h1 className="text-center">Solicitud de turno</h1>
            <Form
                className="w-75 container my-4"
                onSubmit={(e) => handleSubmit(e)}
            >
                <Form.Group className="d-inline-flex justify-content-around w-100 row">
                    <Form.Label className="col-4">
                        Nombre de mascota:
                    </Form.Label>
                    <Form.Control
                        className="col-8"
                        type="text"
                        placeholder="Nombre de mascota"
                        onChange={(e) => handleChange(e, varMascota)}
                        value={shift.mascota}
                    />
                </Form.Group>

                <Form.Group className="d-inline-flex justify-content-around w-100 row">
                    <Form.Label className="col-4">Nombre del dueño:</Form.Label>
                    <Form.Control
                        className="col-8"
                        type="text"
                        placeholder="Nombre del dueño"
                        onChange={(e) => handleChange(e, varDuenio)}
                        value={shift.duenio}
                    />
                </Form.Group>

                <Form.Group className="d-inline-flex justify-content-around w-100 row">
                    <Form.Label className="col-4">Fecha:</Form.Label>
                    <Form.Control
                        className="col-3"
                        type="date"
                        onChange={(e) => handleChange(e, varFecha)}
                        value={shift.fecha}
                    />
                    <Form.Label className="col">hora:</Form.Label>
                    <Form.Control
                        className="col-3"
                        type="time"
                        onChange={(e) => handleChange(e, varHora)}
                        value={shift.hora}
                    />
                </Form.Group>

                <Form.Group className="d-inline-flex justify-content-around w-100 row">
                    <Form.Label className="col-4">Síntomas:</Form.Label>
                    <Form.Control
                        className="col-8"
                        type="text-area"
                        placeholder="Describa los síntomas"
                        onChange={(e) => handleChange(e, varSintomas)}
                        value={shift.sintomas}
                    />
                </Form.Group>
                <div className="text-center">
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
            <ShiftsList shiftsArray={shiftsArray}/>
        </section>
    );
};

export default ShiftsForm;
