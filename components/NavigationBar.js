import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: 'rgba(248, 42, 214, 0.8)',
      backdropFilter: 'blur(10px)',
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
