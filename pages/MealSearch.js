import { useState } from 'react'
import Navbar from '../components/NavigationBar'
import Footer from '../components/Footer'
import RecipeCard from '../components/Recipe'

export default function MealSearch() {
  const [query, setQuery] = useState('')
  const [recipes, setRecipes] = useState([])

  const handleSearch = () => {
    setRecipes([
      { id: 1, name: 'Pasta', description: 'Delicious pasta.', image: '/placeholder.jpg' },
      { id: 2, name: 'Salad', description: 'Healthy and green.', image: '/placeholder.jpg' }
    ])
  }

  return (
    <>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h1>Search Meals</h1>
        <input
          type="text"
          placeholder="Enter meal..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: '10px', marginRight: '10px', width: '300px' }}
        />
        <button onClick={handleSearch}>Search</button>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '30px'
        }}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
