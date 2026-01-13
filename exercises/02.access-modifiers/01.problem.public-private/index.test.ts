import assert from 'node:assert/strict'
import { test } from 'node:test'
import { User } from './index.ts'

await test('User should have public username property', () => {
	const user = new User('alice', 'secret123')
	assert.strictEqual(
		user.username,
		'alice',
		'🚨 User.username should be "alice" - check your public property definition',
	)
})

await test('User login should return true for correct password', () => {
	const user = new User('alice', 'secret123')
	const result = user.login('secret123')
	assert.strictEqual(
		result,
		true,
		'🚨 login() should return true for correct password - check your login method implementation and password comparison',
	)
})

await test('User login should return false for incorrect password', () => {
	const user = new User('alice', 'secret123')
	const result = user.login('wrong')
	assert.strictEqual(
		result,
		false,
		'🚨 login() should return false for incorrect password - check your login method implementation and password comparison',
	)
})
