import { React } from "react"
import "./index.css"

const Button = (props) => {
    return (
        <button className="button-default">
            {props.name}
        </button>
    );
};

export default Button;