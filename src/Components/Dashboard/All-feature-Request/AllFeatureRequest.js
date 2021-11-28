import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { ToastContainer } from 'react-toastify';
import { ActionButton, ActionContainer, NotFound, Table, TableBodyData, TableBodyRow, TableHeadData } from './AllFeatureRequest_CSS.js';
import { SidebarData } from './TableTitle';
import TableSearch from './TableSearch.js';
import TableSearchFrom from './TableSearchFrom.js';
import img from '../../../Images/noimg.png';
import UpdatedModal from './Modal/UpdatedModal.js';
import DeleteModal from './Modal/DeleteModal.js';
import { DashboardImg, DashboardImgContainer } from '../Global_Dashboard_CSS/Global_Dashboard_CSS.js';
import PostCommentShowModal from './Modal/PostCommentShowModal.js';


const AllFeatureRequest = () => {
    const [searchValue, setSearchValue] = useState('');
    const [feacther, setFeacther] = useState([]);
    const [tableFilter, setTableFilter] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [updateId, setUpdateId] = useState(null);
    const [commentId, setCommentId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showCommentModal, setShowCommentModal] = useState(false);

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



    //Update.......................................................
    const handleUpdate = (id) => {
        setUpdateId(id);
        setShowModal(true);
        setShowDeleteModal(false);
        setShowCommentModal(false);
    }


    //Delete...............................................
    const handleDelete = (id) => {
        setDeleteId(id);
        setShowModal(false);
        setShowDeleteModal(true); 
        setShowCommentModal(false);
    }
    //ShowComment...............................................
    const handleShowComment = (id) => {
        setCommentId(id);
        setShowModal(false);
        setShowDeleteModal(false);
        setShowCommentModal(true);
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
                            tableFilter.map((item, index) => <TableSearch item={item} key={index} handleShowComment={handleShowComment} handleDelete={handleDelete} handleUpdate={handleUpdate}></TableSearch>)
                            :
                            feacther && feacther.map((item, index) => {
                                return <TableBodyRow item={item} key={index} >

                                    <TableBodyData> 
                                        <DashboardImgContainer>
                                            <DashboardImg src={item.img || img} alt={item.title} /> 
                                        </DashboardImgContainer>
                                    </TableBodyData>
                                    <TableBodyData> {item.title}</TableBodyData>
                                    <TableBodyData>{item.description.slice(0, 50) + '...'}</TableBodyData>
                                    <TableBodyData>{item.status}</TableBodyData>
                                    <TableBodyData>{item.user && item.user.name}</TableBodyData>
                                    <TableBodyData>{(new Date(item.date).toLocaleDateString())}</TableBodyData>

                                    <TableBodyData>
                                        <ActionContainer>
                                            <TableBodyData>{item.totalComment}</TableBodyData>
                                            <ActionButton
                                                onClick={() => handleShowComment(item._id)} >
                                                <AiFillEye />
                                            </ActionButton>
                                        </ActionContainer>
                                    </TableBodyData>
                                    <TableBodyData>{item.vote}</TableBodyData>

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
            {showCommentModal && 
                <PostCommentShowModal features={features} commentId={commentId} showCommentModal={showCommentModal} setShowCommentModal={setShowCommentModal}/>
            }
            <ToastContainer />
        </>
    );
};

export default AllFeatureRequest;