// Protected Access Modifier

// 🐨 Create a Vehicle base class with:
// - Protected field: make (string)
// - Protected field: model (string)
// - Constructor that takes make and model

// 🐨 Create a Car class that extends Vehicle:
// - Public method: getInfo() returns "{make} {model}"
//   - Should use the protected fields from Vehicle

// Test your classes
// const car = new Car('Toyota', 'Camry')
// console.log(car.getInfo()) // ✅ Should print "Toyota Camry"
// console.log(car.make) // ❌ Should error - make is protected
// console.log(car.model) // ❌ Should error - model is protected

export {}
