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
let title           =  document.getElementById("titlee");
let srchbr          =  document.getElementById("srchbr");

/*************************************************************************************************************************/
let nameerr         =  document.getElementById("nametxterr");
let emailerr        =  document.getElementById("emailtxterr");
let phoneerr        =  document.getElementById("phonetxterr");
let ageerr          =  document.getElementById("agetxterr");
let passworderr     =  document.getElementById("passwordtxterr");
let validateerr     =  document.getElementById("validatetxterr");

let namebox         =  document.getElementById("namebox") ;
let emailbox        =  document.getElementById("emailbox") ;
let phonebox        =  document.getElementById("phonebox") ;
let agebox          =  document.getElementById("agebox") ;
let passwordbox     =  document.getElementById("passwordbox") ;
let validatebox     =  document.getElementById("validatebox") ;


let submitbtn       =  document.getElementById("submitid");
let nameProhibitedchars =['1','2','3','4','5','6','7','8','9','0','%','#','@','!','&','$','*','+','-','=','/','<','>','?'];
let emailallowedservices=["@gmail.com","@yahoo.com","@hotmail.com"] ;
submitbtn.addEventListener("click" ,function(){
    //******************************8 */
    let nameflag=0;
    nameProhibitedchars.forEach(subString => {

        if (namebox.value.includes(subString)) {
            nameerr.innerText="It contains prohibited characters";
            namebox.style.border="red 1px solid";
            nameflag=1;
        } 
    });
    if(!nameflag){
        nameerr.innerText="";
        namebox.style.border="none";
    }

    let eflag=0;
    emailallowedservices.forEach(sub=>{
        if(emailbox.value.includes(sub)){
            eflag=1;
        }
    })
    if(!eflag){
        emailerr.innerText="Invalid Email" ;
        emailbox.style.border="red 1px solid";
    }else{
        emailerr.innerText="" ;
        emailbox.style.border="none";
    }


    if(phonebox.value.length!=12){
        phoneerr.innerText="Invalid Number, It must be 12 digits";
        phonebox.style.border="red 1px solid";
    }else{
        phoneerr.innerText="";
        phonebox.style.border="none";

    }
    if(!(Number(agebox.value)>0 &&Number(agebox.value)<170  )){
        ageerr.innerText="Invalid Age" ;
        agebox.style.border="red 1px solid";
    }else{
        ageerr.innerText="" ;
        agebox.style.border="none";
    }
    if(!(passwordbox.value.length>10)){
        passworderr.innerText="Easy password  it must be larger than 10 characters";
        passwordbox.style.border="red 1px solid";
    }else{
        passworderr.innerText="";
        passwordbox.style.border="none";

    }

    if(passwordbox.value!==validatebox.value){
        validateerr.innerText="Passwords are not matching" ;
        validatebox.style.border="red 1px solid";

    }else{
        validateerr.innerText="" ;
        validatebox.style.border="none";

    }




})

srchbr.addEventListener("input", function(event){
    console.log("entered");
    let query=event.target.value.trim();
    if(query.length>2){
        
        moviesGallery="";
        title.innerText="Search Results";
        request("https://api.themoviedb.org/3/search/movie?query="+query+"&api_key="+API_Key);
        
    }
    

})


nowPlaying.addEventListener("click",function(){
    moviesGallery="";
    
    request(nowPlayingMoviesEndpoint) ;
    title.innerText="Now Playing";
})

popular.addEventListener("click" ,function(){
    moviesGallery="";
    request(popularMoviesEndpoint) ;
    title.innerText="Popular Movies";
})

topRated.addEventListener("click",function(){
    moviesGallery="";
    request(topRatedMoviesEndpoint) ;
    title.innerText="Top Rated";
})
trending.addEventListener("click",function(){
    moviesGallery="";
    request(trendingMoviesEndpoint) ;
    title.innerText="Trending";
})
upcoming.addEventListener("click",function(){
    moviesGallery="";
    request(upcomingMoviesEndpoint) ;
    title.innerText="Upcoming Movies";
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
            movies.style.display="grid";
            if(data.total_results===0){
                movies.innerHTML=`<div class="RTHdiv" id="RTHdivv">
                <button class="RTH"id="ReturnToHome">Return to Home</button>
            </div>`;
                movies.style.display="block";
                
                let RTHbtn          =  document.getElementById("ReturnToHome") ;
                RTHbtn.addEventListener("click",function(){
                    request(popularMoviesEndpoint);
                    srchbr.innerText="";
                })
            }
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




