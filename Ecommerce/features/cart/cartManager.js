import {
  cartBtn,
  cartElement,
  cartList,
  cartCloseBtn,
  itemsElement,
  cartBtn2,
  cartElement2,
  cartCloseBtn2,
  cartList2,
  similarProductsElement
} from "../../shares/ui/dom-elements.js";
import CartItem from "./cartItem.js";

export default class CartManager {
  static localStorageKey = "cartItems";
  #cartItems;
  constructor() {
    const localStorageSavedItems =
      JSON.parse(localStorage.getItem(CartManager.localStorageKey)) || [];
    console.log(localStorageSavedItems);
    this.#cartItems = localStorageSavedItems.map((item) =>
      CartItem.formToCartItemInstance(item)
    );

    this.#handelToggleCart();
    this.#handleRender();
    this.#addProductToCart();
    this.#updateCartItem();
    this.#showdetails();
    // this.#updateLocalStorage();
  }
  #handelToggleCart = function () {
    // console.log(cartElement, cartBtn);
    cartBtn.on("click", function () {
      cartElement.css("right", "0px");
    });
    cartCloseBtn.on("click", function () {
      cartElement.css("right", "-100%");
    });
    cartBtn2.on("click", function () {
      cartElement2.css("right", "0px");
    });
    cartCloseBtn2.on("click", function () {
      cartElement2.css("right", "-100%");
    });
  };
  #showdetails = function (){
    similarProductsElement.on("click", (e) => {
      if($(e.target).attr("data-product2")){
        const {id,category} =JSON.parse($(e.target).attr("data-product2"));
        localStorage.setItem("clickedItem_ID" , id) ;
        localStorage.setItem("clickedItem_Category",category);
        window.location.href="../productDetails.html";
      }
    })
    itemsElement.on("click", (e) => {
      if($(e.target).attr("data-product2")){
        const {id,category} =JSON.parse($(e.target).attr("data-product2"));
        localStorage.setItem("clickedItem_ID" , id) ;
        localStorage.setItem("clickedItem_Category",category);
        window.location.href="../productDetails.html";
      }
    })
  }
  //render data
  #handleRender = function () {
    //get element render data

    if (this.#cartItems.length === 0) {
      cartList.html(`
          <div class="h-100 d-flex justify-content-center align-items-center">
            <p>There's no items yet!</p>
          </div>
        `);
        cartList2.html(`
        <div class="h-100 d-flex justify-content-center align-items-center">
          <p>There's no items yet!</p>
        </div>
      `);

    } else {
      cartList.html(
        this.#cartItems.map((item, index) => item.renderElement()).join("")
      );
      cartList2.html(
        this.#cartItems.map((item, index) => item.renderElement()).join("")
      );
    }
    //check array is empty
  };
  //add to cart
  #addProductToCart = function () {
    //listn button addCart
    similarProductsElement.on("click", (e) => {
      if ($(e.target).attr("data-product")) {
        const { id, title, image, price, stock } = JSON.parse(
          $(e.target).attr("data-product")
        );
        const exisitiongItem = this.#cartItems.find((item) => item.id === id);
        if (exisitiongItem) {
          exisitiongItem.increase();

          console.log(exisitiongItem);
        } else {
          const cartItem = new CartItem(id, title, image, price, stock);
          this.#cartItems.push(cartItem);
        }
      }
      this.#updateLocalStorage();
      this.#handleRender();
    });


    itemsElement.on("click", (e) => {
      if ($(e.target).attr("data-product")) {
        const { id, title, image, price, stock } = JSON.parse(
          $(e.target).attr("data-product")
        );
        const exisitiongItem = this.#cartItems.find((item) => item.id === id);
        if (exisitiongItem) {
          exisitiongItem.increase();

          console.log(exisitiongItem);
        } else {
          const cartItem = new CartItem(id, title, image, price, stock);
          this.#cartItems.push(cartItem);
        }
      }
      this.#updateLocalStorage();
      this.#handleRender();
    });
  };
  #updateLocalStorage = function () {
    localStorage.setItem(
      CartManager.localStorageKey,
      JSON.stringify(this.#cartItems)
    );
  };
  #updateCartItem = function () {
    const isUpdated = true;


    cartList.on("click", (e) => {
      const action = $(e.target).attr("data-action");
      const element = $(e.target);

      if (action === "remove") {
        const filterdItems = this.#cartItems.filter(
          (item) => item.id !== Number(element.attr("id"))
        );
        console.log(filterdItems);
        this.#cartItems = filterdItems;
        this.#updateLocalStorage();
        this.#handleRender();
      }
      if (action === "decrease") {
        const updatedCartItem = this.#cartItems.find(
          (item) => item.id === Number(element.attr("id"))
        );
        updatedCartItem.decrease();
        this.#updateLocalStorage();
        this.#handleRender();
      }
      if (action === "increase") {
        const updatedCartItem = this.#cartItems.find(
          (item) => item.id === Number(element.attr("id"))
        );
        updatedCartItem.increase();
        this.#updateLocalStorage();
        this.#handleRender();
      }
    });



    cartList2.on("click", (e) => {
      const action = $(e.target).attr("data-action");
      const element = $(e.target);

      if (action === "remove") {
        const filterdItems = this.#cartItems.filter(
          (item) => item.id !== Number(element.attr("id"))
        );
        console.log(filterdItems);
        this.#cartItems = filterdItems;
        this.#updateLocalStorage();
        this.#handleRender();
      }
      if (action === "decrease") {
        const updatedCartItem = this.#cartItems.find(
          (item) => item.id === Number(element.attr("id"))
        );
        updatedCartItem.decrease();
        this.#updateLocalStorage();
        this.#handleRender();
      }
      if (action === "increase") {
        const updatedCartItem = this.#cartItems.find(
          (item) => item.id === Number(element.attr("id"))
        );
        updatedCartItem.increase();
        this.#updateLocalStorage();
        this.#handleRender();
      }
    });
  };
}
//delete
//increase
//decrease
///BOM Borwser object module

//Date
//Math
