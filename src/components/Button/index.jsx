import { React } from "react"
import "./index.css"

const Button = ({ type, handleClick ,children }) => {
    return (
        <button type={type} className="button-default" onClick={() => handleClick()}>
            {children}
        </button>
    );
};

export default Button;