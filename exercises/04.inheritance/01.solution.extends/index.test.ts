import { testStep, expect } from '@epic-web/workshop-utils/test'
import { Circle, Rectangle, Shape } from './index.ts'

await testStep('Circle should inherit color from Shape', async () => {
	const circle = new Circle('red', 5)
	expect(circle.color, '🚨 Circle.color should be "red" - check that Circle extends Shape and inherits the color property').toBe('red')
	expect(circle.radius, '🚨 Circle.radius should be 5 - check your Circle constructor parameter assignment').toBe(5)
})

await testStep('Rectangle should inherit color from Shape', async () => {
	const rectangle = new Rectangle('blue', 10, 20)
	expect(rectangle.color, '🚨 Rectangle.color should be "blue" - check that Rectangle extends Shape and inherits the color property').toBe('blue')
	expect(rectangle.width, '🚨 Rectangle.width should be 10 - check your Rectangle constructor parameter assignment').toBe(10)
	expect(rectangle.height, '🚨 Rectangle.height should be 20 - check your Rectangle constructor parameter assignment').toBe(20)
})

await testStep('Circle should be instance of Shape', async () => {
	const circle = new Circle('green', 3)
	expect(circle instanceof Circle, '🚨 circle should be an instance of Circle - check your class definition').toBe(true)
	expect(circle instanceof Shape, '🚨 circle should be an instance of Shape - check that Circle extends Shape').toBe(true)
})

await testStep('Rectangle should be instance of Shape', async () => {
	const rectangle = new Rectangle('yellow', 5, 5)
	expect(rectangle instanceof Rectangle, '🚨 rectangle should be an instance of Rectangle - check your class definition').toBe(true)
	expect(rectangle instanceof Shape, '🚨 rectangle should be an instance of Shape - check that Rectangle extends Shape').toBe(true)
})
