import {useState, useEffect, useContext} from 'react';
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner';

import {useToken} from '../Contexts/UserContext'
import {useURL} from '../Contexts/UserContext'
import trackit from "../../assets/img/trackit.png";

//lucasnkz11@gmail.com
//123456

export default function HomePage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {token,setToken} = useToken()
    const {URL,setURL} = useURL()
    const [loading, setLoading] = useState(false);
    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        let token = 0 
        // const config ={
        //     headers: {
        //         "Authorization": `Bearer ${token}`
        //     }
        // }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const info = {
            email,
            password
        }
        const promise = axios.post(URL,info)
        promise.then(response => {
            token = response.data.token
            setToken(response.data.token)
            setURL(response.data.image)
            setTimeout(()=> navigate("/today"),2000)
        })
        promise.catch(error => {
            setTimeout(() => setLoading(false), 2000);
        })
    }


  return (
    <PageContainer>
        <img src={`${trackit}`} alt="" />
        
        <form onSubmit={handleSubmit}>
            <label htmlFor=""></label>
              <input type="text" name="email" id="email" placeholder="email" value={email} onChange={e => { setEmail(e.target.value) }}/>
            <label htmlFor=""></label>
              <input type="password" name="password" id="password" placeholder="password" value={password} onChange={e => { setPassword(e.target.value) }}/>
              {loading ? <Button disabled background="#86CCFF"><ThreeDots color='white' /></Button> : <Button type="submit" background="#53B6FF">Entrar</Button>}
        </form>
        <Link to="/register">   
            <span className="register">N??o tem uma conta? Cadastre-se!</span>
        </Link>
    </PageContainer>
  );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 25px;
        margin-top: 35px;
    }
    img {
        margin-top: 70px;
        width: 180px;
        height: 180px;
    }
    input{
        width: 300px;
        height: 45px;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        margin-bottom: 5px;
    }
    .register{
        width: 232px;
        height: 17px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;

    }
`

const Button = styled.button`
    width: 303px;
    height: 45px;
    left: 36px;
    top: 381px;
    color: white;
    background: ${props => props.background};
    border-radius: 4.63636px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend Deca';
`