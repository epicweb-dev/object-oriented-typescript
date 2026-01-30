// Comprehensive OOP Practice
// Work through each section, implementing the classes and functions as instructed.

// ============================================================================
// SECTION 1: Class Basics
// ============================================================================

// 🐨 Create a class `Product` with:
// - public fields: name (string), price (number)
// - a constructor that takes name and price
// - a method `getDescription()` that returns "{name}: ${price}"

// 🐨 Create a class `ShoppingCart` with:
// - a public field `items` initialized to an empty array of Product
// - a method `addItem(item: Product)` that adds to items
// - a method `getTotal()` that returns the total price of all items

// Test Section 1:
// const cart = new ShoppingCart()
// cart.addItem(new Product('Mug', 12))
// cart.addItem(new Product('Notebook', 8))
// console.log(cart.getTotal()) // 20

// ============================================================================
// SECTION 2: Private Fields & Defaults
// ============================================================================

// 🐨 Create a class `BankAccount` with:
// - a private field `#balance` (number)
// - a constructor that takes an initial balance (default 0)
// - a method `deposit(amount: number)` that adds to balance
// - a method `withdraw(amount: number)` that subtracts from balance
// - a method `getBalance()` that returns the balance

// 🐨 Create a class `Config` with:
// - public fields: host (string), port (number), role (string)
// - default values: host = 'localhost', port = 3000, role = 'user'

// Test Section 2:
// const account = new BankAccount()
// account.deposit(50)
// account.withdraw(10)
// console.log(account.getBalance()) // 40
// const config = new Config()
// console.log(config.host, config.port, config.role)

// ============================================================================
// SECTION 3: Interfaces & Implementations
// ============================================================================

// 🐨 Create an interface `PaymentMethod` with:
// - pay(amount: number): string

// 🐨 Create a class `CreditCard` that implements PaymentMethod
// - public field: cardNumber (string)
// - pay returns "Paid $${amount} with card ${cardNumber}"

// 🐨 Create a class `PayPal` that implements PaymentMethod
// - public field: email (string)
// - pay returns "Paid $${amount} with PayPal ${email}"

// Test Section 3:
// const card = new CreditCard('1234')
// const paypal = new PayPal('user@example.com')
// console.log(card.pay(25))
// console.log(paypal.pay(25))

// ============================================================================
// SECTION 4: Programming to Abstractions
// ============================================================================

// 🐨 Create a function `processPayment` that:
// - takes a PaymentMethod and an amount
// - returns the result of calling pay on the method

// 🐨 Create a class `GiftCard` that implements PaymentMethod
// - public field: code (string)
// - pay returns "Paid $${amount} with gift card ${code}"

// Test Section 4:
// console.log(processPayment(card, 40))
// console.log(processPayment(new GiftCard('GC-001'), 40))

// ============================================================================
// SECTION 5: Inheritance
// ============================================================================

// 🐨 Create a base class `Package` with:
// - public fields: label (string), weight (number)
// - a method `getLabel()` that returns "{label} ({weight}kg)"

// 🐨 Create a class `Box` that extends Package
// - add a field `width` (number)
// - call super in the constructor

// 🐨 Create a class `Crate` that extends Package
// - add a field `material` (string)
// - call super in the constructor

// Test Section 5:
// const box = new Box('Box A', 5, 10)
// const crate = new Crate('Crate B', 20, 'wood')
// console.log(box.getLabel())
// console.log(crate.getLabel())

// ============================================================================
// SECTION 6: Method Overriding
// ============================================================================

// 🐨 Create a class `Shape` with:
// - a method `getArea()` that returns 0

// 🐨 Create a class `Circle` that extends Shape
// - field: radius (number)
// - override getArea to return Math.PI * radius * radius

// 🐨 Create a class `Rectangle` that extends Shape
// - fields: width (number), height (number)
// - override getArea to return width * height

// Test Section 6:
// console.log(new Circle(2).getArea())
// console.log(new Rectangle(3, 4).getArea())

// ============================================================================
// SECTION 7: Substitutability
// ============================================================================

// 🐨 Create a class `MediaFile` with:
// - a public field `filename` (string)
// - a method `play()` that returns "Playing {filename}"

// 🐨 Create a class `AudioFile` that extends MediaFile
// - override play to return "Playing audio {filename}"

// 🐨 Create a class `VideoFile` that extends MediaFile
// - override play to return "Playing video {filename}"

// 🐨 Create a class `MediaPlayer` with:
// - a method `playFile(file: MediaFile)` that returns file.play()

// Test Section 7:
// const player = new MediaPlayer()
// console.log(player.playFile(new AudioFile('song.mp3')))
// console.log(player.playFile(new VideoFile('movie.mp4')))

// ============================================================================
// SECTION 8: Composition & Dependency Injection
// ============================================================================

// 🐨 Create a class `Logger` with:
// - a method `log(message: string)` that returns `Log: {message}`

// 🐨 Create a class `ConsoleLogger` that extends Logger
// - override log to call console.log and return the same string

// 🐨 Create a class `InMemoryLogger` that extends Logger
// - a private field `#logs` (array of strings)
// - override log to store messages in #logs
// - a method `getLogs()` that returns a copy of #logs

// 🐨 Create a class `ReportService` that takes a Logger in its constructor
// - method `generateReport(title: string)` that logs "Report: {title}"

// Test Section 8:
// const logger = new InMemoryLogger()
// const service = new ReportService(logger)
// service.generateReport('Weekly Summary')
// console.log(logger.getLogs())

export {}
