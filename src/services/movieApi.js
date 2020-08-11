// Ключ доступа к API (v4 auth) : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTQxNDcxYzRjZmQyZjBmZWJlYzI1YTg0MzBjYmM4YSIsInN1YiI6IjVmMTRlMmZkNjVjMjZjMDAzOGMzYWMxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4lm51kTeiIE1bTUfW4W8YcTL-CHnlNWtpQojMsXDiu8
// Ключ API (v3 auth) : 0941471c4cfd2f0febec25a8430cbc8a
export default class MovieApi {
  key = '0941471c4cfd2f0febec25a8430cbc8a';

  getPopularMovies = async () => {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.key}&language=en-US&page=1`,
    );
    const body = await result.json();
    return body.results.slice(0, 10).map(this.transformMovies);
  };

  getMovieDetails = async (id) => {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.key}&append_to_response=credits`,
    );
    const body = await result.json();
    return this.transformMovies(body);
  };

  searchMoviesByName = async (name) => {
    if (name === '') {
      return [];
    }
    const result = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.key}&language=en-US&query=${name}&page=1&include_adult=true`,
    );
    const body = await result.json();
    return body.results.map(this.transformMovies);
  };

  transformMovies = (movie) => {
    return {
      name: movie.original_title,
      id: movie.id,
      description: movie.overview,
      poster: movie.poster_path,
    };
  };
}
