import React from 'react';
import DashboardSidebar from '../Components/Dashboard/DashboardSidebar/DashboardSidebar.js';
import User from '../Components/Dashboard/User/User';
import { DashboardContainer, DashboardMain } from '../Components/Dashboard/Global_Dashboard_CSS/Global_Dashboard_CSS.js';
import AllFeature from '../Components/Dashboard/All-feature-Request/AllFeatureRequest';

const Dashboard = () => {
    return (
        <div>
            <DashboardMain>
                <DashboardSidebar/>
                <DashboardContainer>
                    <User/>
                    <AllFeature/>
                </DashboardContainer>
            </DashboardMain>
        </div>
    );
};

export default Dashboard;