import tw from "twin.macro";

export const TabContainer = tw.div`bg-gray-50 flex flex-wrap`;

// Tab header css
export const TabUl = tw.ul`flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row`;
export const TabLI= tw.li`-mb-px mr-2 last:mr-0 flex-auto text-center`;
export const TabLink= tw.a`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal`;

// Tab body css
export const TabBody = tw.div`relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded`;
export const TabBodyContainer = tw.div`px-4 py-5 flex-auto`;
// export const TabBodyContent = tw.div`bg-green-600
// `;


