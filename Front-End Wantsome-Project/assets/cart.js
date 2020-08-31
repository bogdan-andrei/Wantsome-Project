var main = document.querySelector("main");
var itemsCart = document.querySelector(".productsCart");
var orderBox = document.querySelector(".orderBox");
// var screenWidth =  window.matchMedia("(max-width: 700px)");

var prodsPrice = document.querySelector("#prodsPrice");

var amount = 0;
var total = 0;


function renderCart(products) {
    itemsCart.innerHTML = "";
    products.forEach(element => {
        var productBox = document.createElement("div");
        productBox.setAttribute("style", "display:flex; justify-content: space-between;")

        var productImg = document.createElement("img");
        productImg.src = element.src;
        productImg.alt = element.alt;
        productImg.setAttribute("style", "width:20%; height: 20%")

        var detailsBox = document.createElement("div");
        detailsBox.style.width = "60%";
        var productTitle = document.createElement("h3");
        productTitle.innerText = element.title;

        var buyBox = document.createElement("div");
        buyBox.setAttribute("style", "display:flex; flex-direction: column; align-items: center; width: 20%")
        var productPrice = document.createElement("h4");
        productPrice.innerText = element.price;

        var deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Sterge produsul";
        deleteBtn.onclick = function () {
            deleteCartItem(element.id);
            updateTotal().then(updateCart);
        }

        var quantParagraph = document.createElement("span");
        quantParagraph.innerText = "Cantitate:"
     
        var quantity = document.createElement("input");
        quantity.type = "number";
        quantity.value = element.cartQuantity;
        quantity.min = 1;
        quantity.setAttribute("style", "height: 5%; width: 4%");
        quantity.addEventListener("change", function () {
            if (quantity.value  > element.cartQuantity) {
                increasePrice(element);
                updateTotal().then(updateCart);
            } else if (quantity.value < element.cartQuantity){
                decreasePrice(element);
                updateTotal().then(updateCart);
               }
        })
 
        buyBox.appendChild(productPrice);
        buyBox.appendChild(deleteBtn);

        detailsBox.appendChild(productTitle);
        detailsBox.appendChild(quantParagraph);
        detailsBox.appendChild(quantity);

        productBox.appendChild(productImg);
        productBox.appendChild(detailsBox);
        productBox.appendChild(buyBox);
        itemsCart.appendChild(productBox);
        
        // if(screenWidth.matches){
            //     productBox.setAttribute("style", "display:flex; flex-direction: column; justify-content: space-between;")
        // } 
     });
 }



function fetchCart() {
    return fetch("http://localhost:3000/api/cart", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            "Content-Type": "application/json",
        },
    })
        .then((r) => r.json())
}
fetchCart().then(renderCart)

function deleteCartItem(id) {
    return fetch(`http://localhost:3000/api/cart/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
    })
        .then(fetchCart)
        .then(renderCart)
}

function increasePrice(element) {
    return fetch(`http://localhost:3000/api/cart/${element.id}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cartQuantity: ++element.cartQuantity,
            price: element.cartPrice * element.cartQuantity + " Lei",
        })
    }).then(fetchCart).then(renderCart)
}

function decreasePrice(element) {
    return fetch(`http://localhost:3000/api/cart/${element.id}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cartQuantity: --element.cartQuantity,
            price: element.cartPrice * element.cartQuantity + " Lei",
        })
    }).then(fetchCart).then(renderCart)
}

function updateCart(products){
    amount = 0;
    for(var i=0; i< products.length; i++){
       let final =  products[i].cartPrice * products[i].cartQuantity;
     amount += final;
    }
    prodsPrice.innerText = amount + " Lei";
}

function updateTotal(){
    return fetch("http://localhost:3000/api/cart", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            "Content-Type": "application/json",
        },
    })
        .then((r) => r.json())
}
updateTotal().then(updateCart);

