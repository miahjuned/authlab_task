import React from "react";
import {
    ActionButton,
  ActionContainer,
  TableBodyData,
  TableBodyRow,
} from "../All-feature-Request/AllFeatureRequest_CSS.js";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import img from '../../../Images/download.jpg';
import { DashboardImg, DashboardImgContainer } from "../Global_Dashboard_CSS/Global_Dashboard_CSS.js";

const UserTableSearch = ({ user, handleDelete, handleUpdate }) => {
  return (
    <TableBodyRow>
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
            onClick={() => handleDelete(user._id)}
          >
            <AiFillEye />
          </ActionButton>

          <ActionButton
            onClick={() => handleUpdate(user._id)}
          >
            <AiFillEdit />
          </ActionButton>
          <ActionButton
            onClick={() => handleUpdate(user._id)}
          >
            <AiFillDelete />
          </ActionButton>
        </ActionContainer>
      </TableBodyData>
    </TableBodyRow>
  );
};

export default UserTableSearch;
