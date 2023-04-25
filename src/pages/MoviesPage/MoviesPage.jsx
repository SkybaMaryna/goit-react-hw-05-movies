import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/moviesAPI';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName');
  const location = useLocation();

  useEffect(() => {
    if (!movieName) {
      return;
    }
    fetchSearchMovies(movieName).then(setMovies);
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ movieName: form.elements.movieName.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movieName"></input>
        <button>Search</button>
      </form>
      {movies && (
        <ul>
          {movies.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesPage;
