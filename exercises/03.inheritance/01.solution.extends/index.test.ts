import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { circle, rectangle } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('Circle should inherit color from Shape', () => {
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
	assert.ok(
		circle.color === 'red',
		'🚨 circle should be an instance of Shape - check that Circle extends Shape',
	)
})

await test('Rectangle should be instance of Shape', () => {
	assert.ok(
		rectangle.color === 'blue',
		'🚨 rectangle should be an instance of Shape - check that Rectangle extends Shape',
	)
})
