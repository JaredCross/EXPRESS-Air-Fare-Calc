var express = require('express');
var router = express.Router();
var calculate = require('../src/function.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next){
  var departure = req.body.departure;
  var arrival = req.body.arrival;
  console.log(departure, arrival);
  var bags = req.body.baggage;
  var classAdd = req.body.class;
  if (req.body.wifi === 'yes') {
      var wifi = 12;
    } else {
      var wifi = 0;
    }
  var discount = req.body.discount;
  var price = calculate(departure, arrival, bags, classAdd, wifi, discount);
   res.render('index', {total : price});


});



module.exports = router;
