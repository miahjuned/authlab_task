import React, { Fragment, useState, useEffect, useContext } from 'react';
import { AllFeatureRow,Title, SubTitle, AllFeatureCols, AllFeatureCol, FeatureAddButton, FeatureCommentButton, Status, PostDate } from './All_Feature_CSS.js';
import { BiUpArrow, BiComment } from "react-icons/bi";
import { toast } from 'react-toastify';
import { userContext } from '../../../App.js';
import { useHistory } from 'react-router';
import AllFeatureTopbar from './AllFeatureTopbar.js';

const AllFeature = () => {
    const [feature, setFeature] = useState([]);
    const [selectOption, setSelectOption] = useState('select');
    const [statusOption, setStatusOption] = useState();
    const { user } = useContext(userContext); 
    let history = useHistory();
    console.log('feature', feature)

    let url ='https://sorting-functionality-authlab.herokuapp.com/features/'
    const features = (id) => {
        
        if (selectOption === 'select' ) {
                fetch(url + 'all')
                .then(res => res.json())
                .then(data => setFeature(data.docs))
        } else if(statusOption) {
             fetch( url + `?status=${statusOption}` )
                .then(res => res.json())
                .then(data => setFeature(data.result))
        } else {
            fetch( url + `vote/${selectOption}` )
            .then(res => res.json())
            .then(data => setFeature(data.data))
        }
    }

    useEffect(() => {
        features()
    }, [selectOption, statusOption])

    const handleVoteUpdated = (id, vote) => {
        if (user.email) {
            fetch(url + id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({vote: vote + 1})
            })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("successfully done a vote", {
                        position: "bottom-right",
                    });
                    features(id)
                }
            })
        } else {
            history.push('/login')
        }
    }
    
    const handlePostClick = (id) => {
        history.push(`/single/feature/${id}`);
    }

    return (
        <div>
            <AllFeatureTopbar  setSelect={setSelectOption} setStatusOption={setStatusOption}/>
            <AllFeatureRow>
                
                {
                    feature && feature.map((feature, index) =>
                        <Fragment key={index}>
                            <AllFeatureCol title='add vote' 
                                    onClick={() => handleVoteUpdated(feature._id , feature.vote)
                                }>
                                <FeatureAddButton >
                                    <BiUpArrow size={30} />
                                    <p>{feature.vote}</p>
                                </FeatureAddButton>
                            </AllFeatureCol>

                            <AllFeatureCols title='view details' onClick={() => handlePostClick(feature._id)}>
                                <Title>{feature.title}</Title>
                                <PostDate>{(new Date(feature.date).toLocaleDateString())}</PostDate>
                                <Status>{feature.status}</Status>
                                <SubTitle>{feature.description.slice(0, 100) + '...'}</SubTitle>
                            </AllFeatureCols>

                            <AllFeatureCol title='see comment' onClick={() => handlePostClick(feature._id)}>
                                <FeatureCommentButton >
                                    <BiComment size={20} />
                                    <strong>{feature.totalComment}</strong>
                                </FeatureCommentButton>
                            </AllFeatureCol>
                        </Fragment>
                    )
                }

            </AllFeatureRow>

        </div>
    );
};

export default AllFeature;