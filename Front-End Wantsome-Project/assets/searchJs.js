//Search Bar
var main = document.querySelector("main");
var searchBtn = document.querySelector("#searchBtn");

function renderSearch(products){
    searchBtn.addEventListener("click", function(e){
        e.preventDefault();
        main.innerHTML = "";
        var t = 0;
        var searchInput = document.querySelector("#searchBar");
        var searchBar = searchInput.value.toUpperCase();
        const heading = document.createElement("h3");
        heading.innerText = "Rezultatele cautarii:";
        heading.style.marginLeft = "20%";
        main.appendChild(heading);
        products.forEach(element =>{
           
            if(element.title.toUpperCase().includes(searchBar)) { 
            var searchResultBox = document.createElement("div");
            searchResultBox.setAttribute("style", "width: 70%; padding: 1%; display:flex; justify-content: space-between; align-items: center; margin: 3% auto; border: 1px solid grey; background-color: white; color: black;")
            
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
             searchResultError.setAttribute("style", "margin:5% 15% 5% 15%; border: 1px solid grey; background-color: white; color: black");
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
        // window.location.assign(`./detailedProduct.html?${component.id}`),
    })
        .then(r => {
            window.location.assign(`../../Categories/detailedProduct.html?q=${component.id}`);
        })
}