// Programming to Abstractions

interface PaymentMethod {
	pay(amount: number): string
}

class CreditCard implements PaymentMethod {
	cardNumber: string

	constructor(cardNumber: string) {
		this.cardNumber = cardNumber
	}

	pay(amount: number): string {
		return `Paid $${amount} with credit card ${this.cardNumber}`
	}
}

class PayPal implements PaymentMethod {
	email: string

	constructor(email: string) {
		this.email = email
	}

	pay(amount: number): string {
		return `Paid $${amount} with PayPal ${this.email}`
	}
}

// 🐨 Create a processPayment function:
// - Parameters: method (PaymentMethod), amount (number)
// - Returns: string
// - Calls method.pay(amount)

// Test processPayment
// const creditCard = new CreditCard('1234-5678-9012-3456')
// const paypal = new PayPal('user@example.com')
// console.log(processPayment(creditCard, 100))
// console.log(processPayment(paypal, 50))

export {
	CreditCard,
	PayPal,
	// processPayment
}
