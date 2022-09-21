import {
  Image, Text, Box, Flex,
  Grid, Container, HStack, Divider
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
              gridTemplateColumns='repeat(auto-fit, minmax(300px, 1fr))'
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
              <HStack spacing={6} justify={{ base: 'center', md: 'flex-start' }}>
                <Flex direction='column' align='flex-start' gap={{ base: 2, sm: 4, md: 4 }}>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    fontWeight='bold' color='white'
                  >Japanese
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    fontWeight='bold' color='white'
                  >Hepburn
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    fontWeight='bold' color='white'
                  >Directed by
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    fontWeight='bold' color='white'
                  >Written by
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    fontWeight='bold' color='white'
                  >Produced by
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    fontWeight='bold' color='white'
                  >Cinematography
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    fontWeight='bold' color='white'
                  >Music by
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    fontWeight='bold' color='white'
                  >Release date
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    fontWeight='bold' color='white'
                  >Running time
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    fontWeight='bold' color='white'
                  >Rating
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    fontWeight='bold' color='white'
                  >Country
                  </Text>
                </Flex>
                <Divider orientation='vertical' />
                <Flex direction='column' align='flex-start' gap={{ base: 2, sm: 4, md: 4 }}>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    color='white'
                  >{movieData.original_title}
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    color='gray'
                  >{movieData.original_title_romanised}
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    color='white'
                  >{movieData.director}
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    color='white'
                  >{movieData.director}
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.855rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    color='white'
                  >{movieData.producer}
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.855rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    color='white'
                  >{movieData.cinematography}
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.855rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    color='white'
                  >{movieData.music_by}
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    color='white'
                  >{movieData.release_date}
                  </Text>
                  <Text
                    fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }}
                    color='white'
                  >{movieData.running_time} minutes
                  </Text>
                  <Flex alignItems='center'>
                    <Text fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }} display='flex' alignItems='center' gap={2} color='white'>
                      {movieData.rt_score}
                      <FaStar color='white' />
                    </Text>
                  </Flex>
                  <Text fontSize={{ base: 'clamp(.85rem, 2vw, 1rem)', sm: 'clamp(.9rem, 3vw, 1rem)' }} color='white'>Japan</Text>
                </Flex>
              </HStack>
            </Grid>
          </Box>
          )}
    </Container>
  )
}

export default Information
