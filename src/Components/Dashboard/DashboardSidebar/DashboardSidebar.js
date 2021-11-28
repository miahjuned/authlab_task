import React, { useContext } from 'react';
import { userContext } from '../../../App';
import { SidebarContainer, SidebarDiv, SidebarBtn} from './DashboardSIdebar_CSS.js';
import SubMenu from './SubMenu';
import {SidebarData} from './AdminSidebarData';

const AdminSidebar = () => {
  
  const { user } = useContext(userContext);
    return (
      <SidebarContainer>
        <SidebarDiv>
          <SidebarBtn>Hello! {user.name}</SidebarBtn>
          {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
        </SidebarDiv>
      </SidebarContainer>
    );
};

export default AdminSidebar;