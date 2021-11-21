import React from 'react';
import {DashboardTitle} from '../Global_Dashboard_CSS/Global_Dashboard_CSS.js';
import { ImSearch } from 'react-icons/im';


const TableSearchFrom = ({filterData}) => {
    return (
        <div className=" flex justify-between sticky top-0" style={{ background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
            <DashboardTitle >
                Recent Orders
            </DashboardTitle>
            <form action="" className=" flex items-center">
                <input
                    onChange={filterData}
                    type="text"
                    placeholder="Search"
                    className="ml-2 rounded-l-full w-full h-7  pl-2 sm:px-5 text-gray-900 leading-tight outline-none border-none"
                />

                <button type="submit" className='text-2xl m-0 font-lg sm:mr-2 cursor-pointer text-white rounded-r-2xl focus:outline-none w-16 flex items-center justify-center  bg-red-600 hover:bg-red-800  h-7'>
                    <ImSearch className="h-4" />
                </button>
            </form>
        </div>
    );
};

export default TableSearchFrom;