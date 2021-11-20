import React, { Fragment, useState, useEffect } from 'react';
import { AllFeatureRow,Title, SubTitle, AllFeatureCols, AllFeatureCol, FeatureAddButton, FeatureCommentButton } from './All_Feature_CSS.js';
import { BiUpArrow, BiComment } from "react-icons/bi";
const AllFeature = () => {
    const [feature, setFeature] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setFeature(data))
    }, [])
    console.log(feature)

    return (
        <div>
            <AllFeatureRow>
                {/* <AllFeatureCol>
                    <FeatureAddButton>
                        <BiUpArrow size={30}/>
                        65
                    </FeatureAddButton>
                </AllFeatureCol> */}
                {
                    feature.map((feature, index) =>
                        <Fragment key={index}>
                            <AllFeatureCol>
                                <FeatureAddButton>
                                    <BiUpArrow size={30} />
                                    <p>{feature.postId}</p>
                                </FeatureAddButton>
                            </AllFeatureCol>

                            <AllFeatureCols>
                                <Title>{feature.name}</Title>
                                <SubTitle>{feature.body}</SubTitle>
                            </AllFeatureCols>

                            <AllFeatureCol>
                                <FeatureCommentButton>
                                    <BiComment size={20} />
                                    <strong>{feature.id}</strong>
                                </FeatureCommentButton>
                            </AllFeatureCol>
                        </Fragment>
                    )
                }
                {/* <AllFeatureCols>
                    All_Feature
                </AllFeatureCols> */}


                {/* <AllFeatureCol>
                    <FeatureCommentButton>
                        <BiComment size={20} />
                        <strong>65</strong>
                    </FeatureCommentButton>
                </AllFeatureCol> */}

            </AllFeatureRow>

        </div>
    );
};

export default AllFeature;