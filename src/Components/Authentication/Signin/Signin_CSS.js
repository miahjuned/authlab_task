import tw from "twin.macro";

export const SigninContainer = tw.div`grid md:grid-cols-2 grid-cols-1 gap-2 px-8 py-8 bg-white `;
// export const SigninContainer = tw.div`container mx-auto px-8 py-8 lg:py-24 relative flex flex-col lg:flex-row items-center`;

export const SigninForm = tw.div`shadow-xl p-10 rounded-2xl`;
export const SigninUserRole = tw.div`flex justify-start text-base space-x-5 mt-5`;
export const SigninUserRoleSelect = tw.div`space-x-2 flex items-center justify-start`;

export const SigninFooter = tw.div`grid grid-cols-1 gap-2 text-gray-700 text-lg font-bold tracking-tighter`;
export const SigninCreateAccount = tw.div`flex justify-around py-5`;

export const SigninSocialBtn = tw.button`py-2 px-5 flex justify-between items-center border border-red-600 rounded-full hover:bg-red-500  hover:text-gray-100 text-red-600 text-lg font-bold tracking-tighter`;
