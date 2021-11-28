import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { ToastContainer } from 'react-toastify';
import { ActionButton, ActionContainer, NotFound, Table, TableBodyData, TableBodyRow, TableHeadData } from '../All-feature-Request/AllFeatureRequest_CSS';
import { SidebarData } from './TableTitle';
import TableSearchFrom from './TableSearchFrom.js';
import img from '../../../Images/noimg.png';
import UserTableSearch from './UserTableSearch';
import UserUpdatedModal from './Modal/UserUpdatedModal';
import UserDeleteModal from './Modal/UserDeleteModal';
import { DashboardImg, DashboardImgContainer } from '../Global_Dashboard_CSS/Global_Dashboard_CSS';


const AllFeatureRequest = () => {
    const [user, setUser] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [updateId, setUpdateId] = useState(null); 
    const [searchValue, setSearchValue] = useState('');
    const [tableFilter, setTableFilter] = useState([]);
    const [showUserModal, setShowUserModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const filterData = (e) => {
        if (e.target.value !== "") {
            setSearchValue(e.target.value);
            const filterTable = user.filter(o => Object.keys(o).some(k =>
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
            setUser([...user]);
        }
    }

    let url ='https://sorting-functionality-authlab.herokuapp.com/user/all'
    const features = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data.result))
        
    }

    useEffect(() => {
        features()
    }, [])



    //Update .......................................................
    const handleUpdateUser = (id) => {
        setUpdateId(id)
        setShowUserModal(true);
        setShowDeleteModal(false)
    }


    //Delete...............................................
    const handleDelete = (id) => {
        setDeleteId(id);
        setShowDeleteModal(true);
        setShowUserModal(false);
        console.log(id)
    }



    return (
        <>

            <Table>
                <div className="md:p-5 ">
                    <TableSearchFrom filterData={filterData}/>
                    <thead>
                        <tr className='sticky top-10'>
                            {
                                SidebarData.map((user, index) => {
                                    return (
                                        <TableHeadData user={user} key={index} >
                                            {user.title}
                                        </TableHeadData>
                                    )
                                })
                            }
                        </tr>
                    </thead>

                    <tbody>

                        {searchValue.length > 0 ?
                            tableFilter.map((user, index) => <UserTableSearch user={user} key={index} handleDelete={handleDelete} handleUpdate={handleUpdateUser}></UserTableSearch>)
                            :
                            user.map((user, index) => 
                                <TableBodyRow user={user} key={index} >
                                    <TableBodyData> 
                                        <DashboardImgContainer>
                                            <DashboardImg src={user.img || img} alt={user.title} /> 
                                        </DashboardImgContainer>
                                    </TableBodyData>
                                    <TableBodyData> {user.name}</TableBodyData>
                                    <TableBodyData>{user.email}</TableBodyData>
                                    <TableBodyData>{user.role}</TableBodyData>
                                    <TableBodyData>{(new Date(user.createdAt).toLocaleDateString())}</TableBodyData>

                            
                                    <TableBodyData>
                                        <ActionContainer>
                                            <ActionButton
                                                onClick={() => handleUpdateUser(user._id)} >
                                                <AiFillEdit />
                                            </ActionButton>
                                            <ActionButton
                                                onClick={() => handleDelete(user._id)} >
                                                <AiFillDelete />
                                            </ActionButton>
                                        </ActionContainer>
                                    </TableBodyData>

                                </TableBodyRow>
                            )
                        }

                    </tbody>
                    {notFound && <NotFound>Not found!</NotFound>}

                </div>
            </Table>
            {showUserModal &&
                <UserUpdatedModal features={features} updateId={updateId} showUserModal={showUserModal} setShowUserModal={setShowUserModal}/>
            }
            {showDeleteModal &&
                <UserDeleteModal features={features} deleteId={deleteId} showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}/>
            }
            <ToastContainer />
        </>
    );
};

export default AllFeatureRequest;