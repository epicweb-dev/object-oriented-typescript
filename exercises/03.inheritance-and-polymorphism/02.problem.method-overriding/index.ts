// Method Overriding

class Shape {
	color: string

	constructor(color: string) {
		this.color = color
	}

	// 🐨 Add a getArea() method that returns 0
}

class Circle extends Shape {
	radius: number

	constructor(color: string, radius: number) {
		super(color)
		this.radius = radius
	}

	// 🐨 Override getArea() to return Math.PI * radius ** 2
}

class Rectangle extends Shape {
	width: number
	height: number

	constructor(color: string, width: number, height: number) {
		super(color)
		this.width = width
		this.height = height
	}

	// 🐨 Override getArea() to return width * height
}

// Test getArea methods
// const circle = new Circle('red', 5)
// const rectangle = new Rectangle('blue', 10, 20)
// console.log(circle.getArea()) // Should print ~78.54
// console.log(rectangle.getArea()) // Should print 200

// export { Shape, Circle, Rectangle }
