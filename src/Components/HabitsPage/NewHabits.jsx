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
            setTimeout( () => alert('Erro ao cadastrar hábito'), 3000);
            setTimeout(() => setLoading(false), 3000);
            setTimeout(() => clearForm(), 3000);
            setTimeout(  () =>  clearForm(),3000)
        })
    }
    function cancelNewHabit(){
        clearForm()
        props.setNewHabit(false)
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
                    <button className="cancelButton" onClick={cancelNewHabit}>Cancel</button>
                    {loading 
                        ? <SaveButton background="#86CCFF" ><ThreeDots color='white' width={30} height={30} /></SaveButton >
                        : <SaveButton onClick={handleSubmit} background="#52B6FF">Save</SaveButton >
                    }
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

       
    }
    .continue{
        position: absolute;
        bottom: 15px;
        right: 15px;
        display: flex;
    }
    .cancelButton{
        width: 84px;
        height: 35px;
        color: #52B6FF;
        border-radius: 4.63636px;
        border: none;
        background-color: white;
    }
`
const SaveButton = styled.button`
    background-color: ${ props => props.background};
    width: 84px;
    height: 35px;
    color: white;
    border-radius: 4.63636px;
    border: none;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`