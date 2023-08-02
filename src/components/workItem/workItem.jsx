import { NavLink } from "react-router-dom"
import './workItem.scss';

const WorkItem = (props) => {
    
    return (
        <NavLink className="work-item" to={props.link}>
            <img src={props.img} alt={props.title} className="work-item-img" />
            <div className="work-item-category">{props.category}</div>
            <div className="work-item-title">{props.title}</div>
        </NavLink>
    )
}

export default WorkItem