import { useState } from 'react'
import Layout from '../components/Layout'
import RecipeCard from '../components/Recipe'
import { fetchMeals } from '../utils/api'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// 💠 Styled Components
const PageWrapper = styled.div`
  padding: 60px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SearchRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
`

const Input = styled.input`
  padding: 10px;
  width: 250px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #f4b400;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e09e00;
  }
`

export default function MealSearch() {
  const [ingredient, setIngredient] = useState('')
  const [mealResults, setMealResults] = useState([])
  const [noResultsMessage, setNoResultsMessage] = useState('')

  const handleSearch = async () => {
    const results = await fetchMeals(ingredient)
    setMealResults(results)

    if (results.length === 0) {
      setNoResultsMessage(`No results found for "${ingredient}"`)
    } else {
      setNoResultsMessage('')
    }
  }

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
    }}>
      {/* 🌅 Background image */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(70%)',
        zIndex: -1,
      }} />

      <Layout>
        <PageWrapper>
          <h1 style={{ textAlign: 'center', color: 'white', textShadow: '0 0 5px black' }}>
            Search Meals
          </h1>

          <SearchRow>
            <Input
              type="text"
              placeholder="Enter ingredient"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <Button onClick={handleSearch}>Search</Button>
          </SearchRow>



          {/*Show message if no results */}
          {noResultsMessage && (
            <p style={{ color: 'white', marginBottom: '10px' }}>{noResultsMessage}</p>
          )}

          {/*Fading recipe cards */}
          <RecipeGrid>
            {mealResults.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={index < 3 ? { opacity: 1, y: 0 } : undefined}
                whileInView={index >= 3 ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <RecipeCard recipe={recipe} type="Meal" />
              </motion.div>
            ))}
          </RecipeGrid>
        </PageWrapper>
      </Layout>
    </div>
  )
}
