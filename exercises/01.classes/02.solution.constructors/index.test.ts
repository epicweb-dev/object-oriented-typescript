import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { user, admin, account, config, customConfig } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('User constructor should set name, email, and default role', () => {
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
	assert.strictEqual(
		account.accountNumber,
		'12345',
		'🚨 BankAccount.accountNumber should be "12345" - check your constructor parameter assignment',
	)
	assert.strictEqual(
		account.initialBalance,
		0,
		'🚨 BankAccount.getBalance() should return 0 initially - check your constructor initialization',
	)
})

await test('BankAccount deposit should increase balance', () => {
	assert.strictEqual(
		account.balanceAfterFirstDeposit,
		100,
		'🚨 After depositing 100, getBalance() should return 100 - check your deposit method implementation',
	)
	assert.strictEqual(
		account.balanceAfterSecondDeposit,
		150,
		'🚨 After depositing another 50, getBalance() should return 150 - check your deposit method accumulates correctly',
	)
})

await test('Config constructor should use default values', () => {
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
