import React from "react";
import {
    ActionButton,
  ActionContainer,
  TableBodyData,
  TableBodyRow,
} from "../All-feature-Request/AllFeatureRequest_CSS.js";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { AllReplyImg, ReplyImg } from "../../Tab/All_Feature/All_Feature_CSS.js";
import img from '../../../Images/istockphoto-1277188775-170667a.jpg';

const UserTableSearch = ({ user, handleDelete, handleUpdate }) => {
  return (
    <TableBodyRow>
      <TableBodyData> 
          <AllReplyImg>
              <ReplyImg src={user.img || img} alt={user.title} /> 
          </AllReplyImg>
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
