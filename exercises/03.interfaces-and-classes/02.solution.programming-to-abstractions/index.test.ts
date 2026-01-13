import { testStep, expect } from '@epic-web/workshop-utils/test'
import { CreditCard, PayPal, processPayment } from './index.ts'

await testStep('processPayment should work with CreditCard', async () => {
	const creditCard = new CreditCard('1234-5678-9012-3456')
	const result = processPayment(creditCard, 100)
	expect(
		result,
		'🚨 processPayment() should return "Paid $100 with credit card 1234-5678-9012-3456" - check your function accepts PaymentMethod type',
	).toBe('Paid $100 with credit card 1234-5678-9012-3456')
})

await testStep('processPayment should work with PayPal', async () => {
	const paypal = new PayPal('user@example.com')
	const result = processPayment(paypal, 50)
	expect(
		result,
		'🚨 processPayment() should return "Paid $50 with PayPal user@example.com" - check your function accepts PaymentMethod type',
	).toBe('Paid $50 with PayPal user@example.com')
})

await testStep(
	'processPayment should accept any PaymentMethod implementation',
	async () => {
		const creditCard = new CreditCard('1111-2222-3333-4444')
		const paypal = new PayPal('test@example.com')

		const result1 = processPayment(creditCard, 75)
		const result2 = processPayment(paypal, 25)

		expect(
			result1,
			'🚨 CreditCard payment result should contain "credit card" - check your processPayment function accepts PaymentMethod interface',
		).toContain('credit card')
		expect(
			result2,
			'🚨 PayPal payment result should contain "PayPal" - check your processPayment function accepts PaymentMethod interface',
		).toContain('PayPal')
	},
)
