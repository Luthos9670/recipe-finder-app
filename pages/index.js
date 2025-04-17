import Layout from '../components/Layout'
import styled from 'styled-components'

// background image for the home page
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(65%); // makes it not too bright
  z-index: -1;
`

const Wrapper = styled.div`
  position: relative;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0;
  color: white;
`

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <Background /> {/* background sits behind everything */}
        <Content>
          <Title>Dish-covery</Title> {/* app name */}
          <Subtitle>Find the perfect meal or cocktail for you</Subtitle> {/* tagline kinda thing */}
        </Content>
      </Wrapper>
    </Layout>
  )
}
