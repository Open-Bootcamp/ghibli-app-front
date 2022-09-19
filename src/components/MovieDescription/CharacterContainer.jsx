import { Text, Box, Container, Grid } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useGetCharacter from '../../services/useGetCharacters'
import CardCharacter from './CardCharacter'

function CharactersContainer () {
  const { id } = useParams()
  const data = useGetCharacter(id)

  return (
    <Box bg='#000000' w='100%'>
      <Container maxW='container.xl' display='flex' justifyContent='center'>
        <Grid w='800px' gridTemplateColumns='repeat(auto-fit, minmax(190px, 1fr))' gap='12' placeItems='center'>
          {data.length === 0
            ? <Text color='white' fontSize='2xl'>Cargando....</Text>
            : data.map((character) => {
              return (
                <div key={character._id}>
                  <CardCharacter character={character} />
                </div>
              )
            })}
        </Grid>
      </Container>
    </Box>
  )
}

export default CharactersContainer
