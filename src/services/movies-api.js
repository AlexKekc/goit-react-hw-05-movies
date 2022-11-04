import axios from 'axios';

// Cписок найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці:
export const getTrendingMovies = async controller => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?`,
    {
      signal: controller.signal,
      params: {
        api_key: 'c12fc6e7e876598f311d1d7cfc6c24fd',
      },
    }
  );
  return response.data;
};

// Пошук фільму за ключовим словом на сторінці фільмів:
export const searchMovies = async (query, controller) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/${query}}?`,
    {
      signal: controller.signal,
      params: {
        api_key: 'c12fc6e7e876598f311d1d7cfc6c24fd',
        language: 'en-US',
        page: 1,
        include_adult: false,
      },
    }
  );
  return response.data;
};

// Запит повної інформації про фільм для сторінки кінофільму:
export const getMovieDetails = async (movieId, controller) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?`,
    {
      signal: controller.signal,
      params: {
        api_key: 'c12fc6e7e876598f311d1d7cfc6c24fd',
        language: 'en-US',
      },
    }
  );
  return response.data;
};

// Запит інформації про акторський склад для сторінки кінофільму:
export const getMovieCredits = async (movieId, controller) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?`,
    {
      signal: controller.signal,
      params: {
        api_key: 'c12fc6e7e876598f311d1d7cfc6c24fd',
        language: 'en-US',
      },
    }
  );
  return response.data;
};

// Запит оглядів для сторінки кінофільму:
export const getMovieReviews = async (movieId, controller) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?`,
    {
      signal: controller.signal,
      params: {
        api_key: 'c12fc6e7e876598f311d1d7cfc6c24fd',
        language: 'en-US',
        page: 1,
      },
    }
  );
  return response.data;
};
