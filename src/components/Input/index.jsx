import React from 'react';
import './index.css'

const Input = ({ type, name, value, onChange, placeholder, required, readOnly, autoComplete }) => {
    return (
        <input className="input-default" name={name} value={value} type={type}
            onChange={onChange} placeholder={placeholder}
            required={required} readOnly={readOnly} autoComplete={autoComplete}/>
    );
}

export default Input;