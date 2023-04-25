import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReview } from 'services/moviesAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesReview(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
