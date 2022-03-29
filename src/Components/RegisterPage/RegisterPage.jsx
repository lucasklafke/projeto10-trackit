import styled from "styled-components"
import trackit from "../../assets/img/trackit.png"
import { Link } from "react-router-dom";
export default function RegisterPage() {
  return (
    <PageContainer>
        <img src={`${trackit}`} alt="" />
        <form action="">
              <label htmlFor=""></label>
              <input type="text" name="" id="" placeholder="email" />
              <label htmlFor=""></label>
              <input type="text" name="" id="" placeholder="senha" />
              <label htmlFor=""></label>
              <input type="text" name="" id="" placeholder="nome" />
              <label htmlFor=""></label>
              <input type="text" name="" id="" placeholder="foto" />
              <button type="submit">Cadastrar</button>
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