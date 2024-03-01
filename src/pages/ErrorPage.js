import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const err = useRouteError()
    return <h1 className='err'>{err.message}</h1>
}

export default ErrorPage