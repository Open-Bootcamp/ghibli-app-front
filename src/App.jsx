import { Flex } from '@chakra-ui/react'
import Home from './components/Home'
import MovieContainer from './components/MovieContainer'

function App () {
  return (
    <Flex
      minH='100vh'
      flexDirection='column'
      alignItems='center'
      fontFamily='Inter, sans-serif'
    >
      <Home />
      <MovieContainer />
    </Flex>

  )
}

export default App
