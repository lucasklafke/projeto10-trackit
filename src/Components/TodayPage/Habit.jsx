import styled from "styled-components"
import { IoCheckbox } from "react-icons/io5"
import { useEffect, useState } from "react"
import axios from "axios"
import { useToken } from "../Contexts/UserContext"


export default function Habit(props){
    const { title, sequence, record, habitState, habitId,setProgress,progress,length} = props

    const [isHabitDone, setIsHabitDone] = useState(habitState)
    const [background, setBackground ] = useState("white")
    const {token} = useToken()
    useEffect( () =>{
        isHabitDone ? setBackground("#8FC549") : setBackground("#EBEBEB")
    },[])

    function calcProgress(state) {
        let habitPorcentage = 100/length
        if (state == true) {
            setProgress(progress + habitPorcentage)
        } else{
            setProgress(progress - habitPorcentage)
        }
    }

    function toggleCheckHabit(){
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const checkURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`
        const uncheckURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/uncheck`

        isHabitDone ? setIsHabitDone(false) : setIsHabitDone(true)

        const promise = isHabitDone  == false ? axios.post(checkURL,{},config) : axios.post(uncheckURL,{},config)
        promise.then(response => {
            background === "#EBEBEB" ? setBackground("#8FC549") : setBackground("#EBEBEB")
            alert(`${response.data.message}`)
            calcProgress(!isHabitDone)
        })
        promise.catch(error => {
            console.log(error.response)
        })
    }
    return (
        <HabitContainer> 
            <span>{title}</span>
            <div className='infos'>
                <span>Sequência atual: {sequence} dias</span>
                <span>Seu recorde: {record} dias</span>
            </div>
            
            <IoCheckbox className="Check" onClick={toggleCheckHabit} color={background}/>
            
        </HabitContainer>
    )
}

const HabitContainer = styled.div`
    background-color: white;
    width: 330px;
    height: 85px;
    padding-left:10px;
    padding-top: 10px;
    margin-top: 10px;
    border-radius: 5px;
    position: relative;

    span{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        /* identical to box height */
        color: #666666;
    }
    .infos{
        display: flex;
        flex-direction: column;
        span{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 12.976px;
            line-height: 16px;

            color: #666666;
        }
    }
    .IoCheckbox{
        color: #666666;
    }
    .Check{
        position: absolute;
        width: 69px;
        height: 69px;
        right: 13px;
        top: 13px;

        color: ${props => props.color};
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`