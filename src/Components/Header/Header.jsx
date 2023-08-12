import './Header.css';

import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className='header'>
            <Link to='/' className='logo'>
                
            </Link>
            <div className='headerContainer'>
                <Link to='/'>Home</Link>
                <Link to='/#/about'>About</Link>
            </div>
        </div>
    );

};

export default Header;