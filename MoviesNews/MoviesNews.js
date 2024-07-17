let movies =document.getElementById("movies");


const API_Key = "f2b59963881f67e8d8dbe04a25ebf9f6";
const nowPlayingMoviesEndpoint =` https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}`;
const popularMoviesEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}`;
const trendingMoviesEndpoint = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_Key}`;
const upcomingMoviesEndpoint = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_Key}`;
const topRatedMoviesEndpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}`;

let data;
let dataresults ;
let moviesGallery="";

function request(URL) {
    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            data.results.forEach(movie => {
                moviesGallery+=`
                <div class="imgdiv">
                    <img class="imagee" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                </div>
                `
            });

            movies.innerHTML=moviesGallery;
            
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

request(nowPlayingMoviesEndpoint);
