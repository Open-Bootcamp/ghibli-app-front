import { Route, Routes } from 'react-router-dom'
import Layout from '../Common/Layout'
import MovieDescriptionInfo from '../components/MovieDescription/MovieDescriptionInfo'
import MovieDescriptionCh from '../components/MovieDescription/MovieDescriptionCh'

function Routing () {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/movie/:id' element={<MovieDescriptionInfo />} />
      <Route path='/movie/ch/:id' element={<MovieDescriptionCh />} />
    </Routes>
  )
}

export default Routing
