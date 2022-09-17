import { Image, Text, Box, Flex, Grid, Stack } from '@chakra-ui/react'
import React from 'react'

function Information () {
  const imgMovie =
    'https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg'

  return (
    <Box mx={{ base: 4, md: 14 }}>
      <Grid
        maxW='800px'
        gap={{ base: 8, md: 2 }}
        gridTemplateColumns='repeat(auto-fit, minmax(290px, 1fr))'
        py={6}
      >
        <Box>
          <Image h='450px' src={imgMovie} alt='movieImg' />
        </Box>
        <Stack spacing={2}>
          <Flex>
            <Text fontWeight='bold' flex={1} color='white'>
              Japanese
            </Text>
            <Text flex={1} color='white'>
              となりのトトロ
            </Text>
          </Flex>
          <Flex>
            <Text fontWeight='bold' flex={1} color='white'>
              Hepburn
            </Text>
            <Text flex={1} color='white'>
              Tonari no Totoro
            </Text>
          </Flex>
          <Flex>
            <Text fontWeight='bold' flex={1} color='white'>
              Directed by
            </Text>
            <Text flex={1} color='white'>
              Hayao Miyazaki
            </Text>
          </Flex>
          <Flex>
            <Text fontWeight='bold' flex={1} color='white'>
              Written by
            </Text>
            <Text flex={1} color='white'>
              Hayao Miyazaki
            </Text>
          </Flex>
          <Flex>
            <Text fontWeight='bold' flex={1} color='white'>
              Produced by
            </Text>
            <Text flex={1} color='white'>
              Toru Hara
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
              April 16, 1988
            </Text>
          </Flex>
          <Flex>
            <Text fontWeight='bold' flex={1} color='white'>
              Running time
            </Text>
            <Text flex={1} color='white'>
              86 minutes
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
  )
}

export default Information
