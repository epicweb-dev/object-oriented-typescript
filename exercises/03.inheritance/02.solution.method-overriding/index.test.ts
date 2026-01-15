import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { shapeArea, circleArea, rectangleArea } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('Shape getArea should return 0', () => {
	assert.strictEqual(
		shapeArea,
		0,
		'🚨 Shape.getArea() should return 0 - check your base class method implementation',
	)
})

await test('Circle should override getArea to calculate circle area', () => {
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
	assert.strictEqual(
		rectangleArea,
		200,
		'🚨 Rectangle.getArea() should return 200 (10 * 20) - check that you override getArea() with the rectangle area formula',
	)
})

await test('Different shapes should have different area calculations', () => {
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
