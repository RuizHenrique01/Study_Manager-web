import { React } from "react"
import "./index.css"

const Button = ({ type, handleClick, children }) => {
    return (
        <button type={type} className="button-default" onClick={() => {
            try {
                handleClick();
            }catch{}
        }}>
            {children}
        </button>
    );
};

export default Button;