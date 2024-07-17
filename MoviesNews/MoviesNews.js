let movies          =  document.getElementById("movies");
let menuicon        =  document.getElementById("menuicon") ;
let bigsidebar      =  document.getElementById("bsb") ;
let smallsidebar    =  document.getElementById("ssb"); 
/*left :43vh;*/
let ishidden=1;
let nowPlaying      =  document.getElementById("NP") ;
let popular         =  document.getElementById("P");
let topRated        =  document.getElementById("TopR");
let trending        =  document.getElementById("trend");
let upcoming        =  document.getElementById("coming");
let contactUs       =  document.getElementById("ContactUs");


nowPlaying.addEventListener("click",function(){
    moviesGallery="";
    request(nowPlayingMoviesEndpoint) ;
})

popular.addEventListener("click" ,function(){
    moviesGallery="";
    request(popularMoviesEndpoint) ;
})

topRated.addEventListener("click",function(){
    moviesGallery="";
    request(topRatedMoviesEndpoint) ;
})
trending.addEventListener("click",function(){
    moviesGallery="";
    request(trendingMoviesEndpoint) ;
})
upcoming.addEventListener("click",function(){
    moviesGallery="";
    request(upcomingMoviesEndpoint) ;
})


/* <div class="bigsidebartxt">
                    <p id="NP">Now playing</p>
                    <p id="P">Popular</p>
                    <p id="TopR">Top Rated</p>
                    <p id="trend">Trending</p>
                    <p id="coming">Upcoming</p>
                    <p id="ContactUs">Contact Us</p>
</div> */

menuicon.addEventListener("click" , function(){
    if(ishidden){
        smallsidebar.style.left="42vh";
        bigsidebar.style.display="block";
        ishidden=0;
    }else{
        smallsidebar.style.left="0vh";
        bigsidebar.style.display="none";
        ishidden=1;
    }

})
const API_Key = "f2b59963881f67e8d8dbe04a25ebf9f6";
const nowPlayingMoviesEndpoint =` https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}`;
const popularMoviesEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}`;
const trendingMoviesEndpoint = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_Key}`;
const upcomingMoviesEndpoint = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_Key}`;
const topRatedMoviesEndpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}`;

let data;
let dataresults ;
let moviesGallery="";
let imgids=[];
let imgentities=[];

function request(URL) {
    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            imgids=[];
            pentities=[];
            imgentities=[];
            console.log(data);
            data.results.forEach(movie => {
                imgids.push(movie.id);

                moviesGallery+=`
                <div class="imgdiv">
                    <img class="imagee" id="${movie.id}" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                    <p id="p${movie.id}"></p>
                </div>
                `
            });

            movies.innerHTML=moviesGallery;
            for (let i =0 ; i<imgids.length ;i++ ){
                imgentities.push(document.getElementById(`${imgids[i]}`));
                pentities.push(document.getElementById("p"+imgids[i])) ;
                
                imgentities[imgentities.length - 1 ].addEventListener("mouseenter" ,function(){
                    for(let j =0 ; j<(data.results).length;j++ ){
                        if(data.results[j].id===imgids[i]){

                            imgentities[j].src=`https://image.tmdb.org/t/p/w500${data.results[j].backdrop_path}` ;
                            pentities[j].innerText=data.results[j].overview;
                            pentities[j].style.color="rgba(255,255,255,0.7)";
                        }

                    }
                })

                imgentities[imgentities.length - 1 ].addEventListener("mouseleave" ,function(){
                    for(let j =0 ; j<(data.results).length;j++ ){
                        if(data.results[j].id===imgids[i]){
                            pentities[j].innerText="";
                            imgentities[j].src=`https://image.tmdb.org/t/p/w500${data.results[j].poster_path}` ;
                        }

                    }
                })
                



            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

request(nowPlayingMoviesEndpoint);




