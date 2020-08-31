// var searchBar = document.querySelector("#searchBar");
// var searchBtn = document.querySelector("#searchBtn");
// var main = document.querySelector("main");

// function renderSearch(products){
//     products.forEach(element =>{
//         searchBtn.addEventListener("click", function(e){
//             if(element.title.includes(searchBar.value)) { //trebuie sa verificam daca se iau si upper si lower
//                 main.innerHTML = '';
//             searchBar.value = '';
//             var searchResultBox = document.createElement("div");
            
//             var searchResultImage = document.createElement("img");
//             searchResultImage.src = element.src;
//             searchResultImage.alt = element.alt;

//             var searchResultTitle = document.createElement("h5");
//             searchResultTitle.innerText = element.title;

//             var searchResultPrice= document.createElement("h5");
//             searchResultPrice.innerText = element.price;
            

//             searchResultBox.appendChild(searchResultImage);
//             searchResultBox.appendChild(searchResultTitle);
//             searchResultBox.appendChild(searchResultPrice);

//             main.appendChild(searchResultBox);
// }
// })
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

// fetchProducts().then(renderSearch)