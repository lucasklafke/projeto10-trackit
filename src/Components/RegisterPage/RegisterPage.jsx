import {useState, useEffect} from 'react';
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner';
import trackit from "../../assets/img/trackit.png"
export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image,setImage] = useState('');
    const [loading, setLoading] = useState(false);
    
  const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const data = {
            email: email,
            name: name,
            image: image,
            password: password
        }
        const promise = axios.post(URL,data)
        promise.then(response => {
          console.log(response.response)
          setTimeout(() => navigate("/"), 2000);
        })
        promise.catch(error => {
            console.log(error.response.data)
            setTimeout(() => setLoading(false), 2000);
        })
    }


  return (
    <PageContainer>
        <img src={`${trackit}`} alt="" />
          <form onSubmit={handleSubmit}>
              <label htmlFor="email"></label>
                <input type="text" name="email" id="email" placeholder="email"  value={email} onChange={e => {setEmail(e.target.value)}} />
              <label htmlFor="password"></label>
                <input type="password" name="password" id="" placeholder="password" value={password} onChange={e => { setPassword(e.target.value) }}/>
              <label htmlFor="name"></label>
                <input type="text" name="name" id="name" placeholder="name" value={name} onChange={e => { setName(e.target.value) }}/>
              <label htmlFor="image"></label>
                <input type="text" name="image" id="image" placeholder="image" value={image} onChange={e => { setImage(e.target.value) }}/>
                {loading ? <button disabled> <ThreeDots color="#fff" /></button> : <button type="submit">Register</button>}
        </form>
        <Link to="/">
            <span className="registered">Já tem uma conta? Faça login!</span>
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
    button{
        width: 303px;
        height: 45px;
        left: 36px;
        top: 381px;
        color: white;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .registered{
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