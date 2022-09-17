import { Box, Container, Grid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import CardCharacter from './CardCharacter'

function CharactersContainer () {
  const [data, setData] = useState([])

  useEffect(() => {
    async function response () {
      const ghibli = await fetch('https://ghibli-app-back-production.up.railway.app/films/632621f97eb22fc78f6db9bf').then(async (res) => await res.json())

      const urlCharacter = await Promise.all(
        ghibli.characters.map(async (persona) => {
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
        <Grid maxW='800px' gridTemplateColumns='repeat(auto-fit, minmax(190px, 1fr))' gap='2' placeItems='center'>
          {listaCharacters}
        </Grid>

      </Container>
    </Box>
  )
}

export default CharactersContainer
