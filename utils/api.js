export const fetchMeals = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      const data = await response.json()
  
      if (data.meals) {
        return data.meals.map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          description: 'Click to learn more!',
          image: meal.strMealThumb,
        }))
      } else {
        return []
      }
    } catch (error) {
      console.error('Meal API error:', error)
      return []
    }
  }

 export const fetchDrinks = async (ingredient) => {
  try {
    const cleanQuery = ingredient.trim().toLowerCase() // removes spaces, fixes casing

    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cleanQuery}`)
    const data = await response.json()

    if (data.drinks) {
      return data.drinks.map((drink) => ({
        id: drink.idDrink,
        name: drink.strDrink,
        description: 'Click to learn more!',
        image: drink.strDrinkThumb,
      }))
    } else {
      return []
    }
  } catch (error) {
    console.error('Drink API error:', error)
    return []
  }
}

  
  