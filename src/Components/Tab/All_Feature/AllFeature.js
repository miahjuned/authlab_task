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

    // ///////Approve Button......................................
    // const handleApprove = () => {
    //     setOpen(false)
    //     setModalUpdateStatus(false)

    //     const size = "P"

    //     const orderStatus = {
    //         orderId: updateId,
    //         status: "Approved"
    //     };

    //     const url = `https://mamar-dukan.herokuapp.com/orders/${updateId}`;
    //     fetch(url, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(orderStatus)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data) {
    //                 toast.success("Order status updated successfully", {
    //                     position: "bottom-right",
    //                 });
    //                 deleted();
    //             }
    //         })
    // }

    const handleVote = (id, vote) => {
        const updateStatus = {
            vote: vote + 1,
            id: id
        };
        console.log('id',id)
        console.log('vote', vote)
        console.log(updateStatus)
    }

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
                                <FeatureAddButton onClick={() => handleVote(feature.id, feature.postId)}>
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