import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendMovies } from 'services/moviesAPI';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendMovies().then(setMovies);
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default HomePage;
