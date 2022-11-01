import { movieRequests } from "../config/requests";

export const MovieRowData = [
    {
        title: 'New Releases',
        link: movieRequests.getNowPlayingMovies,
    },
    {
        title: 'Critically Acclaimed TV Shows',
        link: movieRequests.getTopRatedShows,
    },
    {
        title: 'Upcoming Movies',
        link: movieRequests.getUpcomingMovies,
    },
    {
        title: 'Popular on Netflix',
        link: movieRequests.getPopularMovies,
    },
    {
        title: 'Trending Now',
        link: movieRequests.getTrendingMovies,
    },
    {
        title: 'Top Rated on Netflix',
        link: movieRequests.getTopRatedMovies,
    },
    {
        title: 'Popular TV Shows',
        link: movieRequests.getPopularShows,
    },
]