import tw from 'twin.macro';

// Dashboard CSS
export const DashboardMain = tw.div`flex flex-wrap`;
export const DashboardContainer = tw.div`md:w-5/6 w-full h-screen overflow-y-scroll bg-gray-200`;
export const DashboardTitle = tw.h2` text-white py-2 border-l-4 pl-3 border-red-600`;



export const DashboardLink = tw.div` flex  text-white font-medium justify-between  items-center py-4 px-5 focus:bg-red-600 tracking-tight text-lg  hover:bg-red-600 hover:border-l-4 cursor-pointer`;

export const DashboardLinkIcon = tw.div`flex items-center space-x-3`;
export const DashboardImgContainer = tw.div`h-20 w-20 rounded-full`;
export const DashboardImg = tw.img`h-full w-full rounded-full`;
