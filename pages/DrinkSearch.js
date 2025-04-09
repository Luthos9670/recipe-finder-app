import { useState } from 'react'
import Layout from '../components/Layout'
import RecipeCard from '../components/Recipe'
import { fetchDrinks } from '../utils/api'

export default function DrinkSearch() {
  const [query, setQuery] = useState('')
  const [drinks, setDrinks] = useState([])

  const handleSearch = async () => {
    const results = await fetchDrinks(query)
    setDrinks(results)
  }

  return (
    <Layout>
      <h1>Search Drinks</h1>
      <input
        type="text"
        placeholder="Enter drink"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', marginRight: '10px', width: '250px' }}
      />
      <button onClick={handleSearch}>Search</button>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '40px'
      }}>
        {drinks.map((drink) => (
          <RecipeCard key={drink.id} recipe={drink} />
        ))}
      </div>
    </Layout>
  )
}
