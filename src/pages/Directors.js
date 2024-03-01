import { useEffect, useState } from 'react'
import { Wrapper } from '../components/Wrapper'
import NavBar from '../components/NavBar'

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(res => {
      if (!res.ok) {
        throw new Error('Could not connect to server!')
      }
      return res.json()
    })
    .then(directorData => setDirectors(directorData))
    .catch(err => console.error(err))
  }, [])

  const renderDirectors = directors.map(d => <Wrapper key={d.id} {...d} />)

	return (
    <>
      <header><NavBar /></header>
      <main>
        {renderDirectors}
      </main>
    </>
)}

export default Directors