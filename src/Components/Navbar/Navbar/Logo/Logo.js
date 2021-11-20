import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { NavbarLogo } from '../../../Style/Style';

const Logo = ({closeMobileMenu}) => {
    return (
        <Link to='/' 
            onClick={closeMobileMenu} 
            className='MobileMenu'
        >
            <NavbarLogo >Department of Accounting</NavbarLogo>
            
        </Link>
    );
};

export default Logo;