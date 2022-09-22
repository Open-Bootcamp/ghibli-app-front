/* eslint-disable import/no-absolute-path */
import {
  Box, Flex, Grid, GridItem, Hide,
  HStack, Image, Link, Show, Stack, Text, VStack
} from '@chakra-ui/react'
import { BsInstagram, BsTwitch, BsTwitter } from 'react-icons/bs'
import OpenBootcamp from '/OB_Logotipo.png'
import OB from '/OB_Isotipo.png'

function Footer () {
  return (
    <VStack
      w='100%'
      placeItems='center'
      py={8}
      px={{ base: 6, md: 16, lg: 20 }}
      bg='#000'
      spacing={{ base: 10 }}
      fontFamily='Inter, sans-serif'
    >
      <Stack display='flex' directon='flex-wrap' w={{ sm: '85vw', md: '100%', xl: '6xl' }}>
        <Box borderTop='1px solid #ffffffa3' mb={6} />
        <HStack
          justify={{ base: 'space-around', md: 'space-between' }}
          gap={{ base: 2, md: 8 }}
        >
          <Show below='md'>
            <Image
              w={{ base: '0', sm: '7rem' }}
              objectFit='cover'
              src={OB}
              alt='OpenBootcamp'
            />
          </Show>
          <Hide below='md'>
            <Image
              w={{ md: '30vw', lg: '20rem' }}
              objectFit='cover'
              src={OpenBootcamp}
              alt='OpenBootcamp'
            />
          </Hide>
          <HStack color='white' align='flex-start' spacing={{ base: 9, sm: '3vw' }}>
            <Grid
              fontSize={{ base: '.75rem', sm: '1.75vh', md: '1.1rem' }}
              gap={{ base: '1%', md: 0 }}
            >
              <GridItem pb={2} fontWeight={700}>
                Leaders
              </GridItem>
              <GridItem fontWeight={300} color='#ffffffa3'>
                <Link
                  href='https://github.com/fabioalcocer'
                  target='_blank'
                  rel='noreferrer'
                  _hover={{ textDecoration: 'none' }}
                >
                  Fabio [OB]
                </Link>
              </GridItem>
              <GridItem fontWeight={300} color='#ffffffa3'>
                <Link
                  href='https://github.com/Andres2310'
                  target='_blank'
                  rel='noreferrer'
                  _hover={{ textDecoration: 'none' }}
                >
                  Andres Huerta
                </Link>
              </GridItem>
            </Grid>
            <Grid
              fontSize={{ base: '.75rem', sm: '1.75vh', md: '1.1rem' }}
              gap={{ base: '1%', md: 0 }}
            >
              <GridItem pb={2} fontWeight={700}>
                Design
              </GridItem>
              <GridItem fontWeight={300} color='#ffffffa3'>
                Carol B.
              </GridItem>
              <GridItem fontWeight={300} color='#ffffffa3'>
                Laura Quintar
              </GridItem>
              <GridItem fontWeight={300} color='#ffffffa3'>
                <Link
                  href='https://github.com/Dev-Juniorr'
                  target='_blank'
                  rel='noreferrer'
                  _hover={{ textDecoration: 'none' }}
                >
                  ! Sebastián
                </Link>
              </GridItem>
            </Grid>
            <Grid
              fontSize={{ base: '.75rem', sm: '1.75vh', md: '1.1rem' }}
              gap={{ base: '1%', md: 0 }}
            >
              <GridItem pb={2} fontWeight={700}>
                Developers
              </GridItem>
              <GridItem fontWeight={300} color='#ffffffa3'>
                <Link
                  href='https://github.com/HikenJos'
                  target='_blank'
                  rel='noreferrer'
                  _hover={{ textDecoration: 'none' }}
                >
                  HikenJos
                </Link>
              </GridItem>
              <GridItem pb={4} fontWeight={300} color='#ffffffa3'>
                <Link
                  href='https://github.com/mikejbp'
                  target='_blank'
                  rel='noreferrer'
                  _hover={{ textDecoration: 'none' }}
                >
                  mikejbp
                </Link>
              </GridItem>
              <GridItem fontWeight={300} color='#ffffffa3'>
                <Link
                  href='https://github.com/AleVedoya'
                  target='_blank' rel='noreferrer'
                  _hover={{ textDecoration: 'none' }}
                >
                  AleVedoya
                </Link>
              </GridItem>
              <GridItem fontWeight={300} color='#ffffffa3'>
                <Link
                  href='https://github.com/JonatanHN'
                  target='_blank' rel='noreferrer'
                  _hover={{ textDecoration: 'none' }}
                >
                  JonatanHN
                </Link>
              </GridItem>
            </Grid>
          </HStack>
        </HStack>

        <Flex justify='space-between' color='#ffffffa3' pt={6}>
          <Flex gap={5} align='center'>
            <Link
              href='https://www.instagram.com/openbootcamp_/'
              target='_blank' rel='noreferrer'
              _hover={{ color: 'white' }}
            >
              <BsInstagram fontSize='2vh' />
            </Link>
            <Link
              href='https://twitter.com/Open_Bootcamp'
              target='_blank' rel='noreferrer'
              _hover={{ color: 'white' }}
            >
              <BsTwitter fontSize='2vh' />
            </Link>
            <Link
              href='https://www.twitch.tv/openbootcamp'
              target='_blank' rel='noreferrer'
              _hover={{ color: 'white' }}
            >
              <BsTwitch fontSize='2vh' />
            </Link>
          </Flex>
          <Stack fontSize={{ base: '.75rem', sm: '2vh' }}>
            <Text w='full' fontWeight={300}>
              © Open WeekApps - 2022
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </VStack>
  )
}

export default Footer
