import { React } from 'react';
import './index.css';

const ErrorMessage = ({ children }) => {
    return (
        <span className="error-message">
            { children }
        </span>
    );
}

export default ErrorMessage;