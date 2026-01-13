import { testStep, expect } from '@epic-web/workshop-utils/test'
import { User } from './index.ts'

await testStep('User should have public username property', async () => {
	const user = new User('alice', 'secret123')
	expect(user.username).toBe('alice')
})

await testStep('User login should return true for correct password', async () => {
	const user = new User('alice', 'secret123')
	const result = user.login('secret123')
	expect(result).toBe(true)
})

await testStep('User login should return false for incorrect password', async () => {
	const user = new User('alice', 'secret123')
	const result = user.login('wrong')
	expect(result).toBe(false)
})
