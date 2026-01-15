import assert from 'node:assert/strict'
import { test } from 'node:test'
import { CreditCard, PayPal, processPayment } from './index.ts'

await test('processPayment should work with CreditCard', () => {
	const creditCard = new CreditCard('1234-5678-9012-3456')
	const result = processPayment(creditCard, 100)
	assert.strictEqual(
		result,
		'Paid $100 with credit card 1234-5678-9012-3456',
		'🚨 processPayment() should return "Paid $100 with credit card 1234-5678-9012-3456" - check your function accepts PaymentMethod type',
	)
})

await test('processPayment should work with PayPal', () => {
	const paypal = new PayPal('user@example.com')
	const result = processPayment(paypal, 50)
	assert.strictEqual(
		result,
		'Paid $50 with PayPal user@example.com',
		'🚨 processPayment() should return "Paid $50 with PayPal user@example.com" - check your function accepts PaymentMethod type',
	)
})

await test('processPayment should accept any PaymentMethod implementation', () => {
	const creditCard = new CreditCard('1111-2222-3333-4444')
	const paypal = new PayPal('test@example.com')

	const result1 = processPayment(creditCard, 75)
	const result2 = processPayment(paypal, 25)

	assert.ok(
		result1.includes('credit card'),
		'🚨 CreditCard payment result should contain "credit card" - check your processPayment function accepts PaymentMethod interface',
	)
	assert.ok(
		result2.includes('PayPal'),
		'🚨 PayPal payment result should contain "PayPal" - check your processPayment function accepts PaymentMethod interface',
	)
})
