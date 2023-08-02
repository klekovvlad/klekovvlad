import { NavLink } from "react-router-dom";
import './nav.scss';

const Nav = () => {

    return (
        <nav className="nav">
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/about">Обо мне</NavLink>
            <NavLink to="/works">Работы</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>
        </nav>
    )
}

export default Nav;