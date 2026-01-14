// Protected Access Modifier

export class Vehicle {
	protected make: string
	protected model: string

	constructor(make: string, model: string) {
		this.make = make
		this.model = model
	}
}

export class Car extends Vehicle {
	getInfo(): string {
		// ✅ Can access protected fields from parent class
		return `${this.make} ${this.model}`
	}
}

const car = new Car('Toyota', 'Camry')
console.log(car.getInfo()) // ✅ Works - getInfo() is public
// console.log(car.make) // ❌ Error - make is protected
// console.log(car.model) // ❌ Error - model is protected
