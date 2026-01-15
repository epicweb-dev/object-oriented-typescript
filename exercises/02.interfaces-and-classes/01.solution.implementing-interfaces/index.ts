// Implementing Interfaces

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

const creditCard = new CreditCard('1234-5678-9012-3456')
const paypal = new PayPal('user@example.com')

console.log(creditCard.pay(100))
console.log(paypal.pay(50))

console.log(
	'Results:',
	JSON.stringify({
		creditCard: {
			cardNumber: creditCard.cardNumber,
			payResult: creditCard.pay(100),
			hasPay: typeof creditCard.pay === 'function',
		},
		paypal: {
			email: paypal.email,
			payResult: paypal.pay(50),
			hasPay: typeof paypal.pay === 'function',
		},
	}),
)
