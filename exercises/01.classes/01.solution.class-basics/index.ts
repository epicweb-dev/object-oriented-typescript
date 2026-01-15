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

const sampleCart = new ShoppingCart()
const emptyCart = new ShoppingCart()
const sampleLaptop = new Product('Laptop', 999.99)
const sampleMouse = new Product('Mouse', 29.99)
sampleCart.addItem(sampleLaptop)
const afterFirstAddCount = sampleCart.items.length
sampleCart.addItem(sampleMouse)

console.log(
	'Results JSON:',
	JSON.stringify({
		product: {
			name: sampleLaptop.name,
			price: sampleLaptop.price,
			description: sampleLaptop.getDescription(),
		},
		cart: {
			itemsCount: sampleCart.items.length,
			itemsAfterFirstAdd: afterFirstAddCount,
			firstItemName: sampleCart.items[0]?.name,
			secondItemName: sampleCart.items[1]?.name,
			total: sampleCart.getTotal(),
		},
		emptyCart: {
			itemsCount: emptyCart.items.length,
		},
	}),
)
