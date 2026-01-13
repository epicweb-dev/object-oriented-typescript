import { testStep, expect } from '@epic-web/workshop-utils/test'
import { Circle, Rectangle, Shape } from './index.ts'

await testStep('Shape getArea should return 0', async () => {
	const shape = new Shape('red')
	expect(
		shape.getArea(),
		'🚨 Shape.getArea() should return 0 - check your base class method implementation',
	).toBe(0)
})

await testStep(
	'Circle should override getArea to calculate circle area',
	async () => {
		const circle = new Circle('red', 5)
		const area = circle.getArea()
		expect(
			area,
			'🚨 Circle.getArea() should be approximately Math.PI * 25 - check that you override getArea() with the circle area formula',
		).toBeCloseTo(Math.PI * 25, 2)
		expect(
			area,
			'🚨 Circle.getArea() should be approximately 78.54 - check your circle area calculation (π * radius²)',
		).toBeCloseTo(78.54, 2)
	},
)

await testStep(
	'Rectangle should override getArea to calculate rectangle area',
	async () => {
		const rectangle = new Rectangle('blue', 10, 20)
		const area = rectangle.getArea()
		expect(
			area,
			'🚨 Rectangle.getArea() should return 200 (10 * 20) - check that you override getArea() with the rectangle area formula',
		).toBe(200)
	},
)

await testStep(
	'Different shapes should have different area calculations',
	async () => {
		const circle = new Circle('red', 5)
		const rectangle = new Rectangle('blue', 10, 20)

		const circleArea = circle.getArea()
		const rectangleArea = rectangle.getArea()

		expect(
			circleArea,
			'🚨 Circle area should be greater than 0 - check your getArea() override implementation',
		).toBeGreaterThan(0)
		expect(
			rectangleArea,
			'🚨 Rectangle area should be greater than 0 - check your getArea() override implementation',
		).toBeGreaterThan(0)
		expect(
			circleArea,
			'🚨 Circle and Rectangle areas should be different - check that each class overrides getArea() with its own calculation',
		).not.toBe(rectangleArea)
	},
)
