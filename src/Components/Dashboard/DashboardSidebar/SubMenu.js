import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DashboardLink,
  DashboardLinkIcon,
} from "./DashboardSIdebar_CSS.js";

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = (e) => {
    e.preventDefault();
    setSubnav(!subnav);
  };
  return (
    <>
      <DashboardLink>
        <Link to={item.path} onClick={item.subNav && showSubnav}>
          <DashboardLinkIcon>
            {item.icon}
            <span className="ml-4">{item.title}</span>
          </DashboardLinkIcon>
        </Link>
      </DashboardLink>
    </>
  );
};

export default SubMenu;
