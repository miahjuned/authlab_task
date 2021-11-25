import React from 'react';
import AdminSidebar from '../DashboardSidebar/DashboardSidebar';
import User from './User';
import { DashboardContainer, DashboardMain } from '../Global_Dashboard_CSS/Global_Dashboard_CSS';

const UserOverview = () => {
    return (
        <div>
             <DashboardMain>
                <AdminSidebar/>
                <DashboardContainer>
                    <User/>
                </DashboardContainer>
            </DashboardMain>
        </div>
    );
};

export default UserOverview;