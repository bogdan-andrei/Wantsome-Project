var main = document.querySelector("main");
var itemsCart = document.querySelector(".productsCart");
var orderBox = document.querySelector(".orderBox");
// var screenWidth =  window.matchMedia("(max-width: 700px)");

var prodsPrice = document.querySelector("#prodsPrice");

// var amount = 0;
// var total = 0;
var array = [];

function renderCart(products) {
    itemsCart.innerHTML = "";
    products.forEach(element => {
        var productBox = document.createElement("div");
        productBox.setAttribute("style", "display:flex; justify-content: space-between; margin: 5% 0; padding-left: 2%;border: 1px solid grey; background-color: white;")

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
        deleteBtn.setAttribute("style", " width: 95%; height: 20%; background-color: transparent; ")
        
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
        quantity.setAttribute("style", "height: 10%; width: 7%");
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

        array.push(element);

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
   var amount = 0;
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


//Search Bar
var searchBtn = document.querySelector("#searchBtn");

function renderSearch(products){
    searchBtn.addEventListener("click", function(e){
        e.preventDefault();
        main.innerHTML = "";
        main.style.display = "block";
        var t = 0;
        var searchInput = document.querySelector("#searchBar");
        var searchBar = searchInput.value.toUpperCase();
        const heading = document.createElement("h3");
        heading.innerText = "Rezultatele cautarii:";
        heading.style.marginLeft = "20%";
        main.appendChild(heading);
        products.forEach(element =>{
           
            if(element.title.toUpperCase().includes(searchBar)) { 
            // window.location.replace("products.html?q=" + searchBar);
            var searchResultBox = document.createElement("div");
            searchResultBox.setAttribute("style", "width: 70%; padding: 1%; display:flex; justify-content: space-between; align-items: center; margin: 3% auto; border: 1px solid grey; background-color: white;")
            
            var searchResultImage = document.createElement("img");
            searchResultImage.src = element.src;
            searchResultImage.alt = element.alt;
            searchResultImage.style.width = "30%";
            
            var searchResultTitle = document.createElement("h5");
            searchResultTitle.innerText = element.title;
            searchResultTitle.setAttribute("style", "font-size: 20px; width: 50%;")

            var searchDetails = document.createElement("button");
            searchDetails.innerText = "Vezi detalii"
            searchDetails.setAttribute("style", "width: 15%; padding: 2%; background: transparent; border: 2px outset grey;")
            searchDetails.onclick = function () {
                goToDetails(element);
            };

            searchResultBox.appendChild(searchResultImage);
            searchResultBox.appendChild(searchResultTitle);
            searchResultBox.appendChild(searchDetails);
           
            main.appendChild(searchResultBox);
            t++;
        } 
        })
        if(t === 0){
            console.log('No results found for: ' + searchInput.value);
            var searchResultError = document.createElement("p");
             searchResultError.innerText = `Nu s-a gasit produsul cautat: ${searchInput.value}`;
             searchResultError.setAttribute("style", "margin:5% 15% 5% 15%; border: 1px solid grey; background-color: white;");
             main.appendChild(searchResultError);
        }
        searchInput.value = "";
})
}


function fetchProducts() {
    return fetch("http://localhost:3000/api/products", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
        },
    }).then((r) => r.json());
}

fetchProducts().then(renderSearch);


function goToDetails(component) {
    return fetch(`http://localhost:3000/api/details`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(component),
    })
        .then(r => {
            window.location.assign(`./Categories/detailedProduct.html?q=${component.id}`);
        })
}