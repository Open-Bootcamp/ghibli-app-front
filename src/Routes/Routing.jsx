import { Route, Routes } from 'react-router-dom'
import Layout from '../Common/Layout'
import MovieDescription from '../components/Movie Description/MovieDescription'
import MovieMenu from '../components/Movie Description/MovieMenu'

function Routing () {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/movie/:id' element={<MovieDescription />} />
      <Route path='/movie/:_id' element={<MovieMenu />} />
    </Routes>
  )
}

export default Routing
