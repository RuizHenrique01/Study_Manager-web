import React from 'react';
import './index.css'

const InputForm = ({ type, name, register, readOnly }) => {
    return (
        <input className="input-default" name={name} type={type} 
            {...register(name)} readOnly={readOnly} />
    );
}

export default InputForm