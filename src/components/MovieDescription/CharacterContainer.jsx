import { Box, Container, Grid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardCharacter from './CardCharacter'

function CharactersContainer () {
  const [data, setData] = useState([])
  const { id } = useParams()
  useEffect(() => {
    async function response () {
      const ghibli = await fetch('https://ghibli-app-back-production.up.railway.app/films').then(async (res) => await res.json())
      const [search] = ghibli.filter((movie) => movie._id === id)

      const urlCharacter = await Promise.all(
        search.characters.map(async (persona) => {
          return await fetch(persona).then(async (res) => await res.json())
        }))

      setData(urlCharacter)
    }
    response()
  }, [])

  const listaCharacters = data.map((charact) => {
    return (
      <div key={charact._id}>
        <CardCharacter charact={charact} />
      </div>
    )
  })
  return (
    <Box bg='#000000' w='100%'>
      <Container maxW='container.xl' display='flex' justifyContent='center'>
        <Grid w='800px' gridTemplateColumns='repeat(auto-fit, minmax(190px, 1fr))' gap='2' placeItems='center'>
          {listaCharacters}
        </Grid>

      </Container>
    </Box>
  )
}

export default CharactersContainer
