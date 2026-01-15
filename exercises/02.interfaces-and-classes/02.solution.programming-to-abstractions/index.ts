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

// ✅ Function accepts interface type, not concrete class
function processPayment(method: PaymentMethod, amount: number) {
	return method.pay(amount)
}

const creditCard = new CreditCard('1234-5678-9012-3456')
const paypal = new PayPal('user@example.com')

console.log(processPayment(creditCard, 100))
console.log(processPayment(paypal, 50))

const testCard = new CreditCard('1111-2222-3333-4444')
const testPayPal = new PayPal('test@example.com')

console.log(
	'Results:',
	JSON.stringify({
		creditCard: processPayment(creditCard, 100),
		paypal: processPayment(paypal, 50),
		testCard: processPayment(testCard, 75),
		testPayPal: processPayment(testPayPal, 25),
	}),
)
