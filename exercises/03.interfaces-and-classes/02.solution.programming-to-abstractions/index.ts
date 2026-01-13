// Programming to Abstractions

export interface PaymentMethod {
	pay(amount: number): string
}

export class CreditCard implements PaymentMethod {
	cardNumber: string

	constructor(cardNumber: string) {
		this.cardNumber = cardNumber
	}

	pay(amount: number): string {
		return `Paid $${amount} with credit card ${this.cardNumber}`
	}
}

export class PayPal implements PaymentMethod {
	email: string

	constructor(email: string) {
		this.email = email
	}

	pay(amount: number): string {
		return `Paid $${amount} with PayPal ${this.email}`
	}
}

// ✅ Function accepts interface type, not concrete class
export function processPayment(method: PaymentMethod, amount: number): string {
	return method.pay(amount)
}

const creditCard = new CreditCard('1234-5678-9012-3456')
const paypal = new PayPal('user@example.com')

console.log(processPayment(creditCard, 100))
console.log(processPayment(paypal, 50))

export {}