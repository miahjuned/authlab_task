import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'Users',
    path: '/user/dashboard',
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: 'Features',
    path: '/AllFeatureRequest/dashboard',
    icon: <AiIcons.AiOutlinePullRequest />,
  },
  {
    title: 'Add admin',
    path: '/add-admin/dashboard',
    icon: <AiIcons.AiOutlineUserAdd />,
  },
];
