import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Hero from './Hero';

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

    fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (isLoading) {
    return <Hero text="Loading..." />;
  }

  if (!movie) {
    return <p>Movie not found.</p>;
  }
	const backdropUrl = movie.backdrop_path
		? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
		: '/photo_unavailable.jpg';

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/photo_unavailable.jpg';

  return (
		<>
			<Hero text={movie.original_title} backdrop={backdropUrl || ''} />
			<div className="container my-5">
				<div className="row">
					<div className="col-md-4">
						<img src={posterUrl} className="img-fluid" alt={movie.title} />
					</div>
					<div className="col-md-4">
						<h2 className='pb-2'>{movie.title}</h2>
						<p className='pb-4'>{movie.overview}</p>
						<p className='pb-2'> <strong>Release Date:</strong> {movie.release_date}</p>
						<p className='pb-2'><strong>Rating:</strong> {movie.vote_average} / 10</p>
					</div>
				</div>
			</div>
		</>
  );
};

export default MovieDetails;