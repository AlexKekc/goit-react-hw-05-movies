import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const SharedLayout = lazy(() => import('./SharedLayout'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};
