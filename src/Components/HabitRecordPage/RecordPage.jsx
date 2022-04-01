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
            console.log(response.data)
        })
        promise.catch(error => {
            console.log(error.response)
        })

    },[])
    return (
        <PageContainer>
            <Header />
            <RecordContainer>

            </RecordContainer>
            <Footer/>
        </PageContainer>
    )
}

const PageContainer = styled.div`

`
const RecordContainer = styled.div`

`