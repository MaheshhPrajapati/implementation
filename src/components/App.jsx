import React from 'react';
import Card from './Card';
import CarInfo from '../CarInfo';

function CreateNewCar(CarInfo){
    return (<Card 
    id = {CarInfo.id}
    key = {CarInfo.id}
    name = {CarInfo.carName}
    img = {CarInfo.imgURL}
    model = {CarInfo.model}
    km = {CarInfo.KmDriven}
    alt = {CarInfo.alt}
    />
    );
}

function App(props){
    return (<div>
        {CarInfo.map(CreateNewCar)}
    </div>);
};

export default App;