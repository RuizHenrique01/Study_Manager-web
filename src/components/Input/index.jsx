import React from 'react';
import './index.css'

const Input = (props) => {
    return (
        <input className="input-default" type={props.type} placeholder={props.placeholder} required={props.required}/>
    );
}

export default Input;