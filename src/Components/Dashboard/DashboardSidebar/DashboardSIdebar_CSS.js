import tw from 'twin.macro';

// *************** SIdebar ********************
export const SidebarContainer = tw.div`md:w-1/6 md:h-screen h-full w-full bg-gray-900 overflow-y-scroll`;
export const SidebarDiv = tw.div`h-full md:fixed text-white overflow-y-scroll md:w-1/6`;
export const SidebarBtn = tw.button`bg-gray-500 hover:bg-red-700 focus:bg-blue-500 border-0 m-4 p-4 rounded-2xl`;


export const DashboardLink = tw.div` flex  text-white font-medium justify-between  items-center py-4 px-5 focus:bg-red-600 tracking-tight text-lg  hover:bg-red-600 hover:border-l-4 cursor-pointer`;

export const DashboardLinkIcon = tw.div`flex items-center space-x-3`;

export const DashboardSubnavLink = tw.div` pl-12
h-12
flex
items-center
text-blue-100
text-lg
cursor-pointer 
tracking-tight 
hover:bg-red-600 
font-medium`;