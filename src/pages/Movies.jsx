import React, { useState, useEffect } from 'react';
import { Container, MoviesList, MoviesItem, MovieLink } from './Movies.styled';
import { SearchBar } from 'components/SearchBar';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader';
import * as API from 'services/movies-api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  // const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }

    const controller = new AbortController();
    async function fetchData() {
      try {
        setLoading(true);
        const response = await API.searchMovies(query, controller);
        const movies = response.results;
        setMovies(movies);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [query]);

  const handleFormSubmit = ({ query }) => {
    setSearchParams(query !== '' ? { query: query } : {});
    setQuery(query);
  };

  return (
    <Container>
      <SearchBar onSubmit={handleFormSubmit} />
      {loading && <Loader />}
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
