import { useEffect, useState } from 'react'
function useGetMovies () {
  const [data, setData] = useState([])
  useEffect(() => {
    async function response () {
      await fetch('https://ghibli-app-back-production.up.railway.app/films')
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err))
    }
    response()
  }, [])

  return data
}

export default useGetMovies
