//Api page searchs through api with ingrediant user puts in and returns the information listed
export const fetchMeals = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      const data = await response.json()
  
      if (data.meals) {
        return data.meals.map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          description: 'Click For Recipe',
          image: meal.strMealThumb,
        }))
      } else {
        return []
      }
    } catch (error) {
      console.error('API Error:', error)
      return []
    }
  }

  export const fetchDrinks = async (ingredient) => {
    try {
      const cleanQuery = ingredient.trim().toLowerCase()
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cleanQuery}`)
      const data = await response.json()
  
      // ✅ Make sure it's a valid array before mapping
      if (Array.isArray(data.drinks)) {
        return data.drinks.map((drink) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          description: 'Click to learn more!',
          image: drink.strDrinkThumb,
        }))
      } else {
        // No drinks found or invalid response
        return []
      }
    } catch (error) {
      console.error('Drink API error:', error)
      return []
    }
  }
  

  
  