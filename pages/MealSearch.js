import { useState } from 'react'
import Layout from '../components/Layout'
import RecipeCard from '../components/Recipe'
import { fetchMeals } from '../utils/api'

export default function MealSearch() {
  const [query, setQuery] = useState('')
  const [recipes, setRecipes] = useState([])

  const handleSearch = async () => {
    const results = await fetchMeals(query)
    setRecipes(results)
  }

  return (
    <Layout>
      <h1>Search Meals</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter meal"
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {recipes.map((r) => <RecipeCard key={r.id} recipe={r} />)}
      </div>
    </Layout>
  )
}
