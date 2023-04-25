import React, { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { fetchMoviesById } from 'services/moviesAPI';
import { StyledButton, StyledMovieInfo } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMoviesById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <StyledButton
        type="button"
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Go back
      </StyledButton>
      {movie && (
        <StyledMovieInfo>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.original_title}
            width="200"
          />
          <div>
            <h2>
              {movie.original_title} ({movie.release_date.slice(0, 4)})
            </h2>
            <p>User score: {Number.parseInt(movie.vote_average * 10)}%</p>
            <p>
              <b>Overview </b>
              <br />
              <br />
              {movie.overview}
            </p>
            <p>
              <b>Genres</b>
              <br />
              <br />
              {movie.genres.reduce((acc, genre) => {
                return acc + genre.name + ' ';
              }, '')}
            </p>
          </div>
        </StyledMovieInfo>
      )}
      <>
        <h4>Additional information</h4>
        <Link to="cast">Cast</Link>
        <br />
        <Link to="reviews">Reviews</Link>
      </>
      <Outlet />
    </>
  );
};

export default MovieDetails;
