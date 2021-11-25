import tw from 'twin.macro';

// *************** SIdebar ********************
export const SidebarContainer = tw.div`md:w-1/6 md:h-screen h-full w-full bg-gray-900 overflow-y-scroll`;
export const SidebarDiv = tw.div`h-full md:fixed text-white overflow-y-scroll md:w-1/6`;
export const SidebarBtn = tw.h2`bg-red-600 hover:bg-red-800 font-bold text-center m-4 p-4 rounded-2xl w-10/12`;


export const DashboardLink = tw.div` flex  text-white font-medium justify-between  items-center py-4 px-5 focus:bg-red-600 tracking-tight text-lg  hover:bg-red-600 hover:border-l-4 cursor-pointer`;

export const DashboardLinkIcon = tw.div`flex items-center space-x-3`;


