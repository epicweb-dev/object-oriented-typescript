import assert from 'node:assert/strict'
import { test } from 'node:test'
import { Car } from './index.ts'

await test('Car should inherit from Vehicle and access protected fields', () => {
	const car = new Car('Toyota', 'Camry')
	const info = car.getInfo()
	assert.strictEqual(
		info,
		'Toyota Camry',
		'🚨 getInfo() should return "Toyota Camry" - check that Car extends Vehicle and accesses protected properties',
	)
})

await test('Car should be instance of Vehicle', () => {
	const car = new Car('Honda', 'Civic')
	assert.ok(
		car instanceof Car,
		'🚨 car should be an instance of Car - check your class definition',
	)
})
