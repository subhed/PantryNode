const Pizza = require('./Pizza') ;
const ToppingDecorator = require('./ToppingDecorator') ;
var piz = new Pizza("Margherita", 25);
    var price = piz.getPrice();
	console.log(" PRICE => " + price);
 
    var decorated = new ToppingDecorator(piz, 10);
    price = decorated.getPrice();
	console.log(" NEW PRICE => " + price);