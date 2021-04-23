import React from "react";
import { Card } from "react-bootstrap";

const ShftCard = (props) => {
    return (
        <Card
            bg="info"
            key={props.card.id}
            text={"info" === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="my-2"
        >
            <Card.Header>Dueño: {props.card.duenio}</Card.Header>
            <Card.Body>
                <Card.Title> {props.card.mascota} </Card.Title>
                <Card.Text className="d-flex flex-column">
                    <span>Síntomas: {props.card.sintomas}</span>
                    <span>Fecha: {props.card.fecha}</span>
                    <span>Hora: {props.card.hora}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ShftCard;
