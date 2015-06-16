module.exports = function(departure, arrival, baggage, classAdd, wifiCharge, discountToFunc) {
    var initial;
    var total;
    var discVar;

      //Conditionals to determine base price
      if (departure === 'invalid' && arrival === 'invalid') {
        return "Please choose a departure and arrival city";
      } else if ( departure === arrival) {
        return "That choice is on sale! It's free to go absolutely nowhere!";
      } else if ( departure === "invalid" || arrival === "invalid") {
        return "Please make sure to choose both a departure city and arrival city";
      } else if (departure == "chicago" && arrival == "la") {
        initial = 350;
      } else if (departure == "chicago" &&  arrival == "newyork") {
        initial = 250;
      } else if (departure == "la" && arrival =="chicago") {
        initial = 350;
      } else if (departure == "la" && arrival =="newyork") {
        initial = 545;
      } else if (departure == "newyork" && arrival== "chicago") {
        initial = 250;
      } else if (departure == "newyork" && arrival== "la") {
        initial = 545;
      } else {
        initial = 0;
      }

      //Calculate discount to apply

      if (discountToFunc === "10OFF" || discountToFunc === "10off") {
        discVar = .9;
      } else if ( discountToFunc === "20OFF" || discountToFunc === "20off") {
        discVar = .8;
      } else {
        discVar = 1;
      }

      //Conditional to eliminate negative bag count reducing the price

      if (baggage < 0) {
        baggage = 0;
      }

      //Calculate total price and return to caller fixed to two decimals.
      total = (discVar * initial) + (baggage * 25) + Number(classAdd)
       + Number(wifiCharge);


        return "The price for that trip is: $"+total.toFixed(2);




}
