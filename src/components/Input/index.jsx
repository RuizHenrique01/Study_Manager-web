import React from 'react';
import './index.css'

const Input = ({type, value, onChange, placeholder, required, readOnly}) => {
    return (
        <input className="input-default" value={value} type={type} onChange={onChange}
            placeholder={placeholder} required={required} readOnly={readOnly}/>
    );
}

export default Input;