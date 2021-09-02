import React from 'react';
import './index.css'

const ButtonAdd = ({handleClick}) => {
     return (
        <button className="button-add" onClick={() => handleClick()}/> 
     );
}

export default ButtonAdd;