import { Box, Text, Grid, Container } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import CardMovie from './CardMovie'

function MovieContainer () {
  const [data, setData] = useState([])

  useEffect(() => {
    async function response () {
      await fetch('https://ghibliapi.herokuapp.com/films/')
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err))
    }
    response()
  }, [])

  const listaMovies = data.map((movie) => {
    return (
      <div key={movie.id}>
        <CardMovie movie={movie} />
      </div>
    )
  })

  return (
    <Box bg='#000000' w='100%'>
      <Container margin='0 auto' maxW='container.xl'>
        <Text color='white' py='30px' pl='7' fontSize='30px' fontWeight='800'>Popular Movies</Text>
        <Grid gridTemplateColumns='repeat(auto-fit, minmax(290px, 1fr))' gap='2' placeItems='center'>
          {listaMovies}
        </Grid>
      </Container>
    </Box>
  )
}

export default MovieContainer
