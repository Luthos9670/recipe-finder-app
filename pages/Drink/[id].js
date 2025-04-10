import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'

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
      <Layout>
        <p>Drink Not found</p>
      </Layout>
    )
  }
  return (
    <Layout>
      <div style={{ padding: '30px', textAlign: 'center' }}>
        <h1>{drink.strDrink}</h1>
        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          style={{ maxWidth: '400px', borderRadius: '10px', margin: '20px auto' }}
        />

        <h3>Ingredients:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {Array.from({ length: 15 }).map((_, i) => {
            const ingredient = drink[`strIngredient${i + 1}`]
            const measure = drink[`strMeasure${i + 1}`]
            return (
              ingredient &&
              ingredient.trim() !== '' && (
                <li key={i}>
                  {ingredient} - {measure}
                </li>
              )
            )
          })}
        </ul>

        <h3>Instructions:</h3>
        <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          {drink.strInstructions}
        </p>
      </div>
    </Layout>
  )
}
