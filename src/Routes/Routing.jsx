import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import MovieDescriptionInfo from '../components/MovieDescription/MovieDescriptionInfo'

function Routing () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:id' element={<MovieDescriptionInfo />} />
    </Routes>
  )
}

export default Routing
