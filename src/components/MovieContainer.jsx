import { Box, Text, Grid, Container, Link } from '@chakra-ui/react'
import { Link as Linked } from 'react-router-dom'
import CardMovie from './CardMovie'
import GetMovies from '../services/useGetMovies'
import Loader from './Common/Loader'

function MovieContainer () {
  const data = GetMovies()

  return (
    <Box bg='#000000' w='100%' minH='100vh'>
      <Container margin='0 auto' maxW='container.xl'>
        <Text color='white' py='30px' pl='7' fontSize='30px' fontWeight='800'>Popular Movies</Text>
        <Grid gridTemplateColumns='repeat(auto-fit, minmax(290px, 1fr))' gap='2' placeItems='center'>
          {data.length === 0
            ? <Loader />
            : (data.map((movie) => {
                return (
                  <div key={movie._id}>
                    <Link as={Linked} to={`/movie/${movie._id}`}><CardMovie movie={movie} /></Link>
                  </div>
                )
              }))}
        </Grid>
      </Container>
    </Box>
  )
}

export default MovieContainer
