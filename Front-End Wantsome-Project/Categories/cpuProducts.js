
var main = document.querySelector("main");
var productList = document.querySelector(".productList")
var screenWidth =  window.matchMedia("(max-width: 700px)");


function renderProducts(products) {
    var cpu = [];
    for (var i = 0; i < products.length; i++) {
        if (products[i].category === "cpu") {
            cpu.push(products[i])
        }
    }
    console.log(cpu);
    cpu.forEach(component => {
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



// //Search Bar
// var searchBtn = document.querySelector("#searchBtn");

// function renderSearch(products){
//     searchBtn.addEventListener("click", function(e){
//         e.preventDefault();
//         main.innerHTML = "";
//         var t = 0;
//         var searchInput = document.querySelector("#searchBar");
//         var searchBar = searchInput.value.toUpperCase();
//         const heading = document.createElement("h3");
//         heading.innerText = "Rezultatele cautarii:";
//         heading.style.marginLeft = "20%";
//         main.appendChild(heading);
//         products.forEach(element =>{
           
//             if(element.title.toUpperCase().includes(searchBar)) { 
//             // window.location.replace("products.html?q=" + searchBar);
//             var searchResultBox = document.createElement("div");
//             searchResultBox.setAttribute("style", "width: 70%; padding: 1%; display:flex; justify-content: space-between; align-items: center; margin: 3% auto; border: 1px solid grey; background-color: white;")
            
//             var searchResultImage = document.createElement("img");
//             searchResultImage.src = element.src;
//             searchResultImage.alt = element.alt;
//             searchResultImage.style.width = "30%";
            
//             var searchResultTitle = document.createElement("h5");
//             searchResultTitle.innerText = element.title;
//             searchResultTitle.setAttribute("style", "font-size: 20px; width: 50%;")

//             var searchDetails = document.createElement("button");
//             searchDetails.innerText = "Vezi detalii"
//             searchDetails.setAttribute("style", "width: 15%; padding: 2%; background: transparent; border: 2px outset grey;")
//             searchDetails.onclick = function () {
//                 goToDetails(element);
//             };

//             searchResultBox.appendChild(searchResultImage);
//             searchResultBox.appendChild(searchResultTitle);
//             searchResultBox.appendChild(searchDetails);
           
//             main.appendChild(searchResultBox);
//             t++;
//         } 
//         })
//         if(t === 0){
//             console.log('No results found for: ' + searchInput.value);
//             var searchResultError = document.createElement("p");
//              searchResultError.innerText = `Nu s-a gasit produsul cautat: ${searchInput.value}`;
//              searchResultError.setAttribute("style", "margin:5% 15% 5% 15%; border: 1px solid grey; background-color: white;");
//              main.appendChild(searchResultError);
//         }
//         searchInput.value = "";
// })
// }


// function fetchProducts() {
//     return fetch("http://localhost:3000/api/products", {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${sessionStorage.getItem("token")}`
//         },
//     }).then((r) => r.json());
// }

// fetchProducts().then(renderSearch);


// function goToDetails(component) {
//     return fetch(`http://localhost:3000/api/details`, {
//         method: "POST",
//         headers: {
//             Authorization: `Bearer ${sessionStorage.getItem("token")}`,
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(component),
//         // window.location.assign(`./detailedProduct.html?${component.id}`),
//     })
//         .then(r => {
//             window.location.assign(`./detailedProduct.html?q=${component.id}`);
//         })
// }