import React, { useEffect, useState } from 'react';
import { NavbarMain } from '../../../Style/Style';
import Menu from '../Menu/Menu';
import ToggleMenu from '../ToggleMenu/ToggleMenu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    const closeMobileMenu = () =>{
        setIsOpen(false);
    };


    useEffect(() => {
        const hideMenu = () => {
            if(window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", hideMenu);
        return() => {
            window.removeEventListener("remove", hideMenu);
        };
    })

    return (
        <NavbarMain style={{backgroundColor:'#022335'}}>
            <Menu 
                isOpen={isOpen} 
                closeMobileMenu={closeMobileMenu} 
                toggle={toggle}/>
            <ToggleMenu 
                isOpen={isOpen}
                toggle={toggle}
            />
        </NavbarMain>
    );
};

export default Navbar;