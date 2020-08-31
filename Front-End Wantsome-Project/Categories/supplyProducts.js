
var main = document.querySelector("main");
var productList = document.querySelector(".productList")
var screenWidth =  window.matchMedia("(min-width: 700px)");

function renderProducts(products) {
    var supply = [];
    for (var i = 0; i < products.length; i++) {
        if (products[i].category === "supply") {
            supply.push(products[i])
        }
    }
    console.log(supply);
    supply.forEach(component => {
        var productBox = document.createElement("div");
    
        var productImage = document.createElement("img");
        productImage.src = component.src;
        productImage.alt = component.alt;

        var productTitle = document.createElement("h4");
        productTitle.innerText = component.title;

        var productDescription = document.createElement("p");
        productDescription.innerText = component.description;

        var productPrice = document.createElement("h4");
        productPrice.innerText = component.price;

        var addToCartButton = document.createElement("button");
        addToCartButton.innerText = "Adauga in cos"
        addToCartButton.setAttribute("style", "background-color: transparent; width: 50%; height: 40px;")

        if(screenWidth.matches){
            productList.setAttribute("style", "width: 100%; display:flex; justify-content: space-between; flex-wrap: wrap");
            productBox.setAttribute("style", "display:flex; flex-direction:column; justify-content: space-between; align-items: center; text-align: center; border: 1px solid black; width: 25%;  margin: 1%; padding: 2%");
            productImage.style.width = "80%";
        } else {
            productList.setAttribute("style", "width: 100%; display:flex; flex-direction: column; justify-content: space-between; ");
            productBox.setAttribute("style", "display:flex; flex-direction:column; justify-content: space-between; align-items: center; text-align: center; border: 1px solid black; width: 93%;  margin: 1%; padding: 2%");
            productImage.style.width = "60%";
        }

        productBox.appendChild(productImage);
        productBox.appendChild(productTitle);
        productBox.appendChild(productDescription);
        productBox.appendChild(productPrice);
        productBox.appendChild(addToCartButton);

        productList.appendChild(productBox);
        main.appendChild(productList);
    });
}

function fetchProducts() {
    return fetch("http://localhost:3000/api/products", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem["token"]}`
        },
    }).then((r) => r.json());
}

fetchProducts().then(renderProducts)



