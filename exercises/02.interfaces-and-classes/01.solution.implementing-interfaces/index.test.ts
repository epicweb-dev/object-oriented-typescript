import assert from 'node:assert/strict'
import { test } from 'node:test'
import { CreditCard, PayPal } from './index.ts'

await test('CreditCard should implement PaymentMethod interface', () => {
	const creditCard = new CreditCard('1234-5678-9012-3456')
	assert.strictEqual(
		creditCard.cardNumber,
		'1234-5678-9012-3456',
		'🚨 CreditCard.cardNumber should be "1234-5678-9012-3456" - check your class property definition',
	)
	const result = creditCard.pay(100)
	assert.strictEqual(
		result,
		'Paid $100 with credit card 1234-5678-9012-3456',
		'🚨 pay() should return "Paid $100 with credit card 1234-5678-9012-3456" - check your PaymentMethod interface implementation',
	)
})

await test('PayPal should implement PaymentMethod interface', () => {
	const paypal = new PayPal('user@example.com')
	assert.strictEqual(
		paypal.email,
		'user@example.com',
		'🚨 PayPal.email should be "user@example.com" - check your class property definition',
	)
	const result = paypal.pay(50)
	assert.strictEqual(
		result,
		'Paid $50 with PayPal user@example.com',
		'🚨 pay() should return "Paid $50 with PayPal user@example.com" - check your PaymentMethod interface implementation',
	)
})

await test('Both payment methods should have pay method', () => {
	const creditCard = new CreditCard('1234-5678-9012-3456')
	const paypal = new PayPal('user@example.com')

	assert.ok(
		typeof creditCard.pay === 'function',
		'🚨 CreditCard.pay should be a function - check that you implemented the PaymentMethod interface',
	)
	assert.ok(
		typeof paypal.pay === 'function',
		'🚨 PayPal.pay should be a function - check that you implemented the PaymentMethod interface',
	)
})
