import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { creditCard, paypal, testCard, testPayPal } = JSON.parse(
	jsonLine.replace('Results JSON:', '').trim(),
)

await test('processPayment should work with CreditCard', () => {
	assert.strictEqual(
		creditCard,
		'Paid $100 with credit card 1234-5678-9012-3456',
		'🚨 processPayment() should return "Paid $100 with credit card 1234-5678-9012-3456" - check your function accepts PaymentMethod type',
	)
})

await test('processPayment should work with PayPal', () => {
	assert.strictEqual(
		paypal,
		'Paid $50 with PayPal user@example.com',
		'🚨 processPayment() should return "Paid $50 with PayPal user@example.com" - check your function accepts PaymentMethod type',
	)
})

await test('processPayment should accept any PaymentMethod implementation', () => {
	assert.ok(
		testCard.includes('credit card'),
		'🚨 CreditCard payment result should contain "credit card" - check your processPayment function accepts PaymentMethod interface',
	)
	assert.ok(
		testPayPal.includes('PayPal'),
		'🚨 PayPal payment result should contain "PayPal" - check your processPayment function accepts PaymentMethod interface',
	)
})
