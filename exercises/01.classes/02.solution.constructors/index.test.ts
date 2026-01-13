import { testStep, expect } from '@epic-web/workshop-utils/test'
import { User, BankAccount, Config } from './index.ts'

await testStep('User constructor should set name, email, and default role', async () => {
	const user = new User('Alice', 'alice@example.com')
	expect(user.name).toBe('Alice')
	expect(user.email).toBe('alice@example.com')
	expect(user.role).toBe('user')
})

await testStep('User constructor should accept custom role', async () => {
	const admin = new User('Bob', 'bob@example.com', 'admin')
	expect(admin.name).toBe('Bob')
	expect(admin.email).toBe('bob@example.com')
	expect(admin.role).toBe('admin')
})

await testStep('BankAccount constructor should set accountNumber and default balance', async () => {
	const account = new BankAccount('12345')
	expect(account.accountNumber).toBe('12345')
	expect(account.getBalance()).toBe(0)
})

await testStep('BankAccount deposit should increase balance', async () => {
	const account = new BankAccount('12345')
	account.deposit(100)
	expect(account.getBalance()).toBe(100)
	account.deposit(50)
	expect(account.getBalance()).toBe(150)
})

await testStep('Config constructor should use default values', async () => {
	const config = new Config()
	expect(config.host).toBe('localhost')
	expect(config.port).toBe(3000)
	expect(config.debug).toBe(false)
})

await testStep('Config constructor should accept custom values', async () => {
	const customConfig = new Config('example.com', 8080, true)
	expect(customConfig.host).toBe('example.com')
	expect(customConfig.port).toBe(8080)
	expect(customConfig.debug).toBe(true)
})
