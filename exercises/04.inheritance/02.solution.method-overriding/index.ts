// Method Overriding

export class Shape {
	color: string

	constructor(color: string) {
		this.color = color
	}

	getArea(): number {
		return 0
	}
}

export class Circle extends Shape {
	radius: number

	constructor(color: string, radius: number) {
		super(color)
		this.radius = radius
	}

	// Override parent method
	getArea(): number {
		return Math.PI * this.radius ** 2
	}
}

export class Rectangle extends Shape {
	width: number
	height: number

	constructor(color: string, width: number, height: number) {
		super(color)
		this.width = width
		this.height = height
	}

	// Override parent method
	getArea(): number {
		return this.width * this.height
	}
}

const circle = new Circle('red', 5)
const rectangle = new Rectangle('blue', 10, 20)

console.log(circle.getArea()) // ~78.54
console.log(rectangle.getArea()) // 200

export {}