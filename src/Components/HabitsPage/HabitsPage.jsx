import { useState, useEffect} from "react";
import * as icons from "react-icons/all";
import styled from "styled-components"
import axios from "axios"

import { useToken } from "../Contexts/UserContext";

import NewHabits from "./NewHabits";
import Header from '../PublicComponents/Header'
import Footer from '../PublicComponents/Footer'

export default function HabitsPage() {
  const [habits, setHabits] = useState([])
  const [newHabit,setNewHabit] = useState(false)
  const week = ["D", "S", "T", "Q", "Q", "S", "S"]
  const { token } = useToken()
  const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
  console.log(habits)

  function isSelected(habit, index) {
    const {days} = habit
    const selected = days.filter(day => day == index+1)
    if(selected.length > 0) {
      return false
    } else{
      return true
    }
  }
  function getHabits() {
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
    const promise = axios.get(URL, config)
    promise.then(response => {
      setHabits(response.data)
    })
    promise.catch(error => {
      console.log(error)
    })
  }
  
  useEffect(() => {
    getHabits()
  },[])
  
  return (
    <PageContainer>
      <Header />
      <div className='myHabits'>
        <h2>Meus hábitos</h2>
        <span onClick={()  => setNewHabit(true)}>
          <icons.AiFillPlusSquare className='svg-plus' />
        </span>
      </div>
      {newHabit ? <NewHabits setNewHabit={setNewHabit} getHabits={getHabits}/> : 
        <Content>
          {
            habits.length === 0 ? 
              <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span> 
            :
              habits.map(habit => 
                <Habit>
                  <span>{habit.name}</span>
                  <div className="days">
                    {week.map((day, index) => <Button 
                      key={index} 
                      background={ !isSelected(habit,index) ? "#CFCFCF" : "white"}
                      fontcolor={isSelected(habit, index)? "#CFCFCF" : "white"}
                      >{day}</Button>)}
                  </div>
                  <icons.BsTrash className="trash"/>
                </Habit>)
          }    
        </Content>
      }
      <Footer/>
    </PageContainer>
    
  );
}
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:#F2F2F2;
  height: 100vh;
  
  .myHabits{
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 30px 0;
  }
  h2{
    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    /* identical to box height */
    color: #126BA5;
  }
  .svg-plus{
    width: 40px;
    height: 35px;
    color: #53B6FF;
    border-radius: 5px;
  }
  
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  box-sizing: border-box;

  span{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    width: 325px;
    color: #666666;
  }
`
const Habit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  height: 90px;
  background-color: white;
  position: relative;
  span{
      width: 300px;
      box-sizing: border-box;
      border-radius: 5px;
      margin-top: 10px;
  }
  .days{
    position: absolute;
    left: 20px;
    top: 50px;
  }
  .trash{
    position: absolute;
    right: 5px;
    top: 5px;
  }
`
const Button = styled.button`
  align-items: center;
  width: 20px;
  margin-right: 5px;
  background-color: ${props => props.background};
  border: 1px solid #D5D5D5;
  box-sizing: border-box;
  border-radius: 5px;
  color: ${props => props.fontcolor};
`