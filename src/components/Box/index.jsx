import React from 'react';
import './index.css'

const Box = ({handleClick, children}) => {
    return (
        <div className="box-content" onClick={() => handleClick()}>
            <form className="box-form">
                {children}
            </form>
        </div>
    )
}

export default Box;