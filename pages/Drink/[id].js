import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'

const OverlayWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(70%);
  z-index: -1;
`

const PageWrapper = styled.div`
  padding: 80px 20px;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  max-width: 900px;
  width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
`

const DrinkImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin: 0 auto 30px;
  display: block;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: #222;
  margin-bottom: 20px;
  text-align: center;
`

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #444;
  margin-top: 30px;
  margin-bottom: 10px;
  border-bottom: 2px solid #f4b400;
  padding-bottom: 5px;
`

const IngredientsList = styled.ul`
  list-style: none;
  padding-left: 0;
`

const IngredientItem = styled.li`
  color: #333;
  margin-bottom: 5px;
`

const Instructions = styled.p`
  color: #444;
  line-height: 1.8;
  margin-top: 10px;
`

export default function DrinkDetail() {
  const router = useRouter()
  const { id } = router.query
  const [drink, setDrink] = useState(null)

  useEffect(() => {
    if (id) {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setDrink(data.drinks ? data.drinks[0] : null)
        })
    }
  }, [id])

  if (!drink) {
    return (
      <OverlayWrapper>
        <BackgroundImage />
        <Layout>
          <PageWrapper>
            <Content>
              <p>Drink Not Found</p>
            </Content>
          </PageWrapper>
        </Layout>
      </OverlayWrapper>
    )
  }

  return (
    <OverlayWrapper>
      <BackgroundImage />
      <Layout>
        <PageWrapper>
          <Content>
            <DrinkImage src={drink.strDrinkThumb} alt={drink.strDrink} />
            <Title>{drink.strDrink}</Title>

            <SectionTitle>Ingredients</SectionTitle>
            <IngredientsList>
              {Array.from({ length: 15 }).map((_, i) => {
                const ingredient = drink[`strIngredient${i + 1}`]
                const measure = drink[`strMeasure${i + 1}`]
                return (
                  ingredient &&
                  ingredient.trim() !== '' && (
                    <IngredientItem key={i}>
                      {ingredient} - {measure}
                    </IngredientItem>
                  )
                )
              })}
            </IngredientsList>

            <SectionTitle>Instructions</SectionTitle>
            <Instructions>{drink.strInstructions}</Instructions>
          </Content>
        </PageWrapper>
      </Layout>
    </OverlayWrapper>
  )
}
