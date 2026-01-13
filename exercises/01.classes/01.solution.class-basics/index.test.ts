import { testStep, expect } from '@epic-web/workshop-utils/test'
import { Product, ShoppingCart } from './index.ts'

await testStep('Product class should create instances with name and price', async () => {
	const laptop = new Product('Laptop', 999.99)
	expect(laptop.name, '🚨 Product.name should be "Laptop" - check your class property definition').toBe('Laptop')
	expect(laptop.price, '🚨 Product.price should be 999.99 - check your class property definition').toBe(999.99)
})

await testStep('Product getDescription should return formatted string', async () => {
	const mouse = new Product('Mouse', 29.99)
	const description = mouse.getDescription()
	expect(description, '🚨 getDescription() should return "Product: Mouse - $29.99" - check your method implementation and formatting').toBe('Product: Mouse - $29.99')
})

await testStep('ShoppingCart should initialize with empty items array', async () => {
	const cart = new ShoppingCart()
	expect(cart.items, '🚨 ShoppingCart.items should be an empty array - check your class property initialization').toEqual([])
	expect(cart.items.length, '🚨 ShoppingCart.items.length should be 0 - check your class property initialization').toBe(0)
})

await testStep('ShoppingCart addItem should add products to cart', async () => {
	const cart = new ShoppingCart()
	const laptop = new Product('Laptop', 999.99)
	const mouse = new Product('Mouse', 29.99)
	
	cart.addItem(laptop)
	expect(cart.items.length, '🚨 After adding one item, items.length should be 1 - check your addItem method implementation').toBe(1)
	expect(cart.items[0], '🚨 items[0] should be the laptop product - check your addItem method implementation').toBe(laptop)
	
	cart.addItem(mouse)
	expect(cart.items.length, '🚨 After adding two items, items.length should be 2 - check your addItem method implementation').toBe(2)
	expect(cart.items[1], '🚨 items[1] should be the mouse product - check your addItem method implementation').toBe(mouse)
})

await testStep('ShoppingCart getTotal should calculate sum of all item prices', async () => {
	const cart = new ShoppingCart()
	const laptop = new Product('Laptop', 999.99)
	const mouse = new Product('Mouse', 29.99)
	
	cart.addItem(laptop)
	cart.addItem(mouse)
	
	const total = cart.getTotal()
	expect(total, '🚨 getTotal() should return 1029.98 (sum of 999.99 + 29.99) - check your method implementation and price calculation').toBe(1029.98)
})
