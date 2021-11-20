import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { NavbarToggleContainer } from '../../../Style/Style';
import {Menu} from '../Menu/MenuItems';

const ToggleMenu = ({isOpen, toggle}) => {
    return (
        <Fragment >
            {
                isOpen && <NavbarToggleContainer onClick={toggle}>
            
                {
                    Menu.map((item, index) => {
                        return <Fragment key={index}>
                            <Link to={item.path} className='navbarLiItem toggleItem'>
                                {item.title}
                            </Link>
                        </Fragment>
                        
                    })
                }
                
                </NavbarToggleContainer>
            }
        </Fragment>
        
    );
};

export default ToggleMenu;