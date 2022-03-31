import styled from "styled-components"
import { useState } from "react"
import { useToken } from "../Contexts/UserContext"
import axios from "axios"

import Header from '../PublicComponents/Header'
import Footer from '../PublicComponents/Footer'

export default function NewHabit(props){
    const [habit, setHabit] = useState([])
    const [days,setDays] = useState([])
    const {token} = useToken()
    function clearForm(){
        setHabit([])
        setDays([])
    }
    function handleSubmit(){
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const obj = {
            name:habit,
            days:days
        }
        console.log(obj)
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const promise = axios.post(url,obj,config)
        promise.then(response => {
            alert("Hábito cadastrado com sucesso!")

            clearForm()
            props.setNewHabit(false)
            props.getHabits()
        })
        promise.catch(error => {
            console.log(error.response)
            alert('Erro ao cadastrar hábito')
            clearForm()
            props.setNewHabit(false)
        })
    }
    return(
        <PageContainer>
            <Content>
                <input type="text" value={habit} onChange={e => setHabit(e.target.value)} />
                <div className="days">
                    <button onClick={() => setDays(days.concat(1) )}>D</button>
                    <button onClick={() => setDays(days.concat(2))}>S</button>
                    <button onClick={() => setDays(days.concat(3))}>T</button>
                    <button onClick={() => setDays(days.concat(4))}>Q</button>
                    <button onClick={() => setDays(days.concat(5))}>Q</button>
                    <button onClick={() => setDays(days.concat(6))}>S</button>
                    <button onClick={() => setDays(days.concat(7))}>S</button>
                </div>
                <div className="continue">
                    <button>Cancel</button>
                    <button onClick={handleSubmit}>Save</button>
                </div>
            </Content>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
const Content = styled.div`
    width: 350px;
    height: 180px;
    background-color: white;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    input{
        width: 300px;
        height: 45px;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        margin-top: 20px;
    }
    .days{
        position: absolute;
        left: 25px;
        top: 75px;

        button{
            margin-right: 5px;
        }
    }
    .continue{
        position: absolute;
        bottom: 15px;
        right: 15px;

        button{
            width: 84px;
            height: 35px;
            left: 257px;
            top: 277px;
            color: white;
            background: #52B6FF;
            border-radius: 4.63636px;
            border: none;
            margin-left: 20px;
        }

    }
`