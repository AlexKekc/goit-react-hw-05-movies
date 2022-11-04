import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<div>Cast</div>}></Route>
            <Route path="reviews" element={<div>Reviews</div>}></Route>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};
