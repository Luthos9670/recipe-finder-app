import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <NavigationBar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
