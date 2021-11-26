import tw from "twin.macro";

export const AllFeatureRow = tw.div`grid grid-cols-12 gap-2 `;

export const AllFeatureCol = tw.div``;
export const FeatureAddButton = tw.button`flex flex-col items-center justify-center border border-gray-600 px-3 rounded-lg hover:bg-red-600 hover:text-gray-50`;
export const FeatureCommentButton = tw.button`flex items-center justify-evenly border border-gray-600 px-3 py-2 rounded-lg space-x-2 cursor-pointer rounded-lg hover:bg-red-600 hover:text-gray-50 hover:border-none`;

export const AllFeatureCols = tw.div`col-span-10  p-2 tracking-tighter cursor-pointer rounded-lg hover:bg-red-200 rounded-lg`;
export const Title = tw.h2`text-xl font-semibold text-gray-700 capitalize`;
export const SubTitle = tw.p`text-base font-medium text-gray-500`;
export const Status = tw.p`text-sm font-bold text-blue-400 uppercase`;

export const FeatureTopbar = tw.div`grid grid-cols-1 gap-2 bg-gray-200 px-5 my-5  rounded-lg`;
export const Topbar = tw.div`flex justify-start space-x-3 items-center px-1 my-2 text-xl font-bold text-gray-700`;
export const Select = tw.select`my-2 rounded-lg bg-gray-700 text-white px-2 focus:outline-none`;



export const SingleFeatureRow = tw.div`grid grid-cols-1 md:grid-cols-12 gap-2 bg-gray-50 p-5  rounded-lg  h-full tracking-tight`;
export const PostCol = tw.div`col-span-9`;
export const PostImgContainer = tw.div`h-72 w-full rounded-2xl `;
export const PostImg = tw.img`w-full h-full object-cover `;


export const PostTitle = tw.h1`text-2xl font-bold`;
export const PostDate = tw.h5`mt-2 text-sm text-gray-500 `;
export const PostDescription = tw.div`space-x-2 shadow p-3 rounded-lg `;
export const DescriptionContent = tw.div`flex items-center space-x-3`;

export const RecentCol = tw.div`col-span-3 space-y-2 py-5 mb-5 shadow-lg rounded-lg `;
export const RecentContainer = tw.div`sticky top-24`;
export const RecentPost = tw.h2`border-l-4 border-red-600 pl-4 mb-4 text-xl font-bold text-gray-700 `;
export const RecentPostContainer = tw.div`shadow mt-4 cursor-pointer px-3 mx-5 py-1 text-gray-700  hover:bg-red-500 rounded-lg`;
export const RecentPostTitle = tw.p`text-lg font-medium  hover:text-white`;

export const ReplyContainer = tw.div`shadow-lg rounded-lg p-5 m-3 space-y-5 w-10/12`;
export const AllReply = tw.div`flex items-start  space-x-2 shadow p-3 rounded-lg`;
export const ReplyImg = tw.img`w-16 h-16 object-cover rounded-full`;



