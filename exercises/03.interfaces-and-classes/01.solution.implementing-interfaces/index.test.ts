import { testStep, expect } from '@epic-web/workshop-utils/test'
import { CreditCard, PayPal } from './index.ts'

await testStep('CreditCard should implement PaymentMethod interface', async () => {
	const creditCard = new CreditCard('1234-5678-9012-3456')
	expect(creditCard.cardNumber, '🚨 CreditCard.cardNumber should be "1234-5678-9012-3456" - check your class property definition').toBe('1234-5678-9012-3456')
	const result = creditCard.pay(100)
	expect(result, '🚨 pay() should return "Paid $100 with credit card 1234-5678-9012-3456" - check your PaymentMethod interface implementation').toBe('Paid $100 with credit card 1234-5678-9012-3456')
})

await testStep('PayPal should implement PaymentMethod interface', async () => {
	const paypal = new PayPal('user@example.com')
	expect(paypal.email, '🚨 PayPal.email should be "user@example.com" - check your class property definition').toBe('user@example.com')
	const result = paypal.pay(50)
	expect(result, '🚨 pay() should return "Paid $50 with PayPal user@example.com" - check your PaymentMethod interface implementation').toBe('Paid $50 with PayPal user@example.com')
})

await testStep('Both payment methods should have pay method', async () => {
	const creditCard = new CreditCard('1234-5678-9012-3456')
	const paypal = new PayPal('user@example.com')
	
	expect(typeof creditCard.pay, '🚨 CreditCard.pay should be a function - check that you implemented the PaymentMethod interface').toBe('function')
	expect(typeof paypal.pay, '🚨 PayPal.pay should be a function - check that you implemented the PaymentMethod interface').toBe('function')
})
