// Inventory Manager - OOP Practice Utilities
// Implement the classes and interfaces marked with 🐨

// ============================================================================
// Interfaces
// ============================================================================

// 🐨 Create a Sellable interface with:
// - calculatePrice(quantity: number): number
// - applyDiscount(percent: number): void

// 🐨 Create a Trackable interface with:
// - getTrackingInfo(): string
// - updateLocation(location: string): void

// ============================================================================
// Base Class
// ============================================================================

// 🐨 Implement InventoryItem with:
// - private fields #id and #quantity
// - public fields name and basePrice
// - methods: getId, getQuantity, adjustQuantity, getDescription

// ============================================================================
// Inventory Item Types
// ============================================================================

// 🐨 Implement Electronics to extend InventoryItem and implement Sellable, Trackable
// - fields: brand, model, serialNumber, warrantyMonths, location, discountPercent
// - methods: calculatePrice, applyDiscount, getTrackingInfo, updateLocation
// - override getDescription to include brand/model

// 🐨 Implement Clothing to extend InventoryItem and implement Sellable
// - fields: size, color, discountPercent
// - methods: calculatePrice, applyDiscount
// - override getDescription to include size/color

// 🐨 Implement Perishable to extend InventoryItem
// - field: expirationDate
// - override getDescription to include expiration date

// ============================================================================
// Composition & Dependency Injection
// ============================================================================

// 🐨 Create a Logger class with:
// - log(message: string): string

// 🐨 Extend Logger with ConsoleLogger
// - override log to call console.log

// 🐨 Extend Logger with InMemoryLogger
// - private field #logs
// - override log to store logs
// - getLogs(): Array<string>

// 🐨 Implement InventoryManager using dependency injection for logging
// - constructor takes Logger
// - receiveStock and shipStock log actions

export {}
