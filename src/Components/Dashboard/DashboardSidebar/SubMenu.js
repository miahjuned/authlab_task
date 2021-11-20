import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {SidebarLink, SidebarLabel, DropdownLink , SidebarContainer, SidebarDiv, DashboardLink, Container , SidebarBtn, DashboardLinkIcon, DashboardSubnavLink} from './DashboardSIdebar_CSS.js';


const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = (e) => {
        e.preventDefault();
        setSubnav(!subnav)
    };
    return (
        <>
            <DashboardLink>
                <Link
                to={item.path} 
                onClick={item.subNav && showSubnav}>
            <DashboardLinkIcon>
                    {item.icon}
                <span className='ml-4'>
                    {item.title}
                </span>
            <div>
                {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </div>
            
            </DashboardLinkIcon>
            </Link>
            </DashboardLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DashboardSubnavLink>
                            <Link to={item.path} 
                                key={index}>
                                    <DashboardLinkIcon>
                                {item.icon}
                                <span className='ml-4'>{item.title}</span>
                                </DashboardLinkIcon>
                            </Link>
                        </DashboardSubnavLink>
                    );
                })}
      </>
    );
};

export default SubMenu;