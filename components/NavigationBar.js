import Link from 'next/link'

//function for the base navbar accross all pages
export default function Navbar() {
  return (
    <nav style={{
      //blur effect
      backdropFilter: 'blur(10px)',
      color: 'White',
      padding: '15px',
      //to put it in front of eveything on the page its on and stick to the top
      position: 'sticky',
      top: 0,
      zIndex: 10

      //The Links to the other pages and the title of the app
    }}>      
      <h2 style={{ margin: '5px' }}>Dish-covery</h2>
      <Link href="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link href="/MealSearch" style={{ marginRight: '15px' }}>Find Meals</Link>
      <Link href="/DrinkSearch">Find Drinks</Link>
    </nav>
  )
}
