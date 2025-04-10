import Link from 'next/link'
import styled from 'styled-components'

const Card = styled.div`
  width: 280px;
  margin: 10px;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  color: 'black';
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`

export default function RecipeCard({ recipe, type }) {
  const { id, name, description, image } = recipe

  return (
    <Link href={`/${type}/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card>
        <Image src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
      </Card>
    </Link>
  )
}

