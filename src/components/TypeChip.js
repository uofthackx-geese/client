import React from "react";
import './TypeChip.css'

export const TypeChip = ({type}) => {
    return (
        <div id='TCMain' style={{backgroundColor: type == 'restaurant' ? 'rgb(1, 142, 250)' : type == 'hotel' ? '#BA0021' : '#720e9e'}}>{type}</div>
    )
}

export default TypeChip