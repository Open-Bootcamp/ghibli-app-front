import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  Divider
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
      <VStack
        w='full'
        justify='center'
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient='linear(to-r, blackAlpha.900, transparent)'
      >
        <Stack maxW='2xl' align='flex-start' spacing={6}>
          <Text
            color='white'
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}
          >
            My Neightbor Totoro
          </Text>
          <Stack direction='row' align='center'>
            <Box display='flex' alignItems='center' gap={6}>
              <AiFillStar color='yellow' />
              <Text fontSize='2vh' as='b' color='white'>9.3</Text>
            </Box>
            <Box>
              <Text fontSize='2vh' as='b' color='white'>1h 43m | Producer - Hayao Miyazaki</Text>
            </Box>
          </Stack>
          <Box>
            <Text color='white' fontSize='2vh' as='b'>
              Two sisters move to the country with their father in order to be
              closer to their hospitalized mother, and discover the surrounding
              trees are by Totoros, magical spirits of the forest. When the
              youngest runs away from home, the older sister seeks help from
            </Text>
          </Box>
        </Stack>
      </VStack>
    </Flex>
  )
}

export default Banner
