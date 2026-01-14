// Constructor Patterns

export class User {
	constructor(
		public name: string,
		public email: string,
		public role: string = 'user',
	) {}
}

export class BankAccount {
	constructor(
		public accountNumber: string,
		private balance: number = 0,
	) {}

	deposit(amount: number): void {
		this.balance += amount
	}

	getBalance(): number {
		return this.balance
	}
}

export class Config {
	constructor(
		public host: string = 'localhost',
		public port: number = 3000,
		public debug: boolean = false,
	) {}
}

const user = new User('Alice', 'alice@example.com')
const admin = new User('Bob', 'bob@example.com', 'admin')
console.log(`${user.name} is a ${user.role}`)
console.log(`${admin.name} is a ${admin.role}`)

const account = new BankAccount('12345')
account.deposit(100)
console.log(`Balance: $${account.getBalance()}`)

const config = new Config()
const customConfig = new Config('example.com', 8080, true)
console.log(`Default config: ${config.host}:${config.port}`)
console.log(`Custom config: ${customConfig.host}:${customConfig.port}`)
