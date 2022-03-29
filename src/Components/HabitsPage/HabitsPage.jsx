import Header from '../PublicComponents/Header'
import styled from "styled-components"
import Footer from '../PublicComponents/Footer'
export default function HabitsPage() {
  return (
    <PageContainer>
      <Header />
      <div className='myHabits'>
        <span>Meus hábitos</span>
        <span>ionicon</span>
      </div>
      <Content>
        <h1>Hábitos</h1>
      </Content>
      <Footer/>
    </PageContainer>
    
  );
}
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color:#F2F2F2;
  height: 100vh;
  .myHabits{
    display: flex;
    justify-content: space-between;
  }
`
const Content = styled.div`

`