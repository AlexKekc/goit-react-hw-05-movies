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
// import { Loader } from 'components/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        // setLoading(true);
        const response = await API.getTrendingMovies(controller);

        // setLoading(false);
        setMovies(response.results);
      } catch (error) {
        // setError(error);
      } finally {
        // setLoading(false);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Container>
      {/* {error && <p>Whoops, something went wrong: {error.message}</p>} */}
      {/* {loading && <Loader />}
      {loading && <Loader />}
      {loading && <Loader />} */}
      <Header>Trending today</Header>
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
