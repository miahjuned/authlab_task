import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { ToastContainer } from 'react-toastify';
import { Table, TableBodyData, TableBodyRow, TableHeadData } from './AllFeatureRequest_CSS.js';
import { DashboardMain, DashboardContainer ,DashboardTitle} from '../Global_Dashboard_CSS/Global_Dashboard_CSS.js';
// import OrderDeleteModal from './OrderDeleteModal';
// import OrderStatusModal from './OrderStatusModal';
import { SidebarData } from './TableTitle';
import AdminSidebar from '../DashboardSidebar/DashboardSidebar.js';
import TableSearch from './TableSearch.js';
import TableSearchFrom from './TableSearchFrom.js';


const AllFeatureRequest = () => {
    const [searchValue, setSearchValue] = useState('');
    const [products, setProducts] = useState([]);
    const [tableFilter, setTableFilter] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [modalDeleteStatus, setModalDeleteStatus] = useState(false);
    const [modalUpdateStatus, setModalUpdateStatus] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [updateId, setUpdateId] = useState(null);


    const filterData = (e) => {
        if (e.target.value !== "") {
            setSearchValue(e.target.value);
            const filterTable = products.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase()))
            );

            if (filterTable.length === 0) {
                setNotFound(true);
            } else {
                setNotFound(false);
            }

            setTableFilter([...filterTable])
        } else {
            setSearchValue(e.target.value);
            setProducts([...products]);
        }
    }


    useEffect(() => {
        fetch(`https://mamar-dukan.herokuapp.com/orders`)
        // fetch(`https://mamar-dukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data =>
                setProducts(data.orders)
            )
    }, [])


    // Delete...........................................................
    const deleted = () => {
        fetch(`https://mamar-dukan.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setProducts(data.orders))
    }


    //Update push.......................................................
    const handleUpdate = (id) => {
        setModalUpdateStatus(true);
        setUpdateId(id)
    }


    //Delete...............................................
    const handleDelete = (id) => {
        setModalDeleteStatus(true);
        setDeleteId(id)
    }



    return (
        <div>
            <DashboardMain>
                <AdminSidebar/>
                <DashboardContainer>
                        <Table>
                            <div className="md:p-5 ">
                                <TableSearchFrom filterData={filterData}/>
                                <thead>
                                    <tr className='sticky top-10'>
                                        {
                                            SidebarData.map((item, index) => {
                                                return (
                                                    <TableHeadData item={item} key={index} >
                                                        {item.title}
                                                    </TableHeadData>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>

                                <tbody>

                                    {searchValue.length > 0 ?
                                        tableFilter.map((item, index) => <TableSearch item={item} key={index} handleDelete={handleDelete} handleUpdate={handleUpdate}></TableSearch>)
                                        :
                                        products.map((item, index) => {
                                            return <TableBodyRow item={item} key={index} >

                                                <TableBodyData>{item?.order.orderId}</TableBodyData>
                                                <TableBodyData>
                                                    <div className='flex px-5 items-center'>
                                                        
                                                        <p> {item.product.product?.name}</p>
                                                    </div>
                                                </TableBodyData>
                                                <TableBodyData>{item?.product.product?.quantity}</TableBodyData>
                                                <TableBodyData>${item.product.product?.price}</TableBodyData>
                                                <TableBodyData>{item.product.product?.size}</TableBodyData>
                                                <TableBodyData>{(new Date(item.order.orderDate).toLocaleDateString())}</TableBodyData>
                                                <TableBodyData>{item.order.status}</TableBodyData>

                                        
                                                <TableBodyData>
                                                    <div className='flex items-center text-2xl'>
                                                        <button  onClick={() => handleDelete(item._id)} className='text-blue-800 p-1 hover:bg-gray-900 rounded-full hover:text-gray-50'><AiFillEye /></button>

                                                        <button
                                                            onClick={() => handleUpdate(item._id)}
                                                            className='text-gray-900 hover:text-yellow-400 p-1 hover:bg-gray-900 rounded-full '>
                                                            <AiFillEdit />
                                                        </button>
                                                    </div>
                                                </TableBodyData>
                                            </TableBodyRow>
                                        })
                                    }

                                </tbody>
                                {notFound && <p className="text-red-600 p-4 flex items-center justify-center">Not found!</p>}

                            </div>
                        </Table>

                        {/* {modalDeleteStatus && <OrderDeleteModal
                            setModalDeleteStatus={setModalDeleteStatus}
                            deleteId={deleteId}
                            deleted={deleted}
                        />}

                        {modalUpdateStatus && <OrderStatusModal
                            setModalUpdateStatus={setModalUpdateStatus}
                            updateId={updateId}
                            deleted={deleted}
                        />} */}
                        <ToastContainer />
            
                </DashboardContainer>
            </DashboardMain>
        </div>
    );
};

export default AllFeatureRequest;