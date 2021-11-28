import tw from 'twin.macro';

export const Modal = tw.div`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`;

export const ModalContainer = tw.div`relative w-auto my-6 mx-auto max-w-3xl`;

export const ModalContent = tw.div`border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`;

// modal header css

export const ModalHeader = tw.div`flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t`;

export const ModalHeaderTitle = tw.h3`text-3xl font-semibold`;

export const ModalHeaderClose = tw.button`p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none`;

export const ModalHeaderCloseIcon = tw.span` text-red-600  h-6 w-6 text-2xl block outline-none focus:outline-none`;

// modal body css
export const ModalBody = tw.div`relative p-6 flex-auto`;


// modal footer css
export const ModalFooter = tw.div`flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b`;

export const ModalFooterCloseBtn = tw.button`text-red-500 bg-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`;

export const ModalFooterSubmitBtn = tw.button`bg-red-600 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`;

// modal overlay
export const ModalOverlay = tw.div`opacity-25 fixed inset-0 z-40 bg-black`;

// form
export const ModalFormField = tw.div`grid grid-cols-1 md:grid-cols-4 gap-3 py-5`;

// Comment
export const CommentModalBody = tw.div`relative p-6 flex-auto h-72 overflow-scroll`;
export const ModalComment = tw.div`grid grid-cols-1 md:grid-cols-6 gap-3 py-5`;
export const ReplyDesccription = tw.p`col-span-4`;
export const TotalComment = tw.p`border-l-2 border-red-600 px-3 text-xl font-bold text-gray-600`;


