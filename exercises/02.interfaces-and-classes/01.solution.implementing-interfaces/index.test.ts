import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { creditCard, paypal } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('CreditCard should implement PaymentMethod interface', () => {
	assert.strictEqual(
		creditCard.cardNumber,
		'1234-5678-9012-3456',
		'🚨 CreditCard.cardNumber should be "1234-5678-9012-3456" - check your class property definition',
	)
	assert.strictEqual(
		creditCard.payResult,
		'Paid $100 with credit card 1234-5678-9012-3456',
		'🚨 pay() should return "Paid $100 with credit card 1234-5678-9012-3456" - check your PaymentMethod interface implementation',
	)
})

await test('PayPal should implement PaymentMethod interface', () => {
	assert.strictEqual(
		paypal.email,
		'user@example.com',
		'🚨 PayPal.email should be "user@example.com" - check your class property definition',
	)
	assert.strictEqual(
		paypal.payResult,
		'Paid $50 with PayPal user@example.com',
		'🚨 pay() should return "Paid $50 with PayPal user@example.com" - check your PaymentMethod interface implementation',
	)
})

await test('Both payment methods should have pay method', () => {
	assert.ok(
		creditCard.hasPay,
		'🚨 CreditCard.pay should be a function - check that you implemented the PaymentMethod interface',
	)
	assert.ok(
		paypal.hasPay,
		'🚨 PayPal.pay should be a function - check that you implemented the PaymentMethod interface',
	)
})
