import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError()
    return <h1 className='err'>{err.message}</h1>
}

export default Error