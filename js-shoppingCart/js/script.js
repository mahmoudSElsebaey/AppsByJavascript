let links = document.querySelector("#links")
    , userInfo = document.querySelector("#userInfo")
    , userData = document.querySelector("#user")
    , logOutBtn = document.querySelector("#logOut")

////=========> remove the links (sign in & sign up) from the home page ==> and return the user info (name & log out option)
if (localStorage.getItem("username")) {
    links.remove()
    userInfo.style.display = "flex"
    userData.innerHTML = '<i class="fas fa-user-circle"></i>' + " " + localStorage.getItem("username")
}
////========> logout and then go to the login page
logOutBtn.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.clear()
    setTimeout(() => {
        window.location = "login.html"
    }, 1000);
})

////=======> products
let allProducts = document.querySelector(".products")

let products = [
    {
        id: 1,
        title: 'Milk Almarai',
        salary: 20,
        imgURL: 'Images/product (6).jpg'
    },
    {
        id: 2,
        title: 'Abu Auf',
        salary: 10,
        imgURL: 'Images/product (3).jpg'
    },
    {
        id: 3,
        title: 'Heinz Ketchup',
        salary: 15,
        imgURL: 'Images/product (4).jpg'
    },
    {
        id: 4,
        title: 'Cocacola',
        salary: 10,
        imgURL: 'Images/product (9).jpg'
    },
]
// ===> create products items
function drawItems() {
    let x = products.map(function(item) {
        return ` <div class="product-item">
                    <img class="product-item-img" src="${item.imgURL}">
                    <div class="product-item-info">
                        <h2>${item.title}</h2>
                        <p>this is the information about this product</p>
                        <span>salary : ${item.salary} $</span>
                    </div>
                    <div class="product-item-action">
                        <button class="add-to-cart" onclick="addToCart(${item.id})">add to cart</button>
                        <i class="far fa-heart fav-icon"></i>
                    </div>
                </div>`    
    })
    allProducts.innerHTML = x
}
drawItems()

let addingProduct = document.querySelector(".adding-product")
    , badge = document.querySelector(".badge")

let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
if (addedItem) {
    addedItem.map((item) => {
        addingProduct.innerHTML += `<div class="adding-product-item">
                                        <img src="${item.imgURL}">
                                        <p>${item.title}</p>
                                        <span>x</span>
                                    </div>`
    })
    badge.style.display = "block"
    badge.innerHTML = addedItem.length
}


if (localStorage.getItem = "username") {

    ////====> adding the choosen product to cart
    function addToCart(x) { //  x = id
        let choosenItem = products.find(function (item) {
            return item.id === x
        })
        addingProduct.innerHTML += `<div class="adding-product-item">
                                        <img src="${choosenItem.imgURL}">
                                        <p>${choosenItem.title}</p>
                                        <span>x</span>
                                    </div>`

        ////=====> transfer the products to the cartsProducts page
        addedItem = [...addedItem, choosenItem]
        localStorage.setItem("productsInCart", JSON.stringify(addedItem)) // turn addedItem from type(object) into type(string)

        ////====> increase the number of products 
        let allAddingProducts = document.querySelectorAll(".adding-product-item")
        let counter = allAddingProducts.length
        badge.style.display = "block"
        badge.innerHTML = counter

        ////====> close product item from cart
        let closeProductItem = document.querySelectorAll(".adding-product span")
        allAddingProducts.forEach(function (item, i) {
            closeProductItem[i].addEventListener("click", () => {
                item.remove()
                badge.innerHTML = --counter
                if (counter === 0) { badge.style.display = "none" }
            })
        })
    }
} else {
    window.location = "login.html"
}

// ====> show / hide shopping cart content by icon
let shoppingCartIcon = document.querySelector(".shoppingCartIcon")
let cartsProducts = document.querySelector(".carts-products")
shoppingCartIcon.addEventListener("click", () => {
    if (cartsProducts.innerHTML != "") {
        if (cartsProducts.style.display == "block") {
            cartsProducts.style.display = "none"
        } else {
            cartsProducts.style.display = "block"
        }
    }
})