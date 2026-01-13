import { testStep, expect } from '@epic-web/workshop-utils/test'
import { User } from './index.ts'

await testStep('User should have public username property', async () => {
	const user = new User('alice', 'secret123')
	expect(user.username, '🚨 User.username should be "alice" - check your public property definition').toBe('alice')
})

await testStep('User login should return true for correct password', async () => {
	const user = new User('alice', 'secret123')
	const result = user.login('secret123')
	expect(result, '🚨 login() should return true for correct password - check your login method implementation and password comparison').toBe(true)
})

await testStep('User login should return false for incorrect password', async () => {
	const user = new User('alice', 'secret123')
	const result = user.login('wrong')
	expect(result, '🚨 login() should return false for incorrect password - check your login method implementation and password comparison').toBe(false)
})
