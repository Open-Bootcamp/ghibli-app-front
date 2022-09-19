/* eslint-disable import/no-absolute-path */
import {
  Box, Flex, Grid, GridItem, Hide,
  HStack, Image, Link, Show, Stack, Text
} from '@chakra-ui/react'
import { BsInstagram, BsTwitch, BsTwitter } from 'react-icons/bs'
import OpenBootcamp from '/OB_Logotipo.png'
import OB from '/OB_Isotipo.png'

function Footer () {
  return (
    <Stack
      py={8}
      px={{ base: 6, md: 16, lg: 20 }}
      bg='#000'
      spacing={{ base: 10 }}
    >
      <Box borderTop='1px solid' />
      <HStack
        align='center'
        justify={{ base: 'space-around', md: 'space-between' }}
        gap={{ base: 2, md: 8 }}
      >
        <Show below='md'>
          <Image
            w={{ base: '4rem', sm: '7rem' }}
            objectFit='cover'
            src={OB}
            alt='OpenBootcamp'
          />
        </Show>
        <Hide below='md'>
          <Image
            w={{ md: '30vw', lg: '25rem' }}
            objectFit='cover'
            src={OpenBootcamp}
            alt='OpenBootcamp'
          />
        </Hide>
        <HStack color='white' align='flex-start' spacing={{ base: 2, sm: '3vw' }}>
          <Grid
            fontSize={{ base: '.75rem', sm: '1.75vh', md: '2vh' }}
            gap={{ base: '1%', md: 0 }}
          >
            <GridItem pb={2} fontWeight={700}>
              CEOS
            </GridItem>
            <GridItem fontWeight={500} color='#ffffffa3'>
              Fabio [OB]
            </GridItem>
            <GridItem fontWeight={500} color='#ffffffa3'>
              Andres Huerta
            </GridItem>
          </Grid>
          <Grid
            fontSize={{ base: '.75rem', sm: '1.75vh', md: '2vh' }}
            gap={{ base: '1%', md: 0 }}
          >
            <GridItem pb={2} fontWeight={700}>
              Design
            </GridItem>
            <GridItem fontWeight={500} color='#ffffffa3'>
              Carol B.
            </GridItem>
            <GridItem fontWeight={500} color='#ffffffa3'>
              Laura Quintar
            </GridItem>
            <GridItem fontWeight={500} color='#ffffffa3'>
              ! Sebastián
            </GridItem>
          </Grid>
          <Grid
            fontSize={{ base: '.75rem', sm: '1.75vh', md: '2vh' }}
            gap={{ base: '1%', md: 0 }}
          >
            <GridItem pb={2} fontWeight={700}>
              Developers
            </GridItem>
            <GridItem fontWeight={500} color='#ffffffa3'>
              HikenJos
            </GridItem>
            <GridItem pb={4} fontWeight={500} color='#ffffffa3'>
              <Link href='https://github.com/mikejbp' _hover={{ textDecoration: 'none' }}>
                mikejbp
              </Link>
            </GridItem>
            <GridItem fontWeight={500} color='#ffffffa3'>
              AleVedoya
            </GridItem>
            <GridItem fontWeight={500} color='#ffffffa3'>
              JonatanHN
            </GridItem>
          </Grid>
        </HStack>
      </HStack>
      <Flex justify='space-between' color='#ffffffa3'>
        <Flex gap={4} align='center'>
          <Link
            href='https://www.instagram.com/openbootcamp_/'
            _hover={{ color: 'white' }}
          >
            <BsInstagram fontSize='2vh' />
          </Link>
          <Link
            href='https://twitter.com/Open_Bootcamp'
            _hover={{ color: 'white' }}
          >
            <BsTwitter fontSize='2vh' />
          </Link>
          <Link
            href='https://www.twitch.tv/openbootcamp'
            _hover={{ color: 'white' }}
          >
            <BsTwitch fontSize='2vh' />
          </Link>
        </Flex>
        <Stack fontSize={{ base: '.75rem', sm: '2vh' }}>
          <Text w='full' fontWeight={600}>
            © Open WeekApps - 2022
          </Text>
        </Stack>
      </Flex>
    </Stack>
  )
}

export default Footer
