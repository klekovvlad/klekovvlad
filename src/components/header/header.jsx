import './header.scss';
import Button from "../button/button";
import Logo from "../logo/logo";
import Nav from "../nav/nav";

const Header = () => {

    return(
        <header className="header">
            <Logo />
            <Nav />
            <Button title="Связаться" url="/contacts" />
        </header>
    )
}

export default Header;