const Pizza = require('./Pizza') ;
const ToppingDecorator = require('./ToppingDecorator') ;
console.log("TESTING JENKINS");
var piz = new Pizza("Margherita", 25);
    var price = piz.getPrice();
	console.log(" PRICE => " + price);
 
    var decorated = new ToppingDecorator(piz, 45);
    price = decorated.getPrice();
	console.log(" NEW PRICE => " + price);