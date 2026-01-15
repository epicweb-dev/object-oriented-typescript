import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('processPayment function should be exported', () => {
	assert.ok(
		'processPayment' in solution,
		'🚨 Make sure you export "processPayment" - add: export { CreditCard, PayPal, processPayment }',
	)
})

await test('processPayment should work with CreditCard', () => {
	const creditCard = new solution.CreditCard('1234-5678-9012-3456')
	assert.strictEqual(
		solution.processPayment(creditCard, 100),
		'Paid $100 with credit card 1234-5678-9012-3456',
		'🚨 processPayment() should return "Paid $100 with credit card 1234-5678-9012-3456" - check your function accepts PaymentMethod type',
	)
})

await test('processPayment should work with PayPal', () => {
	const paypal = new solution.PayPal('user@example.com')
	assert.strictEqual(
		solution.processPayment(paypal, 50),
		'Paid $50 with PayPal user@example.com',
		'🚨 processPayment() should return "Paid $50 with PayPal user@example.com" - check your function accepts PaymentMethod type',
	)
})

await test('processPayment should accept any PaymentMethod implementation', () => {
	const testCard = new solution.CreditCard('1111-2222-3333-4444')
	const testPayPal = new solution.PayPal('test@example.com')
	const testCardResult = solution.processPayment(testCard, 75)
	const testPayPalResult = solution.processPayment(testPayPal, 25)

	assert.ok(
		testCardResult.includes('credit card'),
		'🚨 CreditCard payment result should contain "credit card" - check your processPayment function accepts PaymentMethod interface',
	)
	assert.ok(
		testPayPalResult.includes('PayPal'),
		'🚨 PayPal payment result should contain "PayPal" - check your processPayment function accepts PaymentMethod interface',
	)
})
