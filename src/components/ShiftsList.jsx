import React from "react";
import ShftCard from "./ShftCard";

const ShiftsList = (props) => {
    return (
        <div>
            <h2 className="text-center">Turnos registrados</h2>
            <div className="container d-flex justify-content-around">
                {props.shiftsArray.map((value, idx) => (
                    <ShftCard card={value} key={idx} />
                ))}
            </div>
        </div>
    );
};

export default ShiftsList;
