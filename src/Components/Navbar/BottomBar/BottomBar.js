import React from 'react';
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { FaChartBar } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { BottomBtn, BottomBtnContainer, BottomContainer } from '../../Style/Style';

const BottomBar = () => {
    return (
        <BottomContainer style={{backgroundColor:'#022335'}}>
            <BottomBtnContainer>
                <BottomBtn>
                    <AiOutlineHome size={30}></AiOutlineHome>
                </BottomBtn>
            </BottomBtnContainer>

            <BottomBtnContainer>
                <BottomBtn>
                    <AiOutlineHeart size={30}></AiOutlineHeart>
                </BottomBtn>
            </BottomBtnContainer>

            <BottomBtnContainer>
                <BottomBtn>
                    <FaChartBar size={30}></FaChartBar>
                </BottomBtn>
            </BottomBtnContainer>

            <BottomBtnContainer>
                <BottomBtn>
                    <MdShoppingCart size={30}></MdShoppingCart>
                </BottomBtn>
            </BottomBtnContainer>

        </BottomContainer> 
);
};

export default BottomBar;