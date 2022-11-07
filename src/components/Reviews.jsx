import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  ReviewsList,
  ReviewsItem,
  ReviewAuthor,
  ReviewContent,
  ReviewError,
} from './Reviews.styled';
import { Loader } from 'components/Loader';
import * as API from 'services/movies-api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        setLoading(true);
        const response = await API.getMovieReviews(Number(movieId), controller);
        const reviews = response.results;
        setReviews(reviews);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <Container>
      {loading && <Loader />}
      <ReviewsList>
        {reviews.length > 0
          ? reviews.map(({ id, author, content }) => (
              <ReviewsItem key={id}>
                <ReviewAuthor>Author: {author}</ReviewAuthor>
                <ReviewContent>{content}</ReviewContent>
              </ReviewsItem>
            ))
          : !loading && <ReviewError>Oops, reviews not found</ReviewError>}
      </ReviewsList>
    </Container>
  );
};

export default Reviews;
