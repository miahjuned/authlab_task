import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "./MenuItems";
import Logo from "../Logo/Logo";
import SocialMedia from "../SocialMedia/SocialMedia";
import { FaBars, FaCaretDown, FaShoppingBag, FaTimes } from "react-icons/fa";
import { userContext } from "../../../../App";
import { NavbarContainer, NavbarLi, NavbarToggle, NavbarUl } from "../../../Style/Style.js";
import './Menu.css';

const NavbarSection = ({ toggle, closeMobileMenu, isOpen }) => {

  const { user, setUser } = useContext(userContext);
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser)
      }
    }, []);

  return (
    <Fragment>
      <NavbarContainer role="navigation" >
      {/* <NavbarContainer role="navigation"> */}
        <Logo closeMobileMenu={closeMobileMenu} />

        {/*============== Toogle menu ===========*/}

        <NavbarToggle onClick={toggle}>
          { 
            isOpen ? <FaTimes style={{color:'white'}} /> : <FaBars style={{color:'white'}}  />
          }

        </NavbarToggle>

          <NavbarUl>
              {
                Menu.map((item, index) => {
                  return (
                    <NavbarLi key={index}>
                      <Link to={item.path} className='navbarLiItem'>
                        {item.title} 
                      </Link>
                    </NavbarLi>
                    
                    
                  );
                  
                })
              }
              <NavbarLi>
                <button  className='navbarLiItemBtn'>Buy Ticket</button>
              </NavbarLi>
            
            <SocialMedia />
          <NavbarLi>
              {
                user.role === "user" &&  <Link to='/user/dashboard'  className='navbarLiItem'>
                      Dashboard
                  </Link>
              }
              {
                user.role === "vendor" &&  <Link to='/vendor/dashboard/overview'  className='navbarLiItem'>
                      Dashboard
                  </Link>
              }
              {
                user.role === "admin" &&  <Link to='/super-admin/dashboard/overview'  className='navbarLiItem'>
                      Dashboard
                  </Link>
              }
              {
                user.role === "superadmin" &&  <Link to='/super-admin/dashboard/overview'  className='navbarLiItem'>
                      Dashboard
                  </Link>
              }
          </NavbarLi>
        </NavbarUl>

      </NavbarContainer>
    </Fragment>
  );
};

export default NavbarSection;
