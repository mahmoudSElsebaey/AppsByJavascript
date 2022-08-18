let productsInCart = localStorage.getItem("productsInCart")
let allProducts = document.querySelector(".products")

if (productsInCart) {                                // meain ==> if productsInCart have value (true) or not have (false)
    let item = JSON.parse(productsInCart)
    drawCartProducts(item)                           // turn productsInCart=(item) from type(string) into type(object) 
}

function drawCartProducts(products) {
    let x = products.map(function (item) {
        return `<div class="product-item">
                    <img class="product-item-img" src="${item.imgURL}">
                    <div class="product-item-info">
                        <h2>${item.title}</h2>
                        <p>this is the information about this product</p>
                        <span>salary : ${item.salary} $</span>
                    </div>
                    <div class="product-item-action">
                        <button class="add-to-cart" onclick="removeFromCart(${item.id})">remove from cart</button>
                    </div>
                </div>`
                
    })
    allProducts.innerHTML = x
}