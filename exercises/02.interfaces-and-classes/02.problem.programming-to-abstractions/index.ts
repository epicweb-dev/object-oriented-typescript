// Programming to Abstractions

// 🐨 Define the PaymentMethod interface:
// - Method: pay(amount: number) returns string

// 🐨 Create a CreditCard class implementing PaymentMethod:
// - Field: cardNumber (string)
// - Constructor that takes cardNumber
// - Implement pay(amount: number) returns "Paid $${amount} with credit card ${cardNumber}"

// Test CreditCard
// const creditCard = new CreditCard('1234-5678-9012-3456')
// console.log(creditCard)

// 🐨 Create a PayPal class implementing PaymentMethod:
// - Field: email (string)
// - Constructor that takes email
// - Implement pay(amount: number) returns "Paid $${amount} with PayPal ${email}"

// Test PayPal
// const paypal = new PayPal('user@example.com')
// console.log(paypal)

// 🐨 Create a processPayment function:
// - Parameters: method (PaymentMethod), amount (number)
// - Returns: string
// - Calls method.pay(amount)

// Test processPayment
// console.log(processPayment(creditCard, 100))
// console.log(processPayment(paypal, 50))

// export { CreditCard, PayPal, processPayment }
