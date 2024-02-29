import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Movie = () => {
  const [movie, setMovie] = useState({})
  const params = useParams()
  const movieID = params.id
  console.log(params)
  console.log(params.id)

  // ! something is broken here!
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieID}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Could not connect to server!')
        }
        return res.json()
      })
      .then(movieData => setMovie(movieData))
      .catch(err => console.error(err))
    }, [movieID])

    if(!movie.title){
      <h1>Loading...</h1>
    }

    const genres = movie.generes.map(genre => <span key={genre}>{genre}</span>)
	return (
    <main>
      <h1>{movie.title}</h1>
      <p>Run Time: {movie.time} minutes</p>
      {genres}
    </main>
)}

export default Movie