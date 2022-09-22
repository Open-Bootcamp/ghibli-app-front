import { Box, Flex, Show, Stack, Text } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'
import Carousel from './Carousel'

function Banner () {
  const imgBanner =
    'https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg'

  return (
    <Flex
      w='full'
      h='100vh'
      backgroundImage={imgBanner}
      backgroundSize='cover'
      backgroundPosition='center center'
    >
      <Flex
        w='full'
        justify={{ base: 'center', lg: 'space-between' }}
        gap={8}
        align='center'
        px={{ base: 6, md: 20 }}
        bgGradient='linear(to-t, blackAlpha.900, transparent)'
      >
        <Stack maxW={{ lg: '2xl' }} align='flex-start' spacing={{ base: 5, md: 12 }}>
          <Text
            color='white'
            fontWeight={700}
            lineHeight={1.2}
            fontSize={{ base: '6xl', md: '5rem' }}
            pb={4}
          >
            My Neighbor Totoro
          </Text>
          <Stack direction='row' align='center' gap={6}>
            <Box display='flex' alignItems='center' gap={2}>
              <AiFillStar color='yellow' />
              <Text
                fontSize={{ base: '1.5rem', md: '1.75rem' }}
                as='b'
                color='white'
              >
                9.3
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '1.5rem', md: '1.75rem' }}
                as='b'
                color='white'
              >
                1h 43m | Producer - Hayao Miyazaki
              </Text>
            </Box>
          </Stack>
          <Box w={{ lg: '50vw' }}>
            <Text
              textAlign={{ md: 'left' }}
              color='white'
              fontSize={{
                base: 'clamp(1.25rem, 2.5vh, 1.5rem)',
                lg: 'clamp(.8rem, 2.5vh, 1.5rem)'
              }}
              as='b'
            >
              Two sisters move to the country with their father in order to be
              closer to their hospitalized mother, and discover the surrounding
              trees are by Totoros, magical spirits of the forest. When the
              youngest runs away from home, the older sister seeks help from
              home, the older sister seeks help from the spirits to find her.
            </Text>
          </Box>
        </Stack>
        <Show above='lg'>
          <Carousel />
        </Show>
      </Flex>
    </Flex>
  )
}

export default Banner
