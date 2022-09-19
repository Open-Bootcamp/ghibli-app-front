import {
  Image, Text, Box, Flex,
  Grid, Stack, Container
} from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import useGetMovies from '../../services/useGetMovies'
import Loader from '../Common/Loader'

function Information () {
  const { id } = useParams()
  const data = useGetMovies()

  const movieList = data.filter((movie) => {
    return movie._id === id
  })

  const movieData = movieList.length !== 0 && movieList[0]

  return (
    <Container bg='#000' display='column' align='center' maxW='100%'>
      {movieList.length === 0
        ? (
          <Loader />
          )
        : (
          <Box maxW='5xl' mx='auto'>
            <Grid
              gap={{ base: 8, md: 10 }}
              gridTemplateColumns='repeat(auto-fit, minmax(290px, 1fr))'
              py={6}
            >
              <Box>
                <Image
                  maxH={{ base: '100%', sm: '450px' }}
                  src={movieData.image}
                  alt='movieImg'
                  mx='auto'
                />
              </Box>
              <Stack spacing={2} textAlign='left'>
                <Flex>
                  <Text fontWeight='bold' flex={1} color='white'>
                    Japanese
                  </Text>
                  <Text flex={1} color='white'>
                    {movieData.original_title}
                  </Text>
                </Flex>
                <Flex>
                  <Text fontWeight='bold' flex={1} color='white'>
                    Hepburn
                  </Text>
                  <Text flex={1} color='gray'>
                    {movieData.original_title_romanised}
                  </Text>
                </Flex>
                <Flex>
                  <Text fontWeight='bold' flex={1} color='white'>
                    Directed by
                  </Text>
                  <Text flex={1} color='white'>
                    {movieData.director}
                  </Text>
                </Flex>
                <Flex>
                  <Text fontWeight='bold' flex={1} color='white'>
                    Written by
                  </Text>
                  <Text flex={1} color='white'>
                    {movieData.director}
                  </Text>
                </Flex>
                <Flex>
                  <Text fontWeight='bold' flex={1} color='white'>
                    Produced by
                  </Text>
                  <Text flex={1} color='white'>
                    {movieData.producer}
                  </Text>
                </Flex>
                <Flex>
                  <Text fontWeight='bold' flex={1} color='white'>
                    Cinematography
                  </Text>
                  <Text flex={1} color='white'>
                    Hisao Shirai
                  </Text>
                </Flex>
                <Flex>
                  <Text fontWeight='bold' flex={1} color='white'>
                    Music by
                  </Text>
                  <Text flex={1} color='white'>
                    Joe Hisaishi
                  </Text>
                </Flex>
                <Flex>
                  <Text fontWeight='bold' flex={1} color='white'>
                    Release date
                  </Text>
                  <Text flex={1} color='white'>
                    {movieData.release_date}
                  </Text>
                </Flex>
                <Flex>
                  <Text fontWeight='bold' flex={1} color='white'>
                    Running time
                  </Text>
                  <Text flex={1} color='white'>
                    {movieData.running_time} minutes
                  </Text>
                </Flex>
                <Flex>
                  <Text fontWeight='bold' flex={1} color='white'>
                    Rating
                  </Text>
                  <Text display='flex' alignItems='center' gap={2} flex={1} color='white'>
                    {movieData.rt_score}
                    <FaStar color='white' />
                  </Text>
                </Flex>
              </Stack>
            </Grid>
          </Box>
          )}
    </Container>
  )
}

export default Information
