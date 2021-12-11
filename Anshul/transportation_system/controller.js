var express = require ('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render("public/index")
  });
  
  router.post('/', (req,res) => {
    if (req.body.fullname == '')
        console.log("Please enter some value")
        else
        console.log(req.body.fullname);
  });

  function update(req,res) {
    var num = (req.body.fullname)
    

  }
  module.exports = router;