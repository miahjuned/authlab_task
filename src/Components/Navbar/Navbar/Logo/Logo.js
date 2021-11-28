import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarLogo } from '../../../Style/Style';

const Logo = ({closeMobileMenu}) => {
    return (
        <Link to='/' 
            onClick={closeMobileMenu} 
            className='MobileMenu'
        >
            <NavbarLogo >Department of Autority</NavbarLogo>
            
        </Link>
    );
};

export default Logo;