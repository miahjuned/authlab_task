import React from 'react';
import {TableBodyData, TableBodyRow, TableHeadData } from './AllFeatureRequest_CSS.js';
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";

const TableSearch = ({item, handleDelete, handleUpdate}) => {
    return (
        <TableBodyRow>

            <TableBodyData>{item.order.orderId}</TableBodyData>
            <TableBodyData>
                <div className='flex px-5 items-center'>

                    <p> {item?.product.product.name}</p>
                </div>
            </TableBodyData>

            <TableBodyData>{item?.product.product.quantity}</TableBodyData>
            <TableBodyData>${item.product.product?.price}</TableBodyData>
            <TableBodyData>{item.product.product?.size}</TableBodyData>


            <TableBodyData>{(new Date(item.order.orderDate).toLocaleDateString())}</TableBodyData>
            <TableBodyData>${item.order.status}</TableBodyData>

            <TableBodyData>
                <div className='flex items-center text-2xl'>
                    <button
                        onClick={() => handleDelete(item._id)} className='text-blue-800 p-1 hover:bg-gray-900 rounded-full hover:text-gray-50'><AiFillEye /></button>

                    <button
                        onClick={() => handleUpdate(item._id)}
                        className='text-yellow-400 p-1 hover:bg-gray-900 rounded-full '>
                        <AiFillEdit />
                    </button>

                </div>
            </TableBodyData>
        </TableBodyRow>
    );
};

export default TableSearch;