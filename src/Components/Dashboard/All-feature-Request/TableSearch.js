import React from "react";
import {
    ActionButton,
  ActionContainer,
  TableBodyData,
  TableBodyRow,
} from "./AllFeatureRequest_CSS.js";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { ReplyImg } from "../../Tab/All_Feature/All_Feature_CSS.js";
import img from '../../../Images/istockphoto-1277188775-170667a.jpg';
import { DashboardImg, DashboardImgContainer } from "../Global_Dashboard_CSS/Global_Dashboard_CSS.js";

const TableSearch = ({ item, handleDelete, handleUpdate }) => {
  return (
    <TableBodyRow>
      <TableBodyData> 
          <DashboardImgContainer> 
              <DashboardImg src={item.img || img} alt={item.title} /> 
          </DashboardImgContainer>
      </TableBodyData>
      <TableBodyData> {item.title}</TableBodyData>
      <TableBodyData>{item.description.slice(0, 50) + '.....'}</TableBodyData>
      <TableBodyData>{item.vote}</TableBodyData>
      <TableBodyData>{item.totalComment}</TableBodyData>
      <TableBodyData>{item.status}</TableBodyData>
      <TableBodyData>{item.user && item.user.name}</TableBodyData>
      <TableBodyData>{new Date(item.date).toLocaleDateString()}</TableBodyData>

      <TableBodyData>
        <ActionContainer>
          <ActionButton
            onClick={() => handleDelete(item._id)}
          >
            <AiFillEye />
          </ActionButton>

          <ActionButton
            onClick={() => handleUpdate(item._id)}
          >
            <AiFillEdit />
          </ActionButton>
          <ActionButton
            onClick={() => handleUpdate(item._id)}
          >
            <AiFillDelete />
          </ActionButton>
        </ActionContainer>
      </TableBodyData>
    </TableBodyRow>
  );
};

export default TableSearch;
