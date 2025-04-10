import { useState } from 'react'
import Layout from '../components/Layout'
import RecipeCard from '../components/Recipe'
import { fetchMeals } from '../utils/api'
import styled from 'styled-components'
import { motion } from 'framer-motion'


//Wraps the stuff under navbar
const Rapper = styled.div`
  padding: 60px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
//Puts the search bar and button in thew middle of the page
const SearchRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`
//Makes the recipes appear 3 in a row
const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
`
//Makes the users input into the search bar styled
const Input = styled.input`
  padding: 10px;
  width: 250px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`
//Styles the search button and gives it its hover effect
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
  const [query, setQuery] = useState('')
  const [recipes, setRecipes] = useState([])

  //calls api usinging the search term the user put in
  const handleSearch = async () => {
    const results = await fetchMeals(query)
    setRecipes(results)
  }

  return (
    //styling for the background
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
    }}>
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
        <Rapper>
          <h1 style={{ textAlign: 'center', color: 'white', textShadow: '0 0 5px black' }}>
            Search Meals
          </h1>

          <SearchRow>
            <Input
              type="text"
              placeholder="Enter ingredient"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
          </SearchRow>

          <RecipeGrid>
            {recipes.map((recipe, index) => (
              <motion.div
              //the animation to make the recipes fade in as you scroll
              //edit: the recipes wernt loading in right away so i had to make the first 3 appear right away 
              //will have to work on making it so more appear on the screen
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
        </Rapper>
      </Layout>
    </div>
  )
}
