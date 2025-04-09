import Navbar from '../components/NavigationBar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
        filter: 'brightness(65%)'
      }} />

      <Navbar />

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0px',
        textAlign: 'center',
        color: 'white'

      }}>
        <h1 style={{ fontSize: '7rem', marginBottom: '20px' }}>Dish-covery</h1>
        <p style={{ fontSize: '2rem' }}>Find the perfect meal or cocktail for you</p>
      </div>

      <Footer />
    </div>
  )
}
