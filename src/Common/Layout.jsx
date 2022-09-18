import { Flex } from '@chakra-ui/react'
import React from 'react'
import Home from '../components/Home'
import MovieContainer from '../components/MovieContainer'

function Layout () {
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

export default Layout
