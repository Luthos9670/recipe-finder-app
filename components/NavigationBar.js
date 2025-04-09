import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      color: 'black',
      
      WebkitBackdropFilter: 'blur(10px)',
      padding: '15px',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <h2 style={{ margin: '0 0 10px 0' }}>Recipe Finder</h2>
      <Link href="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link href="/MealSearch" style={{ marginRight: '15px' }}>Find Meals</Link>
      <Link href="/DrinkSearch">Find Drinks</Link>
    </nav>
  )
}
