import * as dayjs from 'dayjs'
import styled from "styled-components"
import { useEffect, useState } from 'react'
import axios from "axios"
import { useToken, useURL,useProgress,useHabits} from '../Contexts/UserContext'
import { ThreeDots } from 'react-loader-spinner'



import Header from "../PublicComponents/Header"
import Footer from "../PublicComponents/Footer"
import Habit from "./Habit"


export default function Today(){
    const{habits,setHabits} = useHabits()
    const {progress, setProgress} = useProgress()
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
            setHabits(response.data)
            const filtrados = filterProgress(response.data)
            setProgress((filtrados.length/response.data.length)*100)
        })
        promise.catch(error => {
        })
        
    },[])
    function filterProgress(habits){
        const progress = habits.filter(habit =>  {
            return habit.done === true
        })  
        return progress
    }
    return (
        <PageContainer>
            <Header />
            <Content>
                <div className='today'>
                    <h2>{dayjs().locale('pt-br').format('dddd, DD/MM')}</h2>
                    {progress > 0 ? <H4 color="#8FC549">{progress.toFixed()}% dos hábitos concluídos</H4> : <H4 color='#BABABA'>Nenhum hábito concluído ainda</H4>}
                    <div className='Habits'>
                        {habits.map(habit => 
                        <Habit title={habit.name} 
                            sequence={habit.currentSequence} 
                            record={habit.highestSequence} 
                            habitState={habit.done} 
                            habitId={habit.id} 
                            progress={progress} 
                            setProgress={setProgress} 
                            length={habits.length}
                        />)}

                    </div>
                </div>
            </Content>
            <Footer />
        </PageContainer>
    )
}
const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f2f2;
    height: 100vh;
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
const Content = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 70px 0;
    .today{
        margin: 30px 0;
    }
    
    .Habits{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const H4 = styled.h4`
    color: ${props => props.color};
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    `