import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";


export default function Footer() {
    
    let percentage = 3;
  return (
    <FooterContainer>
        <Link to="/habits">
            <span>Hábitos</span>
        </Link>
          <CircularProgressbar
              value={percentage}
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
        <span>Histórico</span>
    </FooterContainer>
    );
}

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    position: absolute;
    height: 70px;
    left: 0;
    bottom: 0;
    background: #FFFFFF;

    .CircularProgressbar{
        position: absolute;
        width: 91px;
        height: 91px;
        background-color: #52B6FF;
        border-radius: 50%;
        color: white;
        top: -35px;
    }
`