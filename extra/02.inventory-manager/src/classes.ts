// Inventory Manager - OOP Practice Utilities
// Implement the classes and methods marked with 🐨

// ============================================================================
// Interfaces
// ============================================================================

// 🐨 Create a Sellable interface with:
// - calculatePrice(quantity: number): number
// - applyDiscount(percent: number): void
export interface Sellable {
	calculatePrice(quantity: number): number
	applyDiscount(percent: number): void
}

// 🐨 Create a Trackable interface with:
// - getTrackingInfo(): string
// - updateLocation(location: string): void
export interface Trackable {
	getTrackingInfo(): string
	updateLocation(location: string): void
}

// ============================================================================
// Base Class
// ============================================================================

// 🐨 Implement InventoryItem with:
// - private fields #id and #quantity
// - public fields name and basePrice
// - methods: getId, getQuantity, adjustQuantity, getDescription
export class InventoryItem {
	#id: string
	#quantity: number
	name: string
	basePrice: number

	constructor({
		id,
		name,
		quantity,
		basePrice,
	}: {
		id: string
		name: string
		quantity: number
		basePrice: number
	}) {
		this.#id = id
		this.#quantity = quantity
		this.name = name
		this.basePrice = basePrice
	}

	getId(): string {
		return this.#id
	}

	getQuantity(): number {
		return this.#quantity
	}

	adjustQuantity(amount: number): void {
		this.#quantity += amount
	}

	// 🐨 Return a formatted description like "Widget (qty: 3) - $12"
	getDescription(): string {
		return 'TODO: implement getDescription'
	}
}

// ============================================================================
// Inventory Item Types
// ============================================================================

// 🐨 Implement Electronics to extend InventoryItem and implement Sellable, Trackable
export class Electronics extends InventoryItem implements Sellable, Trackable {
	brand: string
	model: string
	serialNumber: string
	warrantyMonths: number
	location: string
	discountPercent = 0

	constructor({
		id,
		name,
		quantity,
		basePrice,
		brand,
		model,
		serialNumber,
		warrantyMonths,
		location,
	}: {
		id: string
		name: string
		quantity: number
		basePrice: number
		brand: string
		model: string
		serialNumber: string
		warrantyMonths: number
		location: string
	}) {
		super({ id, name, quantity, basePrice })
		this.brand = brand
		this.model = model
		this.serialNumber = serialNumber
		this.warrantyMonths = warrantyMonths
		this.location = location
	}

	// 🐨 Calculate price with quantity and discount
	calculatePrice(_quantity: number): number {
		return 0
	}

	// 🐨 Store the discount percent for future calculations
	applyDiscount(percent: number): void {
		this.discountPercent = percent
	}

	// 🐨 Return tracking info with serial number and location
	getTrackingInfo(): string {
		return 'TODO: implement getTrackingInfo'
	}

	updateLocation(location: string): void {
		this.location = location
	}

	// 🐨 Include brand/model in the description
	override getDescription(): string {
		return 'TODO: implement Electronics.getDescription'
	}
}

// 🐨 Implement Clothing to extend InventoryItem and implement Sellable
export class Clothing extends InventoryItem implements Sellable {
	size: string
	color: string
	discountPercent = 0

	constructor({
		id,
		name,
		quantity,
		basePrice,
		size,
		color,
	}: {
		id: string
		name: string
		quantity: number
		basePrice: number
		size: string
		color: string
	}) {
		super({ id, name, quantity, basePrice })
		this.size = size
		this.color = color
	}

	// 🐨 Calculate price with quantity and discount
	calculatePrice(_quantity: number): number {
		return 0
	}

	applyDiscount(percent: number): void {
		this.discountPercent = percent
	}

	// 🐨 Include size/color in the description
	override getDescription(): string {
		return 'TODO: implement Clothing.getDescription'
	}
}

// 🐨 Implement Perishable to extend InventoryItem
export class Perishable extends InventoryItem {
	expirationDate: string

	constructor({
		id,
		name,
		quantity,
		basePrice,
		expirationDate,
	}: {
		id: string
		name: string
		quantity: number
		basePrice: number
		expirationDate: string
	}) {
		super({ id, name, quantity, basePrice })
		this.expirationDate = expirationDate
	}

	// 🐨 Include expiration date in the description
	override getDescription(): string {
		return 'TODO: implement Perishable.getDescription'
	}
}

// ============================================================================
// Composition & Dependency Injection
// ============================================================================

// 🐨 Create a Logger class with a log method
export class Logger {
	log(message: string): string {
		return `Log: ${message}`
	}
}

// 🐨 Extend Logger to log to the console
export class ConsoleLogger extends Logger {
	override log(message: string): string {
		const formatted = super.log(message)
		console.log(formatted)
		return formatted
	}
}

// 🐨 Extend Logger to store logs in memory
export class InMemoryLogger extends Logger {
	#logs: Array<string> = []

	override log(message: string): string {
		const formatted = super.log(message)
		this.#logs.push(formatted)
		return formatted
	}

	getLogs(): Array<string> {
		return [...this.#logs]
	}
}

// 🐨 Implement InventoryManager using dependency injection for logging
export class InventoryManager {
	#logger: Logger

	constructor(logger: Logger) {
		this.#logger = logger
	}

	receiveStock(item: InventoryItem, amount: number): string {
		item.adjustQuantity(amount)
		return this.#logger.log(`Received ${amount} of ${item.name}`)
	}

	shipStock(item: InventoryItem, amount: number): string {
		item.adjustQuantity(-amount)
		return this.#logger.log(`Shipped ${amount} of ${item.name}`)
	}
}
