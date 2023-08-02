import { NavLink } from "react-router-dom"
import './button.scss';

const Button = (props) => {
    return(
        <NavLink className="button" to={props.url}>{props.title}</NavLink>
    )
}

export default Button;