// Programming to Abstractions

// 🐨 Define the PaymentMethod interface:
// - Method: pay(amount: number) returns string

// 🐨 Create a CreditCard class implementing PaymentMethod:
// - Field: cardNumber (string)
// - Constructor that takes cardNumber
// - Implement pay(amount: number) returns "Paid $${amount} with credit card ${cardNumber}"

// 🐨 Create a PayPal class implementing PaymentMethod:
// - Field: email (string)
// - Constructor that takes email
// - Implement pay(amount: number) returns "Paid $${amount} with PayPal ${email}"

// 🐨 Create a processPayment function:
// - Parameters: method (PaymentMethod), amount (number)
// - Returns: string
// - Calls method.pay(amount)

// Test your code
// const creditCard = new CreditCard('1234-5678-9012-3456')
// const paypal = new PayPal('user@example.com')
// console.log(processPayment(creditCard, 100))
// console.log(processPayment(paypal, 50))

// 🐨 Export your classes and function so we can verify your work
// 💰 Export the classes and function you created
