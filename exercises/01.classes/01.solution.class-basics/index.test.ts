import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { product, cart, emptyCart } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('Product class should create instances with name and price', () => {
	assert.strictEqual(
		product.name,
		'Laptop',
		'🚨 Product.name should be "Laptop" - check your class property definition',
	)
	assert.strictEqual(
		product.price,
		999.99,
		'🚨 Product.price should be 999.99 - check your class property definition',
	)
})

await test('Product getDescription should return formatted string', () => {
	assert.strictEqual(
		product.description,
		'Product: Laptop - $999.99',
		'🚨 getDescription() should return "Product: Mouse - $29.99" - check your method implementation and formatting',
	)
})

await test('ShoppingCart should initialize with empty items array', () => {
	assert.strictEqual(
		emptyCart.itemsCount,
		0,
		'🚨 ShoppingCart.items.length should be 0 - check your class property initialization',
	)
})

await test('ShoppingCart addItem should add products to cart', () => {
	assert.strictEqual(
		cart.itemsAfterFirstAdd,
		1,
		'🚨 After adding one item, items.length should be 1 - check your addItem method implementation',
	)
	assert.strictEqual(
		cart.firstItemName,
		'Laptop',
		'🚨 items[0] should be the laptop product - check your addItem method implementation',
	)

	assert.strictEqual(
		cart.itemsCount,
		2,
		'🚨 After adding two items, items.length should be 2 - check your addItem method implementation',
	)
	assert.strictEqual(
		cart.secondItemName,
		'Mouse',
		'🚨 items[1] should be the mouse product - check your addItem method implementation',
	)
})

await test('ShoppingCart getTotal should calculate sum of all item prices', () => {
	assert.strictEqual(
		cart.total,
		1029.98,
		'🚨 getTotal() should return 1029.98 (sum of 999.99 + 29.99) - check your method implementation and price calculation',
	)
})
