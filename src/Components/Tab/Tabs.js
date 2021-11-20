import React, { useState } from 'react';
import './Tab-css.css'
import { TabContainer, TabUl, TabLI, TabLink , TabBody, TabBodyContainer, TabBodyContent, } from './Tab-css.js';

const Tabs = () => {
    const [openTab, setOpenTab] = useState(2);
    return (
        <TabContainer>
            <div style={{width: '100%'}}>
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
                                (openTab === 3
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
                                (openTab === 3
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
                <TabBody>
                    <TabBodyContainer>
                        {/* <TabBodyContent> */}
                            <div className={openTab === 1 ? "openTab" : "closeTab"} id="link1">
                                <p>
                                    Collaboratively administrate empowered markets via
                                    plug-and-play networks. Dynamically procrastinate B2C users
                                    after installed base benefits.
                                    <br />
                                    <br /> Dramatically visualize customer directed convergence
                                    without revolutionary ROI.
                                </p>
                            </div>
                            <div className={openTab === 2 ? "openTab" : "closeTab"} id="link2">
                                <p>
                                    Completely synergize resource taxing relationships via
                                    premier niche markets. Professionally cultivate one-to-one
                                    customer service with robust ideas.
                                    <br />
                                    <br />
                                    Dynamically innovate resource-leveling customer service for
                                    state of the art customer service.
                                </p>
                            </div>
                            <div className={openTab === 3 ? "openTab" : "closeTab"} id="link3">
                                <p>
                                    Efficiently unleash cross-media information without
                                    cross-media value. Quickly maximize timely deliverables for
                                    real-time schemas.
                                    <br />
                                    <br /> Dramatically maintain clicks-and-mortar solutions
                                    without functional solutions.
                                </p>
                            </div>
                            <div className={openTab === 4 ? "openTab" : "closeTab"} id="link4">
                                <p>
                                    Efficiently unleash cross-media information without
                                    cross-media value. Quickly maximize timely deliverables for
                                    real-time schemas.
                                    <br />
                                    <br /> Dramatically maintain clicks-and-mortar solutions
                                    without functional solutions.
                                </p>
                            </div>
                            <div className={openTab === 5 ? "openTab" : "closeTab"} id="link5">
                                <p>
                                    Efficiently unleash cross-media information without
                                    cross-media value. Quickly maximize timely deliverables for
                                    real-time schemas.
                                    <br />
                                    <br /> Dramatically maintain clicks-and-mortar solutions
                                    without functional solutions.
                                </p>
                            </div>
                        {/* </TabBodyContent> */}
                    </TabBodyContainer>
                </TabBody>
            </div>
        </TabContainer>
    );
};

export default Tabs;