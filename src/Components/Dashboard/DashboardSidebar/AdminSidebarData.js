import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/super-admin/dashboard/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />

    // subNav: [
    //   {
    //     title: 'Users',
    //     path: '/super-admin/dashboard/manage-user/overview/',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: 'Revenue',
    //     path: '/super-admin/dashboard/overview/manage-users',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
  {
    title: 'Users',
    path: '/super-admin/dashboard/manage-user/overview',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Customers',
        path: '/super-admin/dashboard/customers/overview',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Vendors',
        path: '/super-admin/dashboard/vendors/overview',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Admin',
        path: '/super-admin/dashboard/admin/overview',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Super ADmin',
        path: '/super-admin/dashboard/super-admin/overview',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'All Feature Request',
    path: '/dashboard/AllFeatureRequest',
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: 'Blogs',
    path: '/super-admin/dashboard/blogs/overview',
    icon: <FaIcons.FaBloggerB />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Blog Overview',
        path: '/super-admin/dashboard/blogs/overview',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Add New Blog',
        path: '/super-admin/dashboard/blogs/addBlog',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
 
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Orders Report',
        path: '/reports/orders',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      // {
      //   title: 'Reports 3',
      //   path: '/reports/reports3',
      //   icon: <IoIcons.IoIosPaper />
      // }
    ]
  },
  {
    title: 'Messages',
    path: '/super-admin/dashboard/massage/overview',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
