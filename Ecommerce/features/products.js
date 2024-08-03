import { 
  itemsElement,
  nextBtn,
  backBtn,
  reviewsElement,
  similarProductsElement,
  singleProductImage,
  descriptionElement,
  
} from "../shares/ui/dom-elements.js";

 


const productsSuccess = function (data) {
  itemsElement.html(
    data.products
      .map((item, index) => {
        
        return `
          <div class="col-4">
            <div class="border shadow rounded-2 px-1 py-2">
              <img src=${
                item.images[0]
              } class="w-100 mb-2" style="height: 200px" />
              <div class="mb-3">
                <h3 class="mb-1">${item.title}</h3>
                <p>${item.description}</p>
              </div>
              <div class="d-flex gap-1 mb-3 align-items-center">
                <span>★</span>
                <div class="px-2 bg-danger bg-opacity-75 rounded-2">${
                  item.rating
                }</div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p class="fw-bold mb-0 fs-3">$${item.price}</p>
                <button class="btn btn-primary" data-product='${JSON.stringify({
                  id: item.id,
                  title: item.title,
                  image: item.images[0],
                  price: item.price,
                  stock: item.stock,
                })}'>Add To Chart</button>
                <button class="btn btn-primary bg-danger mx-2"  
                data-product2='${JSON.stringify({
                  id: item.id,
                  category: item.category ,
                })}'
                >Show Details</button>
              </div>
            </div>
          </div>`;
      })
      .join("")
  );


  
  

};

export const singleProductSuccess = function (data){


    singleProductImage.html(
      (data.images).map(

        (item,index) => {
          if(item == data.images[0]){
              return `<div class="carousel-item active">
                        <img class="d-block w-100" style="height:350px;" src="${item}" alt="${data.title}">
                      </div>`
           }else{
              return `<div class="carousel-item">
                        <img class="d-block w-100" style="height:350px;" src="${item}" alt="${data.title}">
                      </div>`   
                }
        }

      ).join("")
    );


    if(data.images[1]){
      nextBtn.removeClass("d-none");
      backBtn.removeClass("d-none");
  }
  descriptionElement.html(
      `
        <h2>${data.title}</h2><br>
        <p>${data.description}</p>
        <div class="d-flex g-1 mt-4">
            <p class="text-black">${data.rating}</p>
            <i class="fa-solid fa-star mt-1 me-2"></i>
        </div>
        <div class="d-flex">
            <p class="ms-2 mt-3">Only ${data.stock} left in stock</p>
        </div>
        <div class="d-flex justify-content-start cost-style">
        <p class="me-3 mt-2">$${data.price}</p>
        <button class="m-3 mt-2 bg-danger" data-product3='${JSON.stringify({
            id: data.id,
            title: data.title,
            image: data.thumbnail,
            price: data.price,
            stock: data.stock,
        })}'>Add to Cart</button>
        </div>
      `
  );
  reviewsElement.html(
        
    (data.reviews).map((item,index) => {
        return `
            <div class="m-3">

                <div class="d-flex">
                    <h4 class="mb-0">${item.reviewerName}</h4>
                    <div class="d-flex g-1 ms-2 mt-1 rating-style">
                        <i class="fa-solid fa-star mt-1"></i>    
                        <p class="ms-2">${item.rating}</p>
                    </div>
                </div>

                <p class="text-black-50">${item.reviewerEmail}</p>
                
                <div class="comment-styling">
                    <p>${item.comment}</p>
                </div>

            </div>`
    }).join("")
);
}

export const productSuccess2 = function (data){
  var clickedItem_ID = localStorage.getItem("clickedItem_ID");
  similarProductsElement.html(
    data.products
    .map((item, index) => {
      if(item.id != clickedItem_ID){
          
      return `
      <div class="col-4">
        <div class="border shadow rounded-2 px-1 py-2">
          <img src=${
            item.images[0]
          } class="w-100 mb-2" style="height: 200px" />
          <div class="mb-3">
            <h3 class="mb-1">${item.title}</h3>
            <p>${item.description}</p>
          </div>
          <div class="d-flex gap-1 mb-3 align-items-center">
            <span>★</span>
            <div class="px-2 bg-danger bg-opacity-75 rounded-2">${
              item.rating
            }</div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <p class="fw-bold mb-0 fs-3">$${item.price}</p>
            <button class="btn btn-primary" data-product='${JSON.stringify({
              id: item.id,
              title: item.title,
              image: item.images[0],
              price: item.price,
              stock: item.stock,
            })}'>Add To Chart</button>
            <button class="btn btn-primary bg-danger mx-2"  
            data-product2='${JSON.stringify({
              id: item.id,
              category: item.category ,
            })}'
            >Show Details</button>
          </div>
        </div>
      </div>`;
      }
    
    })
    .join("")

  );
}

export default productsSuccess;

