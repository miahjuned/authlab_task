import tw from 'twin.macro';

// Dashboard CSS
export const DashboardMain = tw.div`flex flex-wrap`;
export const DashboardContainer = tw.div`md:w-5/6 w-full h-screen bg-red-600 overflow-y-scroll`;
export const DashboardTitle = tw.h2` text-white py-2 border-l-4 pl-3 border-red-600`;










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