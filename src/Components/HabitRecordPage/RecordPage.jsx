import styled from "styled-components"
import { useEffect } from "react"
import axios from "axios"
import {useToken} from "../Contexts/UserContext"

import Header from '../PublicComponents/Header'
import Footer from '../PublicComponents/Footer'

export default function RecordPage(){
    const {token} = useToken()
    useEffect(() =>{
        const config ={
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily"
        const promise = axios.get(url,config)
        promise.then(response => {
        })
        promise.catch(error => {
        })

    },[])
    return (
        <PageContainer>
            <Header />
            <RecordContainer>
                <h2>Histórico</h2>
                <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
            </RecordContainer>
            <Footer/>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    background-color:#F2F2F2;
    height:100vh;
`
const RecordContainer = styled.div`
    h2{
        position: absolute;
width: 100px;
height: 29px;
left: 17px;
top: 98px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
/* identical to box height */


color: #126BA5;
    }
    span{
        position: absolute;
width: 338px;
height: 74px;
left: 15px;
top: 144px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;
    }
`