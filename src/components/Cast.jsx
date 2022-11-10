import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  ActorsList,
  ActorsItem,
  ActorImage,
  ActorData,
  ActorError,
} from './Cast.styled';
import { Loader } from 'components/Loader';
import * as API from 'services/movies-api';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        setLoading(true);
        const response = await API.getMovieCredits(Number(movieId), controller);
        const actors = response.cast;
        setActors(actors);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <Container>
      {error && error.message !== 'canceled' && (
        <p>Whoops, something went wrong: {error.message}</p>
      )}
      <ActorsList>
        {actors.length > 0
          ? actors.map(({ id, profile_path, name, character }) => (
              <ActorsItem key={id}>
                <ActorImage
                  src={
                    profile_path !== null
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg'
                  }
                  alt={name}
                />
                <ActorData>
                  <b>Name:</b> {name}
                </ActorData>
                <ActorData>
                  <b>Character:</b> {character}
                </ActorData>
              </ActorsItem>
            ))
          : !loading && <ActorError>Oops, actors not found</ActorError>}
        {loading && <Loader />}
      </ActorsList>
    </Container>
  );
};

export default Cast;
