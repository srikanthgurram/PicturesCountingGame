import React from 'react'
import Number from './Number'

export default NumberList = props => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        numbers.map((number) =>
        <Number 
            id={number} 
            key={number.toString()}
            onNumberSelect={props.validateInput.bind(this, number)} 
            >
            {number}
        </Number>
    ));
}
