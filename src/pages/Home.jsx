import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as API from 'services/movies-api';
import {
  Container,
  Header,
  MoviesList,
  MoviesItem,
  MovieLink,
} from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const response = await API.getTrendingMovies(controller);
        setMovies(response.results);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Container>
      <Header>Trending today</Header>
      {error && error.message !== 'canceled' && (
        <p>Whoops, something went wrong: {error.message}</p>
      )}
      {movies.length > 0 && (
        <MoviesList>
          {movies.length > 0 &&
            movies.map(({ id, title }) => (
              <MoviesItem key={id}>
                <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </MovieLink>
              </MoviesItem>
            ))}
        </MoviesList>
      )}
    </Container>
  );
};

export default Home;
