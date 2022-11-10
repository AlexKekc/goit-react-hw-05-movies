import React, { useState, useEffect } from 'react';
import { Container, MoviesList, MoviesItem, MovieLink } from './Movies.styled';
import { SearchBar } from 'components/SearchBar';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader';
import * as API from 'services/movies-api';

const Movies = () => {
  const [movies, setMovies] = useState('');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    const controller = new AbortController();
    async function fetchData() {
      try {
        setLoading(true);
        const response = await API.searchMovies(searchQuery, controller);
        const movies = response.results;
        setMovies(movies);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [searchQuery]);

  const handleFormSubmit = ({ query }) => {
    setSearchParams(query !== '' ? { query: query } : {});
  };

  return (
    <Container>
      <SearchBar onSubmit={handleFormSubmit} />
      {loading && <Loader />}
      {error && error.message !== 'canceled' && (
        <p>Whoops, something went wrong: {error.message !== 'canceled'}</p>
      )}
      <MoviesList>
        {!loading &&
          movies.length > 0 &&
          movies.map(({ id, title }) => (
            <MoviesItem key={id}>
              <MovieLink to={`${id}`} state={{ from: location }}>
                {title}
              </MovieLink>
            </MoviesItem>
          ))}
      </MoviesList>
    </Container>
  );
};

export default Movies;
