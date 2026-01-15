import assert from 'node:assert/strict'
import { test } from 'node:test'
import { Circle, Rectangle, Shape } from './index.ts'

await test('Circle should inherit color from Shape', () => {
	const circle = new Circle('red', 5)
	assert.strictEqual(
		circle.color,
		'red',
		'🚨 Circle.color should be "red" - check that Circle extends Shape and inherits the color property',
	)
	assert.strictEqual(
		circle.radius,
		5,
		'🚨 Circle.radius should be 5 - check your Circle constructor parameter assignment',
	)
})

await test('Rectangle should inherit color from Shape', () => {
	const rectangle = new Rectangle('blue', 10, 20)
	assert.strictEqual(
		rectangle.color,
		'blue',
		'🚨 Rectangle.color should be "blue" - check that Rectangle extends Shape and inherits the color property',
	)
	assert.strictEqual(
		rectangle.width,
		10,
		'🚨 Rectangle.width should be 10 - check your Rectangle constructor parameter assignment',
	)
	assert.strictEqual(
		rectangle.height,
		20,
		'🚨 Rectangle.height should be 20 - check your Rectangle constructor parameter assignment',
	)
})

await test('Circle should be instance of Shape', () => {
	const circle = new Circle('green', 3)
	assert.ok(
		circle instanceof Circle,
		'🚨 circle should be an instance of Circle - check your class definition',
	)
	assert.ok(
		circle instanceof Shape,
		'🚨 circle should be an instance of Shape - check that Circle extends Shape',
	)
})

await test('Rectangle should be instance of Shape', () => {
	const rectangle = new Rectangle('yellow', 5, 5)
	assert.ok(
		rectangle instanceof Rectangle,
		'🚨 rectangle should be an instance of Rectangle - check your class definition',
	)
	assert.ok(
		rectangle instanceof Shape,
		'🚨 rectangle should be an instance of Shape - check that Rectangle extends Shape',
	)
})
