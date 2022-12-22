# Movie Search

Created a basic routing for a movie search and storage application.

## themoviedb.org API.

For the backend, I used [themoviedb.org API](https://www.themoviedb.org/). I
registered and get API key. The following endpoints are used in this work:

- [/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending)
  a list of the most popular movies for today to create a collection on the home
  page page.
- [/search/search-movies](https://developers.themoviedb.org/3/search/search-movies)
  keyword search for a movie on the movies page.
- [/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details)
  Request full movie info for the movie page.
- [/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits)
  Request cast info for the movie page.
- [/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews)
  requesting reviews for the movie page.

## Routes

The app has the following routes. If a user has accessed a non-existent route,
it must be redirected to the home page.

- `'/'` - component `Home`, the home page with a list of popular movies.
- `'/movies'` - component `Movies`, a page of movie search by keyword. keyword.
- `'/movies/:movieId'` - component `MovieDetails`, a page with detailed
  information about the movie.
- `'/movies/:movieId/cast'` - component `Cast`, information about the cast.
  Rendered on the page `MovieDetails`.
- `'/movies/:movieId/reviews'` - component `Reviews`, information about reviews.
  Rendered on the page `MovieDetails`.

## Code Splitting

Added asynchronous JS code loading for the application routes using
`React.lazy()` and `<Suspense>`.
