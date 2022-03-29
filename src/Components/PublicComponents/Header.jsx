import styled from "styled-components"
import bob from "../../assets/img/bob.png"
export default function Header(){
    return(
        <HeaderContainer>
            <span>Trackit</span>
            <img src={bob}alt="" />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    span{
        position: absolute;
        width: 97px;
        height: 49px;
        left: 18px;
        top: 10px;
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }
    img{
        position: absolute;
        width: 51px;
        height: 51px;
        left: 306px;
        top: 9px;

        border-radius: 98.5px;
    }
`