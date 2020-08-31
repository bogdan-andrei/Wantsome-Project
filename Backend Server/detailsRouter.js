const express = require("express");

const detailsRouter = express.Router();

var details = [];


detailsRouter.post('/',function(req, res){
    details.push(req.body);
    res.send(details);
    // res.send(req.body)
})

detailsRouter.get("/", function (request, response) {
    response.send(details);
    // response.send(reqest.body);
  });


  detailsRouter.get("/:detailsId", (req, res) => {
    const detailsId = req.params.detailsId;
    const details = details.find(d => d.id === detailsId);
    return res.send(details);
   
  });

  module.exports = detailsRouter;