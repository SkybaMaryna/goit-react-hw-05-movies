import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'services/moviesAPI';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchMoviesCast(movieId).then(setCastList);
  }, [movieId]);

  return (
    <ul>
      {castList.map(({ id, profile_path, original_name, character }) => {
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={original_name}
              width="100"
            />
            <h3>{original_name}</h3>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
