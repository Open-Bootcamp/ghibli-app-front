import { useEffect, useState } from 'react'

function useGetCharacter (id) {
  const [data, setData] = useState([])
  useEffect(() => {
    async function response () {
      const ghibli = await fetch('https://ghibli-app-back-production.up.railway.app/films').then(async (res) => await res.json())
      const [search] = ghibli.filter((movie) => movie._id === id)

      const urlCharacter = await Promise.all(
        search.characters.map(async (persona) => {
          return await fetch(persona).then(async (res) => await res.json())
        }))

      setData(urlCharacter)
    }
    response()
  }, [])
  return data
}

export default useGetCharacter
