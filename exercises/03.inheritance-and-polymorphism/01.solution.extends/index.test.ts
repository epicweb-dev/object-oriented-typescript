import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('Shape class should be exported', () => {
	assert.ok(
		'Shape' in solution,
		'🚨 Make sure you export "Shape" - add: export { Shape, Circle, Rectangle }',
	)
})

await test('Circle class should be exported', () => {
	assert.ok(
		'Circle' in solution,
		'🚨 Make sure you export "Circle" - add: export { Shape, Circle, Rectangle }',
	)
})

await test('Rectangle class should be exported', () => {
	assert.ok(
		'Rectangle' in solution,
		'🚨 Make sure you export "Rectangle" - add: export { Shape, Circle, Rectangle }',
	)
})

await test('Circle should inherit color from Shape', () => {
	const sampleCircle = new solution.Circle('red', 5)
	assert.strictEqual(
		sampleCircle.color,
		'red',
		'🚨 Circle.color should be "red" - check that Circle extends Shape and inherits the color property',
	)
	assert.strictEqual(
		sampleCircle.radius,
		5,
		'🚨 Circle.radius should be 5 - check your Circle constructor parameter assignment',
	)
})

await test('Rectangle should inherit color from Shape', () => {
	const sampleRectangle = new solution.Rectangle('blue', 10, 20)
	assert.strictEqual(
		sampleRectangle.color,
		'blue',
		'🚨 Rectangle.color should be "blue" - check that Rectangle extends Shape and inherits the color property',
	)
	assert.strictEqual(
		sampleRectangle.width,
		10,
		'🚨 Rectangle.width should be 10 - check your Rectangle constructor parameter assignment',
	)
	assert.strictEqual(
		sampleRectangle.height,
		20,
		'🚨 Rectangle.height should be 20 - check your Rectangle constructor parameter assignment',
	)
})

await test('Circle should be instance of Shape', () => {
	const sampleCircle = new solution.Circle('red', 5)
	assert.ok(
		sampleCircle instanceof solution.Shape,
		'🚨 circle should be an instance of Shape - check that Circle extends Shape',
	)
})

await test('Rectangle should be instance of Shape', () => {
	const sampleRectangle = new solution.Rectangle('blue', 10, 20)
	assert.ok(
		sampleRectangle instanceof solution.Shape,
		'🚨 rectangle should be an instance of Shape - check that Rectangle extends Shape',
	)
})
