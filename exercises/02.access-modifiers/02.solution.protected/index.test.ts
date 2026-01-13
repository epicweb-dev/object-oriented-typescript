import { testStep, expect } from '@epic-web/workshop-utils/test'
import { Car } from './index.ts'

await testStep('Car should inherit from Vehicle and access protected fields', async () => {
	const car = new Car('Toyota', 'Camry')
	const info = car.getInfo()
	expect(info).toBe('Toyota Camry')
})

await testStep('Car should be instance of Vehicle', async () => {
	const car = new Car('Honda', 'Civic')
	expect(car instanceof Car).toBe(true)
})
