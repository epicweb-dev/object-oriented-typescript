import assert from 'node:assert/strict'
import { test } from 'node:test'
import { Circle, Rectangle, Shape } from './index.ts'

await test('Shape getArea should return 0', () => {
	const shape = new Shape('red')
	assert.strictEqual(
		shape.getArea(),
		0,
		'🚨 Shape.getArea() should return 0 - check your base class method implementation',
	)
})

await test('Circle should override getArea to calculate circle area', () => {
	const circle = new Circle('red', 5)
	const area = circle.getArea()
	assert.ok(
		Math.abs(area - Math.PI * 25) < 0.01,
		'🚨 Circle.getArea() should be approximately Math.PI * 25 - check that you override getArea() with the circle area formula',
	)
	assert.ok(
		Math.abs(area - 78.54) < 0.01,
		'🚨 Circle.getArea() should be approximately 78.54 - check your circle area calculation (π * radius²)',
	)
})

await test('Rectangle should override getArea to calculate rectangle area', () => {
	const rectangle = new Rectangle('blue', 10, 20)
	const area = rectangle.getArea()
	assert.strictEqual(
		area,
		200,
		'🚨 Rectangle.getArea() should return 200 (10 * 20) - check that you override getArea() with the rectangle area formula',
	)
})

await test('Different shapes should have different area calculations', () => {
	const circle = new Circle('red', 5)
	const rectangle = new Rectangle('blue', 10, 20)

	const circleArea = circle.getArea()
	const rectangleArea = rectangle.getArea()

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
