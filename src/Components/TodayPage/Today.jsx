import * as dayjs from 'dayjs'
import styled from "styled-components"
import { useEffect } from 'react'
import axios from "axios"
import { useToken } from '../Contexts/UserContext'

import Header from "../PublicComponents/Header"
import Footer from "../PublicComponents/Footer"



export default function Today(){
    //const now = dayjs()
    const {token} = useToken()
    useEffect( () =>{
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const Url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const promise = axios.get(Url,config)
        promise.then(response => {
            console.log(response)
        })
        promise.catch(error => {
            console.log(error)
        })
    },[])
    return (
        <PageContainer>
            <Header />
            <PageContainer>
                <h2>{dayjs().locale('pt-br').format('dddd, DD/MM')}</h2>
                <span>Buenas noitches</span>
            </PageContainer>
            <Footer />
        </PageContainer>
    )
}
const PageContainer = styled.div`
    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        /* identical to box height */


        color: #126BA5;
    }
`