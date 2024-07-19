class Product {
    
    #name;
    #category;
    #price;
    #description;
  
    
    constructor(name, category, price, description) {
      this.#name = name;
      this.#category = category;
      this.#price = price;
      this.#description = description;
    }
  
    
    getName() {
      return this.#name;
    }
    setName(newName){
        this.#name=newName;
    }
  
    getCategory() {
      return this.#category;
    }

    setCategory(newCategory){
        this.#category=newCategory;
    }
  
    getPrice() {
      return this.#price;
    }
    setPrice(newPrice){
        this.#price=newPrice;
    }
  
    getDescription() {
      return this.#description;
    }
    setDescription(newDescription){
        this.#description=newDescription;
    }
  }
  

var products =null ;
var productsContainer = document.getElementById("product-tabel-container") ;
var warningMessage    = document.getElementById("warning-msg") ;
var tableBody         = document.getElementById("tabel-body") ;
var updateindex ;
var updatewindow =document.getElementById("c") ;
var updateform =document.getElementById("Update_form") ;
var productNameU = document.getElementById("product_nameU");
var productCatU = document.getElementById("product_categoryU");
var productPriceU = document.getElementById("product_priceU");
var productDescU = document.getElementById("prodct_descU");
var productName = document.getElementById("product_name");
var productCat = document.getElementById("product_category");
var productPrice = document.getElementById("product_price");
var productDesc = document.getElementById("prodct_desc");
var createBtn = document.getElementById("create-btn");
var productForm = document.getElementById("product-form");

productName.value=""      ;
productCat.value="" ;
productPrice.value ="";
productDesc.value="";


function deleterow(index){

    products.splice(index ,1) ;
    handleRenderData();
}

function updaterow(index){
    updateindex=index ;
    updatewindow.classList.remove("d-none");
    updatewindow.classList.add("d-block") ;
    productNameU.value=products[updateindex].getName();
    productCatU.value=products[updateindex].getCategory();
    productPriceU.value= products[updateindex].getPrice();
    productDescU.value= products[updateindex].getDescription();
}

updateform.onsubmit=function(event){
    
    event.preventDefault() ;
    if(    productNameU.value!="" &&      
           productCatU.value!="" &&
           productPriceU.value !=""&&
           productDescU.value!=""    ){
            
            products[updateindex].setName(productNameU.value);
            products[updateindex].setCategory(productCatU.value);
            products[updateindex].setPrice(productPriceU.value);
            products[updateindex].setDescription(productDescU.value);
            updatewindow.classList.remove("d-block") ;
            updatewindow.classList.add("d-none") ;
        
            handleRenderData();
           }

}


function handleRenderData(){
    if(products && products.length !==0 ){

        console.log("Products are available");
        productsContainer.classList.remove("d-none") ;
        productsContainer.classList.add("d-block")   ;
        warningMessage.classList.remove("d-block") ;
        warningMessage.classList.add("d-none") ;
        var rows_eleemnts="" ;
        for(var i =0 ;i<products.length ;i++){
            rows_eleemnts += `
            <tr>
           <th>${i + 1}</th>
           <td>${products[i].getName()}</td>
           <td>${products[i].getCategory()}</td>
           <td>${products[i].getPrice()}</td>
           <td>
           ${products[i].getDescription()}
           </td>
           <td>
             <button class="btn btn-outline-success" onclick=updaterow(${i})>
               <i class="fa-solid fa-pen-to-square"></i>
             </button>
           </td>
           <td>
             <button class="btn btn-outline-danger" onclick=deleterow(${i})>
               <i class="fa-solid fa-trash"></i>
             </button>
           </td>
         </tr>
         
       `;
  
        }
        tableBody.innerHTML=rows_eleemnts ;

        productName.value=""      ;
        productCat.value="" ;
        productPrice.value ="";
        productDesc.value="";
    }else{
        warningMessage.classList.remove("d-none");
        warningMessage.classList.add("d-block");
        productsContainer.classList.add("d-none");
        productsContainer.classList.remove("d-block");
    }

    // var productNameU = document.getElementById("product_nameU");
    // var productCatU = document.getElementById("product_categoryU");
    // var productPriceU = document.getElementById("product_priceU");
    // var productDescU = document.getElementById("prodct_descU");
 

}





handleRenderData();






productForm.onsubmit= function(event){
    event.preventDefault();
    if(    productName.value!="" &&      
           productCat.value!="" &&
           productPrice.value !=""&&
           productDesc.value!=""    ){
            
            if(!products){
                products=[] ;
            }
            var product=new Product(productName.value, productCat.value, productPrice.value, productDesc.value);

            products.push (product) ;
            console.log() ;
            handleRenderData() ;
           }


};

clearbtn = document.getElementById("cbtn") ;
clearbtn.onclick=function(){
    productName.value=""      ;
    productCat.value="" ;
    productPrice.value ="";
    productDesc.value="";
    console.log("EMPTY");
}














