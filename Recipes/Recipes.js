var options = ['carrot','broccoli','asparagus','cauliflower','corn','cucumber','green pepper', 'lettuce','mushrooms', 'onion','potato','pumpkin','red pepper','tomato','beetroot','brussel sprouts','peas','zucchini','radish','sweet potato','artichoke','leek','cabbage','celery','chili','garlic','basil','coriander','parsley','dill','rosemary','oregano','cinnamon','saffron','green bean','bean','chickpea','lentil','apple','apricot','avocado','banana','blackberry','blackcurrant','blueberry','boysenberry','cherry','coconut','fig','grape','grapefruit','kiwifruit','lemon','lime','lychee','mandarin','mango','melon','nectarine','orange','papaya','passion fruit','peach','pear','pineapple','plum','pomegranate','quince','raspberry','strawberry','watermelon','salad','pizza','pasta','popcorn','lobster','steak','bbq','pudding' ,'hamburger','pie','cake','sausage' ,'tacos' ,'kebab' ,'poutine' ,'seafood' ,'chips' ,'fries' ,'masala','paella','som tam','chicken','toast','marzipan','tofu','ketchup','hummus','chili','maple syrup','parma ham','fajitas','champ','lasagna','poke','chocolate','croissant','arepas','bunny chow','pierogi','donuts','rendang','sushi','ice cream','duck','curry','beef','goat','lamb','turkey','pork','fish','crab','bacon','ham','pepperoni','salami','ribs'];

var controlMenu = document.getElementById("control-menu") ; 
var menu = document.getElementById('menu');
var menulist =document.querySelector("#menulist") ;
var hiddenFlag =0 ;
var optionselement=[] ;
let recipesgrid=document.getElementById("recipesgrid") ;
getApi('pizza');

controlMenu.addEventListener("click",function(){
    if(hiddenFlag===1){
        controlMenu.style.setProperty('color',"rgba(255,255,255,0.5)" ,"important");
        menu.style.width='0';
        hiddenFlag=0;
    }else{
        controlMenu.style.setProperty('color',"rgba(255,255,255,1)" ,"important");
        menu.style.width='33%' ;
        let listelements="" ;
        for(let i=0 ; i<options.length ;i++){
            listelements+=`
            <li class="py-3 ps-3 border-bottom fs-3" id="${options[i]}">
                <div class="btn-layer-2" id="${i}"></div>
                <p>${options[i]}</p></li>
            </li>
            ` ;
            
            

        }
        menulist.innerHTML=listelements;
        hiddenFlag=1;

        // for(let i=0 ; i< options.length ;i++){
        //     optionselement.push(document.getElementById(options[i])) ;
        //     optionselement[i].addEventListener("mouseenter" ,function(){
        //     let op =document.getElementById(i) ;
        //     op.style.width='100%';
        //     })
        // }

    }

}  )



function getApi(query){
    var api = new XMLHttpRequest()                                              ;
    api.open('GET' , `https://forkify-api.herokuapp.com/api/search?q=${query}`) ;
    api.send() ;
    api.addEventListener('readystatechange' , function(){
        if(api.readyState == 4 && api.status == 200){
            display(JSON.parse(api.response).recipes) ;
        }
    })

}

function display(response){
    let str="" ;
    for(let i=0 ; i<response.length ;i++){
        str+=`
        <div class="col-md-4 mb-2" id=${response[i].recipe_id}>
            <div class="resipe-box make-pointer bg-light shadow-lg border rounded">
                <div class="resipe-img">
                <img src=${response[i].image_url} class='w-100' alt="">
                </div>
                <div class="content px-2">
                <h3 class="my-3">${response[i].title}</h3>
                <p>${response[i].publisher}</p>
            </div>
            </div>
        </div>

        ` ;

    }
    recipesgrid.innerHTML = str;


}

menu.addEventListener('click', function(e){
    if(e.target.innerText != ''){
        getApi(e.target.innerText)
    }
    menu.style.left = '-100%';
})
