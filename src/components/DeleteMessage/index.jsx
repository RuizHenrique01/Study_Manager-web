import React from 'react';
import './index.css';

const DeleteMessage = ({ children, handleClick }) => {
    return (
        <div className="box-delete-message-external">
        <div className="box-background-delete" onClick={handleClick} />
            <div className="box-delete-message-internal">
                {children}
            </div>
        </div>
    );
}

export default DeleteMessage;