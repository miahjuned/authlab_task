import React, { useState } from 'react';
import FeatureRequests from './Feature_Requests/FeatureRequests';
import comingSoonImg from '../../Images/coming-soon-page.jpg';
import comingSoonImgs from '../../Images/comingsoon2.png';
import './Tab-css.css'
import { TabContainer, TabHeader, TabTitle, TabUl, TabLI, TabLink, TabBody, TabBodyContainer, } from './Tab-css.js';

const Tabs = () => {
    const [openTab, setOpenTab] = useState(2);
    return (
        <TabContainer>
            <div style={{ width: '100%' }}>
                <TabHeader >
                    <TabTitle> <h2>Feedback</h2></TabTitle>
                    <TabUl
                        role="tablist"
                    >
                        <TabLI>
                            <TabLink
                                className={
                                    (openTab === 1
                                        ? "tab"
                                        : "tabActive")
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                BUGS
                            </TabLink>
                        </TabLI>
                        <TabLI>
                            <TabLink
                                className={
                                    (openTab === 2
                                        ? "tab"
                                        : "tabActive")
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                FEATURE REQUESTS
                            </TabLink>
                        </TabLI>
                        <TabLI>
                            <TabLink
                                className={
                                    (openTab === 3
                                        ? "tab"
                                        : "tabActive")
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                DATABASE REQUESTS
                            </TabLink>
                        </TabLI>
                        <TabLI>
                            <TabLink
                                className={
                                    (openTab === 4
                                        ? "tab"
                                        : "tabActive")
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                }}
                                data-toggle="tab"
                                href="#link4"
                                role="tablist"
                            >
                                MOBILE BUGS
                            </TabLink>
                        </TabLI>
                        <TabLI>
                            <TabLink
                                className={
                                    (openTab === 5
                                        ? "tab"
                                        : "tabActive")
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(5);
                                }}
                                data-toggle="tab"
                                href="#link5"
                                role="tablist"
                            >
                                MOBILE FEATURES
                            </TabLink>
                        </TabLI>
                    </TabUl>
                </TabHeader>
                <TabBody>
                    <TabBodyContainer>
                        {/* <TabBodyContent> */}
                        <div className={openTab === 1 ? "openTab" : "closeTab"} id="link1">
                            <img src={comingSoonImg} alt='comingSoonImg'/>
                        </div>

                        <div className={openTab === 2 ? "openTab" : "closeTab"} id="link2">
                           <FeatureRequests/>
                        </div>

                        <div className={openTab === 3 ? "openTab" : "closeTab"} id="link3">
                            <img src={comingSoonImgs} alt='comingSoonImg'/>
                        </div>

                        <div className={openTab === 4 ? "openTab" : "closeTab"} id="link4">
                            <img src={comingSoonImg} alt='comingSoonImg'/>

                        </div>
                        <div className={openTab === 5 ? "openTab" : "closeTab"} id="link5">
                            <img src={comingSoonImgs} alt='comingSoonImg'/>
                        </div>
                        {/* </TabBodyContent> */}
                    </TabBodyContainer>
                </TabBody>
            </div>
        </TabContainer>
    );
};

export default Tabs;