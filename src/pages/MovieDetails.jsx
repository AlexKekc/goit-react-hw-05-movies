import React, { useState, useEffect, Suspense } from 'react';
import { ImArrowLeft } from 'react-icons/im';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import {
  Container,
  MovieWrapper,
  BackButton,
  MoviePoster,
  MovieDataWrapper,
  MovieTitle,
  MovieSubtitle,
  MovieData,
  GenresList,
  GenresItem,
  AdditionalInfoList,
  AdditionalInfoItem,
  AdditionalInfoLink,
} from './MovieDetails.styled';
import * as API from 'services/movies-api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const response = await API.getMovieDetails(Number(movieId), controller);
        setMovie(response);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { poster_path, title, popularity, overview, genres } = movie;
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <Container>
      <BackButton to={backLinkHref}>
        <ImArrowLeft />
        Go back
      </BackButton>
      {error && error.message !== 'canceled' && (
        <p>Whoops, something went wrong: {error.message}</p>
      )}
      <MovieWrapper>
        <MoviePoster
          src={
            poster_path !== null
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg'
          }
          alt={title}
        />
        <MovieDataWrapper>
          <MovieTitle>{title}</MovieTitle>
          <MovieSubtitle>Popularity</MovieSubtitle>
          <MovieData>{popularity}</MovieData>
          <MovieSubtitle>Overview</MovieSubtitle>
          <MovieData>{overview}</MovieData>
          <MovieSubtitle>Genres</MovieSubtitle>
          <GenresList>
            {genres.map(({ id, name }) => (
              <GenresItem key={id}>{name}</GenresItem>
            ))}
          </GenresList>
        </MovieDataWrapper>
      </MovieWrapper>
      <MovieSubtitle>Additional information</MovieSubtitle>
      <AdditionalInfoList>
        <AdditionalInfoItem>
          <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
        </AdditionalInfoItem>
        <AdditionalInfoItem>
          <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
        </AdditionalInfoItem>
      </AdditionalInfoList>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
