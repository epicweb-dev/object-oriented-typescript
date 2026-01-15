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

await test('Shape getArea should return 0', () => {
	const baseShape = new solution.Shape('red')
	assert.strictEqual(
		baseShape.getArea(),
		0,
		'🚨 Shape.getArea() should return 0 - check your base class method implementation',
	)
})

await test('Circle should override getArea to calculate circle area', () => {
	const sampleCircle = new solution.Circle('red', 5)
	const circleArea = sampleCircle.getArea()
	assert.ok(
		Math.abs(circleArea - Math.PI * 25) < 0.01,
		'🚨 Circle.getArea() should be approximately Math.PI * 25 - check that you override getArea() with the circle area formula',
	)
	assert.ok(
		Math.abs(circleArea - 78.54) < 0.01,
		'🚨 Circle.getArea() should be approximately 78.54 - check your circle area calculation (π * radius²)',
	)
})

await test('Rectangle should override getArea to calculate rectangle area', () => {
	const sampleRectangle = new solution.Rectangle('blue', 10, 20)
	const rectangleArea = sampleRectangle.getArea()
	assert.strictEqual(
		rectangleArea,
		200,
		'🚨 Rectangle.getArea() should return 200 (10 * 20) - check that you override getArea() with the rectangle area formula',
	)
})

await test('Different shapes should have different area calculations', () => {
	const sampleCircle = new solution.Circle('red', 5)
	const sampleRectangle = new solution.Rectangle('blue', 10, 20)
	const circleArea = sampleCircle.getArea()
	const rectangleArea = sampleRectangle.getArea()

	assert.ok(
		circleArea > 0,
		'🚨 Circle area should be greater than 0 - check your getArea() override implementation',
	)
	assert.ok(
		rectangleArea > 0,
		'🚨 Rectangle area should be greater than 0 - check your getArea() override implementation',
	)
	assert.notStrictEqual(
		circleArea,
		rectangleArea,
		'🚨 Circle and Rectangle areas should be different - check that each class overrides getArea() with its own calculation',
	)
})
