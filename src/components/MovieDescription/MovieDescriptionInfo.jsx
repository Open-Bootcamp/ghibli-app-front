import { useState } from 'react'
import CharactersContainer from './CharacterContainer'
import Information from './Information'
import MovieMenu from './MovieMenu'

function MovieDescriptionInfo () {
  const [show, setShow] = useState(false)

  return (
    <>
      <MovieMenu setShow={setShow} />
      {show ? <CharactersContainer /> : <Information />}
    </>
  )
}

export default MovieDescriptionInfo
