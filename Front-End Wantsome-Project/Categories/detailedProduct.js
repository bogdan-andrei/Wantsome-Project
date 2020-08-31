var container = document.querySelector("#container");


function renderDetailedPage(products){
 
var urlParams = new URLSearchParams(queryString);
// console.log('aici este', urlParams);

var product = urlParams.get('q');
// console.log('final  aici este', product);

products.forEach(element => {
    container.innerHTML = '';
       
        if(element.id === product){

            const productBox = document.createElement("div");
            // productBox.style.width = "90%";
            productBox.setAttribute("style", "display:flex; justify-content: space-between; align-items: center; padding: 3%");
           
            const productTitle = document.createElement("h4");
            productTitle.innerText = element.title;
            productTitle.setAttribute("style", "font-size: 30px;");

            const productImg = document.createElement("img");
            productImg.src = element.src;
            productImg.alt = element.alt;
            productImg.setAttribute("style", "width: 25%");
            
        
            const productDescription = document.createElement("p");
            productDescription.innerText = element.description;
            
            const priceBox = document.createElement("div");
            priceBox.setAttribute("style", "width: 30%; display:flex; flex-direction: column; justify-content: space-between; align-items: center;")
            const productPrice = document.createElement("h4");
            productPrice.innerText = element.price;
            
            const addToCartButton = document.createElement("button");
            addToCartButton.innerText = "Adauga in cos";
            addToCartButton.setAttribute("style", "background-color: transparent; width: 50%; height: 40px;")
            
            const specification = document.createElement("p");
            specification.innerText = element.specification;

            priceBox.appendChild(productPrice);
            priceBox.appendChild(addToCartButton);

            productBox.appendChild(productImg);
            productBox.appendChild(productDescription);
            productBox.appendChild(priceBox);
            
            container.appendChild(productTitle);
            container.appendChild(productBox);
            container.appendChild(specification);




        }
})
}
 
var queryString = window.location.search;
// console.log('aici este', queryString);


function fetchDetails() {
    return  fetch(`http://localhost:3000/api/details/${queryString}`, {
           method: "GET",
           headers: {
               Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            //    "Content-Type": "application/json",
           },
       })
       .then((r)=> r.json())
   }
   
   fetchDetails().then(renderDetailedPage)
   
   
   
//    .then(function(response){
//     var urlParams = new URLSearchParams(queryString);
//     console.log('aici este', urlParams);
    
//     var product = urlParams.get('q');
//     console.log('final  aici este', product);

//     container.innerHTML = '';
//     response.forEach(element => {
       
//         if(element.id === product){

//             var specification = document.createElement("p");
//             specification.innerText = element.specification;
//             container.appendChild(specification)
//         }
// })
//    });