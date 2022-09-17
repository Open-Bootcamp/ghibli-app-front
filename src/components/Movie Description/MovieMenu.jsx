import { Box, Container, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import Information from './Information'

function MovieMenu () {
  return (
    <Box bg='#000000'>
      <Container display='column' justify='flex-start' maxW='1200px'>
        <Text
          color='white'
          fontSize={{ base: '5xl', sm: '6xl' }}
          fontWeight='700'
          py='30px'
        >
          Movie Description
        </Text>
        <Flex width='35%' pb='50px' gap={4}>
          <Link
            color='white'
            bg='#000000'
            p='12px'
            mr='15px'
            border='1px solid #6F719E'
            _hover={{
              textDecoration: 'none'
            }}
            _active={{
              background: '#6F719E'
            }}
          >
            Information
          </Link>
          <Link
            color='white'
            bg='#000000'
            p='12px'
            border='1px solid #6F719E'
            _hover={{
              textDecoration: 'none'
            }}
            _active={{
              background: '#6F719E'
            }}
          >
            Characters
          </Link>
        </Flex>
        <Information />
      </Container>
    </Box>
  )
}

export default MovieMenu
