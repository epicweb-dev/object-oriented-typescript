import { testStep, expect } from '@epic-web/workshop-utils/test'
import { Circle, Rectangle, Shape } from './index.ts'

await testStep('Circle should inherit color from Shape', async () => {
	const circle = new Circle('red', 5)
	expect(circle.color).toBe('red')
	expect(circle.radius).toBe(5)
})

await testStep('Rectangle should inherit color from Shape', async () => {
	const rectangle = new Rectangle('blue', 10, 20)
	expect(rectangle.color).toBe('blue')
	expect(rectangle.width).toBe(10)
	expect(rectangle.height).toBe(20)
})

await testStep('Circle should be instance of Shape', async () => {
	const circle = new Circle('green', 3)
	expect(circle instanceof Circle).toBe(true)
	expect(circle instanceof Shape).toBe(true)
})

await testStep('Rectangle should be instance of Shape', async () => {
	const rectangle = new Rectangle('yellow', 5, 5)
	expect(rectangle instanceof Rectangle).toBe(true)
	expect(rectangle instanceof Shape).toBe(true)
})
