import { testStep, expect } from '@epic-web/workshop-utils/test'
import { User, BankAccount, Config } from './index.ts'

await testStep(
	'User constructor should set name, email, and default role',
	async () => {
		const user = new User('Alice', 'alice@example.com')
		expect(
			user.name,
			'🚨 User.name should be "Alice" - check your constructor parameter assignment',
		).toBe('Alice')
		expect(
			user.email,
			'🚨 User.email should be "alice@example.com" - check your constructor parameter assignment',
		).toBe('alice@example.com')
		expect(
			user.role,
			'🚨 User.role should default to "user" - check your constructor default parameter value',
		).toBe('user')
	},
)

await testStep('User constructor should accept custom role', async () => {
	const admin = new User('Bob', 'bob@example.com', 'admin')
	expect(
		admin.name,
		'🚨 User.name should be "Bob" - check your constructor parameter assignment',
	).toBe('Bob')
	expect(
		admin.email,
		'🚨 User.email should be "bob@example.com" - check your constructor parameter assignment',
	).toBe('bob@example.com')
	expect(
		admin.role,
		'🚨 User.role should be "admin" when provided as third parameter - check your constructor parameter handling',
	).toBe('admin')
})

await testStep(
	'BankAccount constructor should set accountNumber and default balance',
	async () => {
		const account = new BankAccount('12345')
		expect(
			account.accountNumber,
			'🚨 BankAccount.accountNumber should be "12345" - check your constructor parameter assignment',
		).toBe('12345')
		expect(
			account.getBalance(),
			'🚨 BankAccount.getBalance() should return 0 initially - check your constructor initialization',
		).toBe(0)
	},
)

await testStep('BankAccount deposit should increase balance', async () => {
	const account = new BankAccount('12345')
	account.deposit(100)
	expect(
		account.getBalance(),
		'🚨 After depositing 100, getBalance() should return 100 - check your deposit method implementation',
	).toBe(100)
	account.deposit(50)
	expect(
		account.getBalance(),
		'🚨 After depositing another 50, getBalance() should return 150 - check your deposit method accumulates correctly',
	).toBe(150)
})

await testStep('Config constructor should use default values', async () => {
	const config = new Config()
	expect(
		config.host,
		'🚨 Config.host should default to "localhost" - check your constructor default parameter values',
	).toBe('localhost')
	expect(
		config.port,
		'🚨 Config.port should default to 3000 - check your constructor default parameter values',
	).toBe(3000)
	expect(
		config.debug,
		'🚨 Config.debug should default to false - check your constructor default parameter values',
	).toBe(false)
})

await testStep('Config constructor should accept custom values', async () => {
	const customConfig = new Config('example.com', 8080, true)
	expect(
		customConfig.host,
		'🚨 Config.host should be "example.com" when provided - check your constructor parameter assignment',
	).toBe('example.com')
	expect(
		customConfig.port,
		'🚨 Config.port should be 8080 when provided - check your constructor parameter assignment',
	).toBe(8080)
	expect(
		customConfig.debug,
		'🚨 Config.debug should be true when provided - check your constructor parameter assignment',
	).toBe(true)
})
