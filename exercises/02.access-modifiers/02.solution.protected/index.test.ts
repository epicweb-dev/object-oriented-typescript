import { testStep, expect } from '@epic-web/workshop-utils/test'
import { Car } from './index.ts'

await testStep(
	'Car should inherit from Vehicle and access protected fields',
	async () => {
		const car = new Car('Toyota', 'Camry')
		const info = car.getInfo()
		expect(
			info,
			'🚨 getInfo() should return "Toyota Camry" - check that Car extends Vehicle and accesses protected properties',
		).toBe('Toyota Camry')
	},
)

await testStep('Car should be instance of Vehicle', async () => {
	const car = new Car('Honda', 'Civic')
	expect(
		car instanceof Car,
		'🚨 car should be an instance of Car - check your class definition',
	).toBe(true)
})
