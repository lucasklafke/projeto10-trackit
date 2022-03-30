import * as dayjs from 'dayjs'
import styled from "styled-components"
import { useEffect } from 'react'
import axios from "axios"


import Header from "../PublicComponents/Header"
import Footer from "../PublicComponents/Footer"



export default function Today(){
    //const now = dayjs()
    useEffect( () =>{
        const config = {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const Url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const promise = axios.get(Url,config)
    },[])
    return (
        <PageContainer>
            <Header />
            {/* <h1>{now}</h1> */}
            <Footer />
        </PageContainer>
    )
}
const PageContainer = styled.div`

`