export default function RecipeCard({ recipe }) {
    return (
      <div style={{
        width: '280px',
        margin: '10px',
        padding: '15px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <img
          src={recipe.image}
          alt={recipe.name}
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h3 style={{ margin: '10px 0 5px' }}>{recipe.name}</h3>
        <p>{recipe.description}</p>
      </div>
    )
  }
  