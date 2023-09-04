import './Header.css';

import { Link, useLocation } from "react-router-dom";

const HeaderContainer = () => {
    
    const links = [
        {"to":"/", "name":"Home"},
        {"to":"/about", "name":"About"},
    ]

    console.log(useLocation().pathname);

    return (
        <div className='headerContainer'>
            {
                links.map((link, index)=>{
                    return <Link to={link.to} key={"link "+ index} className={useLocation().pathname == link.to ? "active" : ""}>{link.name}</Link>
                })
            }
        </div>
    );
};

const Header = () => {
    return (
        <header className='header' aria-label='header'>
            <Link to='/' className='logo' aria-label='Logo link to Home'></Link>
            <HeaderContainer/>
        </header>
    );
};

export default Header;