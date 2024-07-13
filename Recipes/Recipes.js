var options = ['carrot','broccoli','asparagus','cauliflower','corn','cucumber','green pepper', 'lettuce','mushrooms', 'onion','potato','pumpkin','red pepper','tomato','beetroot','brussel sprouts','peas','zucchini','radish','sweet potato','artichoke','leek','cabbage','celery','chili','garlic','basil','coriander','parsley','dill','rosemary','oregano','cinnamon','saffron','green bean','bean','chickpea','lentil','apple','apricot','avocado','banana','blackberry','blackcurrant','blueberry','boysenberry','cherry','coconut','fig','grape','grapefruit','kiwifruit','lemon','lime','lychee','mandarin','mango','melon','nectarine','orange','papaya','passion fruit','peach','pear','pineapple','plum','pomegranate','quince','raspberry','strawberry','watermelon','salad','pizza','pasta','popcorn','lobster','steak','bbq','pudding' ,'hamburger','pie','cake','sausage' ,'tacos' ,'kebab' ,'poutine' ,'seafood' ,'chips' ,'fries' ,'masala','paella','som tam','chicken','toast','marzipan','tofu','ketchup','hummus','chili','maple syrup','parma ham','fajitas','champ','lasagna','poke','chocolate','croissant','arepas','bunny chow','pierogi','donuts','rendang','sushi','ice cream','duck','curry','beef','goat','lamb','turkey','pork','fish','crab','bacon','ham','pepperoni','salami','ribs'];

var controlMenu = document.querySelector("#control-menu") ; 
var menu = document.getElementById('menu');
var menulist =document.querySelector("#menulist") ;
var hiddenFlag =0 ;
controlMenu.addEventListener("click",function(){
    if(hiddenFlag===1){
        menu.style.width='0';
        hiddenFlag=0;
    }else{
        menu.style.width='33%' ;
        let listelements="" ;
        for(let i=0 ; i<options.length ;i++){
            listelements+=`
            <li class="py-3 ps-3 border-bottom fs-3" id="${options[i]}">
            <p>${options[i]}</p></li>
            `
        }
        menulist.innerHTML=listelements;
        hiddenFlag=1;

    }

}  )
