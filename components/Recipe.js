import styled from 'styled-components'
import Link from 'next/link'

// the whole card box
const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`

// recipe image
const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

// holds the text stuff
const Info = styled.div`
  padding: 12px 16px;
`

const Title = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 6px;
  color: #222;
`

const Desc = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`

export default function RecipeCard({ recipe, type }) {
  const { id, name, description, image } = recipe

  return (
    // link sends you to the detail page for that meal or drink based on the id
    <Link href={`/${type}/${id}`} passHref legacyBehavior>
      <a style={{ textDecoration: 'none' }}>
        <Card>
          {/* show image or fallback if image missing */}
          <Img src={image || '/placeholder.jpg'} alt={name} />
          <Info>
            <Title>{name}</Title>
            {/* just shows a default msg if no description is passed */}
            <Desc>{description || 'No description available.'}</Desc>
          </Info>
        </Card>
      </a>
    </Link>
  )
}
