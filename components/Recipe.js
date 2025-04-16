import styled from 'styled-components'
import Link from 'next/link'

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-4px);
  }
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const Content = styled.div`
  padding: 16px;
`

const Title = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 8px;
`

const Description = styled.p`
  font-size: 0.95rem;
  color: #777;
  margin: 0;
`

export default function RecipeCard({ recipe, type }) {
  const { id, name, description, image } = recipe

  return (
    <Link href={`/${type}/${id}`} style={{ textDecoration: 'none' }}>
      <Card>
        <Image src={image} alt={name} />
        <Content>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </Content>
      </Card>
    </Link>
  )
}
