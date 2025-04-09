export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'rgba(212, 212, 212, 0.05)',
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
