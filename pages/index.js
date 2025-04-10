import Layout from '../components/Layout'
export default function Home() {
  return (
    //the main wrapper for the whole page
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      <div style={{
        //styles the background image, makes it not to bright to overpower the text  and makes it fit to any size screen
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
        //styles the main page text and aligns it in the page
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
