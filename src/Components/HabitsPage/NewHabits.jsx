import styled from "styled-components"
import { useState } from "react"
import { useToken } from "../Contexts/UserContext"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

import Header from '../PublicComponents/Header'
import Footer from '../PublicComponents/Footer'
import Button from "./Button";

export default function NewHabit(props){
    const [habit, setHabit] = useState([])
    const [days,setDays] = useState([])
    const {token} = useToken()
    const week = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [loading, setLoading] = useState(false)

    function clearForm(){
        setHabit([])
        setDays([])
    }
    function handleSubmit(){
        setLoading(true)
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
            setTimeout(() => alert("Hábito cadastrado com sucesso!"), 3000);

            setTimeout(() => clearForm(), 3000)
            setTimeout(() => props.setNewHabit(false), 3000);
            setTimeout(() => setLoading(false), 3000);
            props.getHabits()
        })
        promise.catch(error => {
            console.log(error.response)
            setTimeout( () => alert('Erro ao cadastrar hábito'), 3000);
            setTimeout(() => setLoading(false), 3000);
            setTimeout(() => clearForm(), 3000);
            setTimeout(  () =>  clearForm(),3000)
        })
    }
    function setSelected(event,index){
        setDays(days.concat(index + 1))
    }
    return(
        <PageContainer>
            <Content>
                <input type="text" value={habit} onChange={e => setHabit(e.target.value)} />
                <div className="days">
                    {week.map((day, index) =>{
                        const background = "white"
                        const color = "gray"
                        return (
                            <Button day={day} setDays={setDays} days={days} index={index}/>
                        )
                    })}
                </div>
                <div className="continue">
                    <button>Cancel</button>
                    {loading ? <button ><ThreeDots color='white' /></button> : <button onClick={handleSubmit}>Save</button>}
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
            align-items: center;
            width: 20px;
            margin-right: 5px;
            background-color: ${ props => props.background};
            border: 1px solid #D5D5D5;
            box-sizing: border - box;
            border-radius: 5px;
            color: ${props => props.fontcolor };
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
