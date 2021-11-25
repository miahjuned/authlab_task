import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { ToastContainer } from 'react-toastify';
import { ActionButton, ActionContainer, NotFound, Table, TableBodyData, TableBodyRow, TableHeadData } from './AllFeatureRequest_CSS.js';
// import OrderDeleteModal from './OrderDeleteModal';
// import OrderStatusModal from './OrderStatusModal';
import { SidebarData } from './TableTitle';
import TableSearch from './TableSearch.js';
import TableSearchFrom from './TableSearchFrom.js';
import img from '../../../Images/istockphoto-1277188775-170667a.jpg';
import { AllReplyImg, ReplyImg } from '../../Tab/All_Feature/All_Feature_CSS.js';
import UpdatedModal from './Modal/UpdatedModal.js';
import UserDeleteModal from '../User/Modal/UserDeleteModal.js';
import DeleteModal from './Modal/DeleteModal.js';


const AllFeatureRequest = () => {
    const [searchValue, setSearchValue] = useState('');
    const [feacther, setFeacther] = useState([]);
    const [tableFilter, setTableFilter] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [modalDeleteStatus, setModalDeleteStatus] = useState(false);
    const [modalUpdateStatus, setModalUpdateStatus] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [updateId, setUpdateId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

console.log(feacther)

    const filterData = (e) => {
        if (e.target.value !== "") {
            setSearchValue(e.target.value);
            const filterTable = feacther.filter(o => Object.keys(o).some(k =>
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
            setFeacther([...feacther]);
        }
    }

    let url ='https://sorting-functionality-authlab.herokuapp.com/features/'
    const features = () => {
        fetch(url + 'all')
        .then(res => res.json())
        .then(data => setFeacther(data.docs))
        
    }

    useEffect(() => {
        features()
    }, [])



    //Update push.......................................................
    const handleUpdate = (id) => {
        setUpdateId(id);
        setShowModal(true);
        setShowDeleteModal(false);
    }


    //Delete...............................................
    const handleDelete = (id) => {
        setDeleteId(id);
        setShowModal(false);
        setShowDeleteModal(true);
    }



    return (
        <>
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
                            feacther.map((item, index) => {
                                return <TableBodyRow item={item} key={index} >

                                    <TableBodyData> 
                                        <AllReplyImg>
                                            <ReplyImg src={item.img || img} alt={item.title} /> 
                                        </AllReplyImg>
                                    </TableBodyData>
                                    <TableBodyData> {item.title}</TableBodyData>
                                    <TableBodyData>{item.description}</TableBodyData>
                                    <TableBodyData>{item.vote}</TableBodyData>
                                    <TableBodyData>{item.totalComment}</TableBodyData>
                                    <TableBodyData>{item.status}</TableBodyData>
                                    <TableBodyData>{item.user && item.user.name}</TableBodyData>
                                    <TableBodyData>{(new Date(item.date).toLocaleDateString())}</TableBodyData>

                            
                                    <TableBodyData>
                                        <ActionContainer>
                                            <ActionButton
                                                onClick={() => handleUpdate(item._id)} >
                                                <AiFillEdit />
                                            </ActionButton>
                                            <ActionButton
                                                onClick={() => handleDelete(item._id)} >
                                                <AiFillDelete />
                                            </ActionButton>
                                        </ActionContainer>
                                    </TableBodyData>
                                </TableBodyRow>
                            })
                        }

                    </tbody>
                    {notFound && <NotFound>Not found!</NotFound>}

                </div>
            </Table>
            {showModal &&
                <UpdatedModal features={features} updateId={updateId} showModal={showModal} setShowModal={setShowModal}/>
            }
            {showDeleteModal &&
                <DeleteModal features={features} deleteId={deleteId} showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}/>
            }
            <ToastContainer />
        </>
    );
};

export default AllFeatureRequest;