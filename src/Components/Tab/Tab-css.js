import tw from "twin.macro";

export const TabContainer = tw.div`flex flex-wrap`;
export const TabTitle = tw.div`py-8 text-3xl font-bold text-gray-800`;

// Tab header css
export const TabHeader = tw.div`bg-gray-300 px-5`;
export const TabUl = tw.ul`bg-gray-100 flex mb-0 list-none flex-wrap pt-3 md:pb-0 pb-4 flex-row`;
export const TabLI= tw.li`-mb-px mr-2 my-3 last:mr-0 flex-auto text-center`;
export const TabLink= tw.a`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal`;

// Tab body css
export const TabBody = tw.div` relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded`;
export const TabBodyContainer = tw.div`px-2 mx-4 py-5 flex-auto`;
// export const TabBodyContent = tw.div`bg-green-600
// `;


