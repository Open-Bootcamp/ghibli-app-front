import { Box, Container, Flex, Link, Text } from '@chakra-ui/react'
import { Link as Linked } from 'react-router-dom'

function MovieMenu ({ setShow }) {
  return (
    <Box bg='#000000' fontFamily='Inter, sans-serif'>
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
            as={Linked}
            to='/'
            color='white'
            textDecoration='none'
            bg='#000000'
            p='12px'
            mr='15px'
            border='1px solid #6F719E'
            _hover={{
              backgroundColor: '#6F719E'
            }}
          >
            Home
          </Link>
          <Link
            onClick={() => setShow(false)}
            color='white'
            textDecoration='none'
            bg='#000000'
            p='12px'
            mr='15px'
            border='1px solid #6F719E'
            _hover={{
              backgroundColor: '#6F719E'
            }}
          >
            Information
          </Link>
          <Link
            onClick={() => setShow(true)}
            color='white'
            textDecoration='none'
            bg='#000000'
            p='12px'
            mr='15px'
            border='1px solid #6F719E'
            _hover={{
              backgroundColor: '#6F719E'
            }}
          >
            Characters
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}

export default MovieMenu
