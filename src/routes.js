import { App } from './App'
import Home from './pages/Home'
import Directors from './pages/Directors'
import Actors from './pages/Actors'
import Movie from './pages/Movie'
import Error from './pages/Error'

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
				children: [
					{
						path: '/movie/:id',
						element: <Movie />
					}
				]
			},
			{
				path: '/directors',
				element: <Directors />
			},
			{
				path: '/actors',
				element: <Actors />
			}
		]
	}
]

export default routes