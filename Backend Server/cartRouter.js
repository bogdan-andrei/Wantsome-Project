const express = require("express");

const cartRouter = express.Router();

var cart = [];

cartRouter.post('/',function(req, res){
    cart.push(req.body);
    res.send(cart);
})

cartRouter.get("/", function (request, response) {
    response.send(cart);
  });

cartRouter.delete("/:cartProductId", function (request, response) {
    const cartProductId = request.params.cartProductId;
  
    // immutable - NU iti modifica array-ul initial
    cart = cart.filter(p => p.id !== cartProductId);
  
    response.send(cartProductId);
  });

cartRouter.patch("/:cartProductId", (req, res) => {
    const cartProductId = req.params.cartProductId;
    const body = req.body;
  
    let cartProduct = cart.find(p => p.id === cartProductId);
  
    if (!cartProduct) {
      return res.send("Not found.");
    }
  
    Object.assign(cartProduct, body);
  
    res.send(cartProduct);
  });


module.exports = cartRouter;