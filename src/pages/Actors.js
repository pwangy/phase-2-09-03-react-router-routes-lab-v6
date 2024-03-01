import { useEffect, useState } from 'react'
import { Wrapper } from '../components/Wrapper'
import NavBar from '../components/NavBar'

const Actors = () => {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then(res => {
      if (!res.ok) {
        throw new Error('Could not connect to server!')
      }
      return res.json()
    })
    .then(actorData => setActors(actorData))
    .catch(err => console.error(err))
  }, [])

  const renderActors = actors.map(a => <Wrapper key={a.id} {...a} />)

	return (
    <>
      <header><NavBar /></header>
      <main>
        {renderActors}
      </main>
    </>
)}

export default Actors