import { testStep, expect } from '@epic-web/workshop-utils/test'
import { Product, ShoppingCart } from './index.ts'

await testStep('Product class should create instances with name and price', async () => {
	const laptop = new Product('Laptop', 999.99)
	expect(laptop.name).toBe('Laptop')
	expect(laptop.price).toBe(999.99)
})

await testStep('Product getDescription should return formatted string', async () => {
	const mouse = new Product('Mouse', 29.99)
	const description = mouse.getDescription()
	expect(description).toBe('Product: Mouse - $29.99')
})

await testStep('ShoppingCart should initialize with empty items array', async () => {
	const cart = new ShoppingCart()
	expect(cart.items).toEqual([])
	expect(cart.items.length).toBe(0)
})

await testStep('ShoppingCart addItem should add products to cart', async () => {
	const cart = new ShoppingCart()
	const laptop = new Product('Laptop', 999.99)
	const mouse = new Product('Mouse', 29.99)
	
	cart.addItem(laptop)
	expect(cart.items.length).toBe(1)
	expect(cart.items[0]).toBe(laptop)
	
	cart.addItem(mouse)
	expect(cart.items.length).toBe(2)
	expect(cart.items[1]).toBe(mouse)
})

await testStep('ShoppingCart getTotal should calculate sum of all item prices', async () => {
	const cart = new ShoppingCart()
	const laptop = new Product('Laptop', 999.99)
	const mouse = new Product('Mouse', 29.99)
	
	cart.addItem(laptop)
	cart.addItem(mouse)
	
	const total = cart.getTotal()
	expect(total).toBe(1029.98)
})
