// Constructor Patterns

class User {
	name: string
	email: string
	role: string

	constructor(name: string, email: string, role: string = 'user') {
		this.name = name
		this.email = email
		this.role = role
	}
}

class BankAccount {
	#balance: number = 0
	accountNumber: string

	constructor(accountNumber: string) {
		this.accountNumber = accountNumber
	}

	deposit(amount: number): void {
		this.#balance += amount
	}

	getBalance(): number {
		return this.#balance
	}
}

class Config {
	host: string
	port: number
	debug: boolean

	constructor(
		host: string = 'localhost',
		port: number = 3000,
		debug: boolean = false,
	) {
		this.host = host
		this.port = port
		this.debug = debug
	}
}

const user = new User('Alice', 'alice@example.com')
const admin = new User('Bob', 'bob@example.com', 'admin')
console.log(`${user.name} is a ${user.role}`)
console.log(`${admin.name} is an ${admin.role}`)

const account = new BankAccount('12345')
account.deposit(100)
console.log(`Balance: $${account.getBalance()}`)
// account.#balance would be an error - truly private!

const config = new Config()
const customConfig = new Config('example.com', 8080, true)
console.log(`Default config: ${config.host}:${config.port}`)
console.log(`Custom config: ${customConfig.host}:${customConfig.port}`)

export { User, BankAccount, Config }
