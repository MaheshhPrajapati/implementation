import React from 'react';
import CarName from './CarName';
import CarDetails from './CarDetails';

function Card(props){
    return (
        <div className="box">
            <CarName name={props.name} />
            <img src={props.img} alt={props.alt} />
            <p className="inOneLine">Model: </p><CarDetails detailinfo={props.model} />
            <br />
            <p className="inOneLine">km: </p><CarDetails detailinfo={props.km} />
        </div>
    );
}

export default Card;