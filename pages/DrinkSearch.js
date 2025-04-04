import { useState } from 'react'
import Navbar from '../components/NavigationBar'
import Footer from '../components/Footer'
import RecipeCard from '../components/Recipe'

export default function DrinkSearch() {
  const [query, setQuery] = useState('')
  const [drinks, setDrinks] = useState([])

  const handleSearch = () => {
    setDrinks([
      { id: 1, name: 'Mojito', description: 'Minty cocktail.', image: '/placeholder.jpg' },
      { id: 2, name: 'Pina Colada', description: 'Tropical drink.', image: '/placeholder.jpg' }
    ])
  }

  return (
    <>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h1>Search Drinks</h1>
        <input
          type="text"
          placeholder="Enter drink..."
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
          {drinks.map((drink) => (
            <RecipeCard key={drink.id} recipe={drink} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
