class Pizza {
	constructor(type, price) {
		this.type = type;
		this.amount = price;
		
	}
	getPrice() {
		return this.amount ;
	}
}
module.exports = Pizza;