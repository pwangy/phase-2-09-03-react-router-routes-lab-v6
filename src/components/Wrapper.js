export const Wrapper = ({ name, movies }) => {
    const renderMovies = movies.map(m => <li key={m}>{m}</li>)

    return (
        <article>
            <h1>{name}</h1>
            <ul>{renderMovies}</ul>
        </article>

)}