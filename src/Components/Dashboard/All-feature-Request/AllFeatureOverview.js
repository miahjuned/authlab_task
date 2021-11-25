import React from 'react';
import AdminSidebar from '../DashboardSidebar/DashboardSidebar';
import { DashboardContainer, DashboardMain } from '../Global_Dashboard_CSS/Global_Dashboard_CSS';
import AllFeatureRequest from './AllFeatureRequest';

const AllFeatureOverview = () => {
    return (
        <div>
            <DashboardMain>
                <AdminSidebar/>
                <DashboardContainer>
                    <AllFeatureRequest/>
                </DashboardContainer>
            </DashboardMain>
        </div>
    );
};

export default AllFeatureOverview;