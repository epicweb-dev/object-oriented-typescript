import assert from 'node:assert/strict'
import { test } from 'node:test'
// @ts-ignore - these won't appear in the problem file
import { Product, ShoppingCart } from './index.ts'

await test('Product class should create instances with name and price', () => {
	const laptop = new Product('Laptop', 999.99)
	assert.strictEqual(
		laptop.name,
		'Laptop',
		'🚨 Product.name should be "Laptop" - check your class property definition',
	)
	assert.strictEqual(
		laptop.price,
		999.99,
		'🚨 Product.price should be 999.99 - check your class property definition',
	)
})

await test('Product getDescription should return formatted string', () => {
	const mouse = new Product('Mouse', 29.99)
	const description = mouse.getDescription()
	assert.strictEqual(
		description,
		'Product: Mouse - $29.99',
		'🚨 getDescription() should return "Product: Mouse - $29.99" - check your method implementation and formatting',
	)
})

await test('ShoppingCart should initialize with empty items array', () => {
	const cart = new ShoppingCart()
	assert.deepStrictEqual(
		cart.items,
		[],
		'🚨 ShoppingCart.items should be an empty array - check your class property initialization',
	)
	assert.strictEqual(
		cart.items.length,
		0,
		'🚨 ShoppingCart.items.length should be 0 - check your class property initialization',
	)
})

await test('ShoppingCart addItem should add products to cart', () => {
	const cart = new ShoppingCart()
	const laptop = new Product('Laptop', 999.99)
	const mouse = new Product('Mouse', 29.99)

	cart.addItem(laptop)
	assert.strictEqual(
		cart.items.length,
		1,
		'🚨 After adding one item, items.length should be 1 - check your addItem method implementation',
	)
	assert.strictEqual(
		cart.items[0],
		laptop,
		'🚨 items[0] should be the laptop product - check your addItem method implementation',
	)

	cart.addItem(mouse)
	assert.strictEqual(
		cart.items.length,
		2,
		'🚨 After adding two items, items.length should be 2 - check your addItem method implementation',
	)
	assert.strictEqual(
		cart.items[1],
		mouse,
		'🚨 items[1] should be the mouse product - check your addItem method implementation',
	)
})

await test('ShoppingCart getTotal should calculate sum of all item prices', () => {
	const cart = new ShoppingCart()
	const laptop = new Product('Laptop', 999.99)
	const mouse = new Product('Mouse', 29.99)

	cart.addItem(laptop)
	cart.addItem(mouse)

	const total = cart.getTotal()
	assert.strictEqual(
		total,
		1029.98,
		'🚨 getTotal() should return 1029.98 (sum of 999.99 + 29.99) - check your method implementation and price calculation',
	)
})
