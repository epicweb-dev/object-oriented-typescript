// Extends - Class Inheritance

class Shape {
	color: string

	constructor(color: string) {
		this.color = color
	}
}

class Circle extends Shape {
	radius: number

	constructor(color: string, radius: number) {
		super(color) // Call parent constructor
		this.radius = radius
	}
}

class Rectangle extends Shape {
	width: number
	height: number

	constructor(color: string, width: number, height: number) {
		super(color) // Call parent constructor
		this.width = width
		this.height = height
	}
}

const circle = new Circle('red', 5)
const rectangle = new Rectangle('blue', 10, 20)

console.log(circle.color) // ✅ Inherited from Shape
console.log(circle.radius) // ✅ Defined in Circle
console.log(rectangle.color) // ✅ Inherited from Shape
console.log(rectangle.width, rectangle.height) // ✅ Defined in Rectangle

const sampleCircle = new Circle('red', 5)
const sampleRectangle = new Rectangle('blue', 10, 20)

console.log(
	'Results:',
	JSON.stringify({
		circle: { color: sampleCircle.color, radius: sampleCircle.radius },
		rectangle: {
			color: sampleRectangle.color,
			width: sampleRectangle.width,
			height: sampleRectangle.height,
		},
	}),
)
