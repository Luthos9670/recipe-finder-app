export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'rgba(248, 42, 214, 0.8)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      padding: '15px',
      textAlign: 'center',
      color: '#000',
      zIndex: 10
    }}>
      <p>© Lucas Pinto & Paul Rubio — Powered by TheMealDB 🍽️</p>
    </footer>
  )
}
