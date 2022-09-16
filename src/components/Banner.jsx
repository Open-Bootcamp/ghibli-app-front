import {
  Stack,
  Flex,
  Text,
  useBreakpointValue,
  Box
} from '@chakra-ui/react'

import { AiFillStar } from 'react-icons/ai'

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
        justify='flex-start'
        align='center'
        px={useBreakpointValue({ base: 6, md: 14 })}
        bgGradient='linear(to-r, blackAlpha.900, transparent)'
      >
        <Stack maxW='2xl' align='flex-start' spacing={12}>
          <Text
            color='white'
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '4xl', md: '6.5rem' })}
            pb={4}
          >
            My Neighbor Totoro
          </Text>
          <Stack direction='row' align='center' gap={6}>
            <Box display='flex' alignItems='center' gap={2}>
              <AiFillStar color='yellow' />
              <Text fontSize='2vh' as='b' color='white'>
                9.3
              </Text>
            </Box>
            <Box>
              <Text fontSize='2vh' as='b' color='white'>
                1h 43m | Producer - Hayao Miyazaki
              </Text>
            </Box>
          </Stack>
          <Box>
            <Text color='white' fontSize='2vh' as='b'>
              Two sisters move to the country with their father in order to be
              closer to their hospitalized mother, and discover the surrounding
              trees are by Totoros, magical spirits of the forest. When the
              youngest runs away from home, the older sister seeks help from
              home, the older sister seeks help from the spirits to find her.
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Flex>
  )
}

export default Banner
