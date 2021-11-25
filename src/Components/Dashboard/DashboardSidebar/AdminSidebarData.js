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
    path: '/dashboard/user',
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: 'Features',
    path: '/dashboard/AllFeatureRequest',
    icon: <AiIcons.AiOutlinePullRequest />,
  },
  {
    title: 'Add admin',
    path: '/dashboard/AllFeatureRequest',
    icon: <AiIcons.AiOutlineUserAdd />,
  },
];
