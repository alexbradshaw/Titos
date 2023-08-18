import './Header.css';

import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className='header' aria-label='header'>
            <Link to='/' className='logo' aria-label='Logo link to Home'></Link>
            <div className='headerContainer'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </div>
        </header>
    );

};

export default Header;