export const key = process.env.REACT_APP_MOVIE_API_KEY;
export const movieRequests = {
    getNowPlayingMovies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
	getPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
	getTrendingMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
	getTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
	getUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
	getPopularShows: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
	getTopRatedShows: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
	getVideos: `https://api.themoviedb.org/3/movie/663712/videos?api_key=${key}&language=en-US`,
};
