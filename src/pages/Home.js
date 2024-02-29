import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const Home = () => {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:4000/movies')
    .then(res => {
      if (!res.ok) {
        throw new Error('Could not connect to server!')
      }
      return res.json()
    })
    .then(movieData => setMovies(movieData))
    .catch(err => console.error(err))
  }, [])
  
  const renderMovies = movies.map(movie => <MovieCard key={movie.id} {...movie} />)
	
  return (
		<>
      <h1>Home Page</h1>
			<main>{renderMovies}</main>
		</>
	)
}

export default Home