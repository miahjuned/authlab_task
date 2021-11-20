import tw from "twin.macro";
export const MainContainer = tw.div`bg-red-600  md:px-10 mx-auto md:px-5 mx-1 py-16`;



// *************** Navbar CSS ********************
export const NavbarMain = tw.nav`mx-auto px-5 sticky top-0 z-50`;
export const NavbarContainer = tw.nav`capitalize  flex justify-between items-center h-16 `;

export const NavbarUl = tw.ul`text-white text-center md:flex items-center hidden`;
export const NavbarLi = tw.li`flex items-center `;

export const SocialMediaUl = tw.ul`md:flex text-white text-center hidden`;
export const SocialMediaLi = tw.li`transition-all duration-500 hover:text-red-600 pr-5`;

export const NavbarLogo = tw.strong`uppercase text-gray-200 font-bold  md:font-bold md:text-xl`;

export const NavbarToggle = tw.div`px-4 cursor-pointer md:hidden`;
export const NavbarToggleContainer = tw.div`grid grid-rows-4  items-center text-white pb-10`;





// *************** Bottom CSS ********************
export const BottomContainer = tw.div`md:hidden bottom-0 left-0 right-0 fixed z-50 flex justify-center items-center w-full`;
export const BottomBtnContainer = tw.div`relative flex-1 items-center flex justify-center `;
export const BottomBtn= tw.button`w-10 h-10 hover:bg-red-600 px-1 text-white`;



