import { testStep, expect } from '@epic-web/workshop-utils/test'
import { Circle, Rectangle, Shape } from './index.ts'

await testStep('Shape getArea should return 0', async () => {
	const shape = new Shape('red')
	expect(shape.getArea()).toBe(0)
})

await testStep('Circle should override getArea to calculate circle area', async () => {
	const circle = new Circle('red', 5)
	const area = circle.getArea()
	expect(area).toBeCloseTo(Math.PI * 25, 2)
	expect(area).toBeCloseTo(78.54, 2)
})

await testStep('Rectangle should override getArea to calculate rectangle area', async () => {
	const rectangle = new Rectangle('blue', 10, 20)
	const area = rectangle.getArea()
	expect(area).toBe(200)
})

await testStep('Different shapes should have different area calculations', async () => {
	const circle = new Circle('red', 5)
	const rectangle = new Rectangle('blue', 10, 20)
	
	const circleArea = circle.getArea()
	const rectangleArea = rectangle.getArea()
	
	expect(circleArea).toBeGreaterThan(0)
	expect(rectangleArea).toBeGreaterThan(0)
	expect(circleArea).not.toBe(rectangleArea)
})
