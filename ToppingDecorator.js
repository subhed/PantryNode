const Pizza = require('./Pizza') ;
class ToppingDecorator {
	constructor( piz, price) {
		this.pizza = piz;
		this.amount = price;
	}
	getPrice() {
		return (this.pizza.getPrice() + this.amount);
	}
}
module.exports = ToppingDecorator;