import React from 'react';
import {DashboardTitle} from '../Global_Dashboard_CSS/Global_Dashboard_CSS.js';
import { ImSearch } from 'react-icons/im';
import { SearchForm, SearchInput, SearchInputBtn, TableSearch } from './AllFeatureRequest_CSS.js';


const TableSearchFrom = ({filterData}) => {
    return (
        <TableSearch style={{ background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
            <DashboardTitle >
                All features
            </DashboardTitle>
            <SearchForm>
                <SearchInput
                    onChange={filterData}
                    type="text"
                    placeholder="Search"
                />

                <SearchInputBtn type="submit" >
                    <ImSearch className="h-4" />
                </SearchInputBtn>
            </SearchForm>
        </TableSearch>
    );
};

export default TableSearchFrom;