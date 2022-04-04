import styled from "styled-components"
import bob from "../../assets/img/bob.png"
import {useURL} from "../Contexts/UserContext"
export default function Header(){
    const {URL} = useURL()
    return(
        <HeaderContainer>
            <span>Trackit</span>
            <img src={URL}alt="" />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    z-index: 10;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
        width: 97px;
        height: 49px;
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
        margin-left: 10px;
    }
    img{
        width: 51px;
        height: 51px;
        margin-right: 10px;        
        border-radius: 98.5px;
    }
`