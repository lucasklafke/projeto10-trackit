import styled from "styled-components"
import {useState} from "react"
export default function Button(props){
  const [background, setBackground] = useState("white")
  const [color, setColor] = useState("gray")
  const { setDays, days ,index} = props
  function setSelected(){
    setBackground("#CFCFCF;")
    setColor("white")
    setDays(days.concat(index))
  }
  function setUnselected(){
    setBackground("white")
    setColor("gray")
    setDays(days.filter(() => index))
  }
  function handleClick(){
    background == "white" ? 
    setSelected()
    :
    setUnselected()
  }
  return (
    <Buttons onClick={handleClick} background={background} color={color}>{props.day}</Buttons>
  )
}


const Buttons = styled.button`
  align-items: center;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  background-color: ${props => props.background};
  border: 1px solid #D5D5D5;
  box-sizing: border-box;
  border-radius: 5px;
  color: ${props => props.fontcolor};
`