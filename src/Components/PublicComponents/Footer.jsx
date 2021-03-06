import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import { useProgress } from "../Contexts/UserContext";

export default function Footer() {
    const {progress} = useProgress();
  return (
    <FooterContainer>
        <Link to="/habits">
            <span>Hábitos</span>
        </Link>
        <Link to="/today">
            <CircularProgressbar
                value={progress}
                text="Hoje"
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                })}
            />
        </Link>
          <Link to="/record">
            <span>Histórico</span>
          </Link>
    </FooterContainer>
    );
}

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    position: fixed;
    height: 70px;
    left: 0;
    bottom: 0;
    background: #FFFFFF;
    margin-top: 100px;
    span{
        text-decoration: none;
        text-decoration-line: none;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
    .CircularProgressbar{
        width: 91px;
        height: 91px;
        background-color: #52B6FF;
        border-radius: 50%;
        color: white;
        margin-bottom:70px;
        font-family: 'Lexend Deca';
    }
`