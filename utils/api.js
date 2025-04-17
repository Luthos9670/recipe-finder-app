// this gets meals based on what ingredient the user types
export const fetchMeals = async (ingredient) => {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient.trim()}`)
    const { meals } = await res.json()

    if (!meals) return [] // no results

    return meals.map((meal) => ({
      id: meal.idMeal,
      name: meal.strMeal,
      image: meal.strMealThumb,
      description: 'View full recipe', // static desc for now
    }))
  } catch (err) {
    console.error('Failed to fetch meals:', err.message)
    return []
  }
}

// same thing but for drinks
export const fetchDrinks = async (ingredient) => {
  try {
    const query = ingredient.trim().toLowerCase()
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`)
    const { drinks } = await res.json()

    if (!Array.isArray(drinks)) return [] // make sure it’s valid

    return drinks.map((drink) => ({
      id: drink.idDrink,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      description: 'See how to make it',
    }))
  } catch (err) {
    console.error('Failed to fetch drinks:', err.message)
    return []
  }
}
