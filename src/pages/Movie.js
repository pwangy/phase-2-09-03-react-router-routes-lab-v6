import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Movie = () => {
  const [movie, setMovie] = useState({})
  const params = useParams()
  const movieID = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieID}`)
      .then(res => res.json())
      .then(movieData => setMovie(movieData))
      .catch(err => console.error(err))
    }, [movieID])

    if(!movie.title){
      return <h1>Loading...</h1>
    }

    const genres = movie.genres.map(genre => <span key={genre}>{genre}</span>)

	return (
    <>
      <header><NavBar /></header>
      <main>
        <h1>{movie.title}</h1>
        <p>Run Time: {movie.time} minutes</p>
        {genres}
    </main>
    </>
)}

export default Movie