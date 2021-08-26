import { React } from "react"
import "./index.css"

const Button = ({ handleClick ,children }) => {
    return (
        <button className="button-default" onClick={() => handleClick()}>
            {children}
        </button>
    );
};

export default Button;