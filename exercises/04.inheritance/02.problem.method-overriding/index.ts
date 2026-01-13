// Method Overriding

// 🐨 Create a Shape base class with:
// - Field: color (string)
// - Constructor that takes color
// - Method: getArea() returns 0

// 🐨 Create a Circle class that extends Shape:
// - Field: radius (number)
// - Constructor that takes color and radius
// - Override getArea() to return Math.PI * radius ** 2

// 🐨 Create a Rectangle class that extends Shape:
// - Fields: width (number), height (number)
// - Constructor that takes color, width, and height
// - Override getArea() to return width * height

// Test your classes
// const circle = new Circle('red', 5)
// const rectangle = new Rectangle('blue', 10, 20)
// console.log(circle.getArea()) // Should print ~78.54
// console.log(rectangle.getArea()) // Should print 200

export {}