// Implementing Interfaces

// 🐨 Create a PaymentMethod interface with:
// - Method: pay(amount: number) returns string

// 🐨 Create a CreditCard class that implements PaymentMethod:
// - Field: cardNumber (string)
// - Constructor that takes cardNumber
// - Implement pay(amount: number) returns "Paid $${amount} with credit card ${cardNumber}"

// 🐨 Create a PayPal class that implements PaymentMethod:
// - Field: email (string)
// - Constructor that takes email
// - Implement pay(amount: number) returns "Paid $${amount} with PayPal ${email}"

// Test your classes
// const creditCard = new CreditCard('1234-5678-9012-3456')
// const paypal = new PayPal('user@example.com')
// console.log(creditCard.pay(100))
// console.log(paypal.pay(50))

// 🐨 When you're done, uncomment this:
// console.log(
// 	'Results:',
// 	JSON.stringify({
// 		creditCard: {
// 			cardNumber: creditCard.cardNumber,
// 			payResult: creditCard.pay(100),
// 			hasPay: typeof creditCard.pay === 'function',
// 		},
// 		paypal: {
// 			email: paypal.email,
// 			payResult: paypal.pay(50),
// 			hasPay: typeof paypal.pay === 'function',
// 		},
// 	}),
// )
