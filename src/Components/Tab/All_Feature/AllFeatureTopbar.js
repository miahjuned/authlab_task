import React from 'react';
import { FeatureTopbar, Select, Topbar } from './All_Feature_CSS';

const AllFeatureTopbar = ({ setSelect, setStatusOption }) => {

    return (
        <div>
            <FeatureTopbar>
                <Topbar>
                    <h2>Showing</h2>
                        <Select onChange={(e) => setSelect(e.target.value)}>
                            <optgroup label="Select options">
                                <option value="select">All</option>
                                <option value="hightest">Hightest vote</option>
                                <option value="lowest">Lowest vote</option>
                                <option value="recent">Recent posts</option>
                                <option value="older">older post</option>
                                <option value="hightest-comment">hightest comment</option>
                            </optgroup>
                        </Select>
                    <h2>Posts and check status</h2>
                    
                    <Select onChange={(e) => setStatusOption(e.target.value)} >
                        <optgroup label="Select status">
                            <option value="planned">Planned</option>
                            <option value="under-review">Under review</option>
                            <option value="in-progress">In-progress</option>
                            <option value="complete">complete</option>
                            <option value="my-own">my-own</option>
                        </optgroup>
                    </Select>
                </Topbar>
            </FeatureTopbar>
        </div>
    );
};

export default AllFeatureTopbar;