import React from 'react';
import './index.css'

const InputForm = ({ type, name, register, readOnly, required}) => {
    return (
        <input className="input-default" name={name} type={type} 
            {...register(name, {required: required})} readOnly={readOnly} required={required} />
    );
}

export default InputForm