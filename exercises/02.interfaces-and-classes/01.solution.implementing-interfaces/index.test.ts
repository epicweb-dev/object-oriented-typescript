import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('CreditCard class should be exported', () => {
	assert.ok(
		'CreditCard' in solution,
		'🚨 Make sure you export "CreditCard" - add: export { CreditCard, PayPal }',
	)
})

await test('PayPal class should be exported', () => {
	assert.ok(
		'PayPal' in solution,
		'🚨 Make sure you export "PayPal" - add: export { CreditCard, PayPal }',
	)
})

await test('CreditCard should implement PaymentMethod interface', () => {
	const creditCard = new solution.CreditCard('1234-5678-9012-3456')
	assert.strictEqual(
		creditCard.cardNumber,
		'1234-5678-9012-3456',
		'🚨 CreditCard.cardNumber should be "1234-5678-9012-3456" - check your class property definition',
	)
	assert.strictEqual(
		creditCard.pay(100),
		'Paid $100 with credit card 1234-5678-9012-3456',
		'🚨 pay() should return "Paid $100 with credit card 1234-5678-9012-3456" - check your PaymentMethod interface implementation',
	)
})

await test('PayPal should implement PaymentMethod interface', () => {
	const paypal = new solution.PayPal('user@example.com')
	assert.strictEqual(
		paypal.email,
		'user@example.com',
		'🚨 PayPal.email should be "user@example.com" - check your class property definition',
	)
	assert.strictEqual(
		paypal.pay(50),
		'Paid $50 with PayPal user@example.com',
		'🚨 pay() should return "Paid $50 with PayPal user@example.com" - check your PaymentMethod interface implementation',
	)
})

await test('Both payment methods should have pay method', () => {
	const creditCard = new solution.CreditCard('1234-5678-9012-3456')
	const paypal = new solution.PayPal('user@example.com')
	assert.ok(
		typeof creditCard.pay === 'function',
		'🚨 CreditCard.pay should be a function - check that you implemented the PaymentMethod interface',
	)
	assert.ok(
		typeof paypal.pay === 'function',
		'🚨 PayPal.pay should be a function - check that you implemented the PaymentMethod interface',
	)
})
