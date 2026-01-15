// Creating Classes

class Product {
	name: string
	price: number

	constructor(name: string, price: number) {
		this.name = name
		this.price = price
	}

	getDescription(): string {
		return `Product: ${this.name} - $${this.price}`
	}
}

class ShoppingCart {
	items: Array<Product>

	constructor() {
		this.items = []
	}

	addItem(product: Product): void {
		this.items.push(product)
	}

	getTotal(): number {
		return this.items.reduce((sum, item) => sum + item.price, 0)
	}
}

const laptop = new Product('Laptop', 999.99)
const mouse = new Product('Mouse', 29.99)

console.log(laptop.getDescription())
console.log(mouse.getDescription())

const cart = new ShoppingCart()
cart.addItem(laptop)
cart.addItem(mouse)
console.log(`Cart total: $${cart.getTotal()}`)

export { Product, ShoppingCart }
