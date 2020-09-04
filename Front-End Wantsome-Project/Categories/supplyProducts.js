
var main = document.querySelector("main");
var productList = document.querySelector(".productList")
var screenWidth =  window.matchMedia("(max-width: 700px)");

function renderProducts(products) {
    var supply = [];
    for (var i = 0; i < products.length; i++) {
        if (products[i].category === "supply") {
            supply.push(products[i])
        }
    }
    console.log(supply);
    supply.forEach(component => {
        const productBox = document.createElement("div");
        productBox.setAttribute("style", "display:flex; flex-direction:column; justify-content: space-between; align-items: center; text-align: center; border: 1px solid grey; border-radius: 5px;  background-color: white; width: 27%;  margin: 1%; padding: 2%");
        const detailsBtn = document.createElement("button");
        detailsBtn.innerText = "Vezi detalii";
        detailsBtn.setAttribute("style", "visibility: hidden; width: 50%; height:5%; color: white; background:rgba(0,0,0,0.7); font-size: 16px");
        detailsBtn.onclick = function () {
            goToDetails(component);
        };
        productBox.onmouseover = function () {
            detailsBtn.style.visibility = "visible";
            productBox.style.boxShadow = "inset 0 0 40px black";
        };
        productBox.onmouseout = function () {
            detailsBtn.style.visibility = "hidden"
            // productBox.style.borderColor = "grey";
            // productBox.style.borderWidth = "1px";
            productBox.style.boxShadow = "inset 0 0 0px black";
            
        };

        const productImage = document.createElement("img");
        productImage.src = component.src;
        productImage.alt = component.alt;
        productImage.style.width = "80%";

        const productTitle = document.createElement("h4");
        productTitle.innerText = component.title;

        const productDescription = document.createElement("p");
        productDescription.innerText = component.description;

        const productPrice = document.createElement("h4");
        productPrice.innerText = component.price;

        const addToCartButton = document.createElement("button");
        addToCartButton.innerText = "Adauga in cos";
        addToCartButton.setAttribute("style", "color: white; background:rgba(0,0,0,0.7); width: 50%; height: 40px;")

        addToCartButton.onclick = function () {
            addToCart(component);
            addedToCart.style.visibility = "visible";
            addToCartButton.style.backgroundColor = "rgba(214, 49, 49, 0.918)"
            setTimeout(function () {
                addedToCart.style.visibility = "hidden"; 
                addToCartButton.style.backgroundColor = "rgba(0,0,0,0.7)"
            }, 1500);

        };

        const addedToCart = document.createElement("p");
        addedToCart.innerText = "Produsul a fost adaugat in cos!";
        addedToCart.setAttribute("style", "visibility:hidden; margin:1%; font-size: 16px");

        productBox.appendChild(productImage);
        productBox.appendChild(detailsBtn);
        productBox.appendChild(productTitle);
        productBox.appendChild(productDescription);
        productBox.appendChild(productPrice);
        productBox.appendChild(addToCartButton);
        productBox.appendChild(addedToCart);
        productList.appendChild(productBox);
        main.appendChild(productList);

        //Responsiveness
        if (screenWidth.matches) {
             productBox.setAttribute("style", "display:flex; flex-direction:column; justify-content: space-between; align-items: center; text-align: center; border: 1px solid grey;  background-color: white; width: 93%;  margin: 1%; padding: 2%");
            productImage.style.width = "60%";
        }
    });
}

//Load products on page
function fetchProducts() {
    return fetch("http://localhost:3000/api/products", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
        },
    }).then((r) => r.json());
}

fetchProducts().then(renderProducts)

//Post to cart
function addToCart(component) {
    return fetch(`http://localhost:3000/api/cart`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(component)
    })
}

//Post to details page
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
            window.location.assign(`./detailedProduct.html?q=${component.id}`);
        })
}
