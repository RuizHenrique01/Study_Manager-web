import { React } from "react"
import "./index.css"

const Button = ({ children }) => {
    return (
        <button className="button-default">
            {children}
        </button>
    );
};

export default Button;