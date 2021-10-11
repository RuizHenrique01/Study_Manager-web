import { React } from "react"
import "./index.css"

const Button = ({ type, handleClick, children, disabled}) => {
    return (
        <button type={type} className="button-default" onClick={() => {
            try {
                handleClick();
            }catch{}
        }} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;