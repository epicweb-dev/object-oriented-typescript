import assert from 'node:assert/strict'
import { test } from 'node:test'
import { User, BankAccount, Config } from './index.ts'

await test('User constructor should set name, email, and default role', () => {
	const user = new User('Alice', 'alice@example.com')
	assert.strictEqual(
		user.name,
		'Alice',
		'🚨 User.name should be "Alice" - check your constructor parameter assignment',
	)
	assert.strictEqual(
		user.email,
		'alice@example.com',
		'🚨 User.email should be "alice@example.com" - check your constructor parameter assignment',
	)
	assert.strictEqual(
		user.role,
		'user',
		'🚨 User.role should default to "user" - check your constructor default parameter value',
	)
})

await test('User constructor should accept custom role', () => {
	const admin = new User('Bob', 'bob@example.com', 'admin')
	assert.strictEqual(
		admin.name,
		'Bob',
		'🚨 User.name should be "Bob" - check your constructor parameter assignment',
	)
	assert.strictEqual(
		admin.email,
		'bob@example.com',
		'🚨 User.email should be "bob@example.com" - check your constructor parameter assignment',
	)
	assert.strictEqual(
		admin.role,
		'admin',
		'🚨 User.role should be "admin" when provided as third parameter - check your constructor parameter handling',
	)
})

await test('BankAccount constructor should set accountNumber and default balance', () => {
	const account = new BankAccount('12345')
	assert.strictEqual(
		account.accountNumber,
		'12345',
		'🚨 BankAccount.accountNumber should be "12345" - check your constructor parameter assignment',
	)
	assert.strictEqual(
		account.getBalance(),
		0,
		'🚨 BankAccount.getBalance() should return 0 initially - check your constructor initialization',
	)
})

await test('BankAccount deposit should increase balance', () => {
	const account = new BankAccount('12345')
	account.deposit(100)
	assert.strictEqual(
		account.getBalance(),
		100,
		'🚨 After depositing 100, getBalance() should return 100 - check your deposit method implementation',
	)
	account.deposit(50)
	assert.strictEqual(
		account.getBalance(),
		150,
		'🚨 After depositing another 50, getBalance() should return 150 - check your deposit method accumulates correctly',
	)
})

await test('Config constructor should use default values', () => {
	const config = new Config()
	assert.strictEqual(
		config.host,
		'localhost',
		'🚨 Config.host should default to "localhost" - check your constructor default parameter values',
	)
	assert.strictEqual(
		config.port,
		3000,
		'🚨 Config.port should default to 3000 - check your constructor default parameter values',
	)
	assert.strictEqual(
		config.debug,
		false,
		'🚨 Config.debug should default to false - check your constructor default parameter values',
	)
})

await test('Config constructor should accept custom values', () => {
	const customConfig = new Config('example.com', 8080, true)
	assert.strictEqual(
		customConfig.host,
		'example.com',
		'🚨 Config.host should be "example.com" when provided - check your constructor parameter assignment',
	)
	assert.strictEqual(
		customConfig.port,
		8080,
		'🚨 Config.port should be 8080 when provided - check your constructor parameter assignment',
	)
	assert.strictEqual(
		customConfig.debug,
		true,
		'🚨 Config.debug should be true when provided - check your constructor parameter assignment',
	)
})
