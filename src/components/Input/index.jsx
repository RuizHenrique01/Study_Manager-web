import React from 'react';
import './index.css'

const Input = ({ type, name, value, onChange, placeholder, required, readOnly }) => {
    return (
        <input className="input-default" name={name} value={value} type={type}
            onChange={() => { try { onChange() } catch { } }} placeholder={placeholder}
            required={required} readOnly={readOnly} />
    );
}

export default Input;