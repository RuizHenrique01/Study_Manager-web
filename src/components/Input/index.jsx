import React from 'react';
import './index.css'

const Input = ({type, value, onChange, placeholder, required}) => {
    return (
        <input className="input-default" value={value} type={type} onChange={onChange}
            placeholder={placeholder} required={required} />
    );
}

export default Input;