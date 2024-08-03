import CartManager from "/features/cart/cartManager.js";
import { singleProductSuccess ,productSuccess2} from "/features/products.js";
import { getManyRequsets } from "/shares/api.js";
import { errorElement2,loadingElement2, singleProductImage } from "/shares/ui/dom-elements.js";
import cartManager from "./features/cart/cartManager.js";

let clickedItem_ID = localStorage.getItem("clickedItem_ID");
let clickedItem_Category = localStorage.getItem("clickedItem_Category");


const cartManager2 = new CartManager();

var requestConfig = [
    {
        endpoint: `products/${clickedItem_ID}`,
        // endpoint: `products/130`,
        success: (data) => singleProductSuccess(data)
    },
    {
        endpoint: `products/category/${clickedItem_Category}`,
        success: (data) => productSuccess2(data)
    }
]


const uiHandlers = {
    startLoading() {
        loadingElement2.removeClass("d-none");
        loadingElement2.addClass("d-flex");
    },
    error(err) {
        errorElement2.removeClass("d-none");
        errorElement2.addClass("d-flex");
        
        singleProductImage.addClass("d-none");
        
        errorElement2.find(".alert").text(err.message);
    },
    stopLoading() {
        loadingElement2.removeClass("d-flex");
        loadingElement2.addClass("d-none");

        singleProductImage.removeClass("d-none");
    }
};
getManyRequsets(uiHandlers,requestConfig);
