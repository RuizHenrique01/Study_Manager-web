import { React } from 'react';
import './index.css';

const ErrorWarning = ({ children }) => {
    return (
        <span className="error-warning">
            { children }
        </span>
    );
}

export default ErrorWarning;