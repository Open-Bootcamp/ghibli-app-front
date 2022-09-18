import { Image, Text, Box, Flex, Grid, Stack, Container } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Information () {
  const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    async function response () {
      await fetch('https://ghibliapi.herokuapp.com/films/')
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err))
    }
    response()
  }, [])

  const movieList = data.filter((movie) => {
    return (
      movie.id === id
    )
  })

  const movieData = movieList.length !== 0 && movieList[0]

  return (
    <Container bg='#000' display='column' justify='flex-start' maxW='100%'>
      <Box mx={{ base: 4, md: 14 }}>
        <Grid
          maxW='800px'
          gap={{ base: 8, md: 2 }}
          gridTemplateColumns='repeat(auto-fit, minmax(290px, 1fr))'
          py={6}
        >
          <Box>
            <Image h='450px' src={movieData.image} alt='movieImg' />
          </Box>
          <Stack spacing={2}>
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
              <Text flex={1} color='white'>
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
                Starring
              </Text>
              <Flex flex={1} direction='column'>
                <Text color='white'>Chika Sakamoto</Text>
                <Text color='white'>Noriko Hidaka</Text>
                <Text color='white'>Hitoshi Takagi</Text>
              </Flex>
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
                Edited by
              </Text>
              <Text flex={1} color='white'>
                Takeshi Seyama
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
                Distributed by
              </Text>
              <Text flex={1} color='white'>
                Toho
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
                {movieData.running_time}
              </Text>
            </Flex>
            <Flex>
              <Text fontWeight='bold' flex={1} color='white'>
                Country
              </Text>
              <Text flex={1} color='white'>
                Japan
              </Text>
            </Flex>
            <Flex>
              <Text fontWeight='bold' flex={1} color='white'>
                Language
              </Text>
              <Text flex={1} color='white'>
                Japanese
              </Text>
            </Flex>
          </Stack>
        </Grid>
      </Box>
    </Container>
  )
}

export default Information
