import { Flex } from '@chakra-ui/react'
import MovieContainer from './MovieContainer'

function Home () {
  return (
    <Flex
      minH='100vh'
      flexDirection='column'
      alignItems='center'
      fontFamily='Inter, sans-serif'
    >
      <MovieContainer />
    </Flex>
  )
}

export default Home
