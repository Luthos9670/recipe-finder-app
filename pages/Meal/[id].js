
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'


export default function MealDetail() {
  //Used to get the recipe id from the website
  const router = useRouter()
  const { id } = router.query
  //stores the meal object to show image ingredients and insctructions
  const [meal, setMeal] = useState(null)

    //Used to run the page with the meal id fetch
  useEffect(() => {
    if (id) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setMeal(data.meals ? data.meals[0] : null)
        })
    }
  }, [id])
  //if there is no meal id (not really ever used just a incase)
  if (!meal) {
    return (
      <Layout>
        <p>Recipe Not Found</p>
      </Layout>
    )
  }

  return (
    //this is just a basic layout for the meal page, ill add in more stuff and make it look prettier later
    <Layout>
      <div style={{ padding: '30px', textAlign: 'center' }}>
        <h1>{meal.strMeal}</h1>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          style={{ maxWidth: '400px', borderRadius: '10px', margin: '20px auto' }}
        />

        <h3>Ingredients:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {Array.from({ length: 20 }).map((_, i) => {
            const ingredient = meal[`strIngredient${i + 1}`]
            const measure = meal[`strMeasure${i + 1}`]
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
          {meal.strInstructions}
        </p>
      </div>
    </Layout>
  )
}
