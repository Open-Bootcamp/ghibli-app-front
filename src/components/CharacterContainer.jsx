import { Box, Container, Grid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import CardCharacter from './CardCharacter'

function CharactersContainer () {
  const [data, setData] = useState([])

  useEffect(() => {
    async function response () {
      await fetch('https://ghibliapi.herokuapp.com/films/')
        .then(async (res) => await res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err))
    }
    response()
  }, [])

  const listaCharacters = data.map((charact) => {
    return (
      <div key={charact.id}>
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
