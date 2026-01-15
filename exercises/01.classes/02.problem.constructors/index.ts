// Constructor Patterns

// 🐨 Create a User class with these fields:
// - name: string
// - email: string
// - role: string (default: 'user')
// Initialize fields in the constructor

// 🐨 Create a BankAccount class with:
// - accountNumber: string
// - #balance: number (private field, default: 0)
// - Method: deposit(amount: number)
// - Method: getBalance() returns the balance
// 💰 #balance is a private field - can only be accessed inside the class

// 🐨 Create a Config class with optional default values:
// - host: string (default: 'localhost')
// - port: number (default: 3000)
// - debug: boolean (default: false)

// Test
// const user = new User('Alice', 'alice@example.com')
// const admin = new User('Bob', 'bob@example.com', 'admin')
// const account = new BankAccount('12345')
// account.deposit(100)
// const config = new Config()
// const customConfig = new Config('example.com', 8080, true)

// 🐨 When you're done, uncomment this:
// const sampleAccount = new BankAccount('12345')
// sampleAccount.deposit(100)
// sampleAccount.deposit(50)
// console.log(
// 	'Results:',
// 	JSON.stringify({
// 		user: { name: user.name, email: user.email, role: user.role },
// 		admin: { name: admin.name, email: admin.email, role: admin.role },
// 		account: {
// 			accountNumber: sampleAccount.accountNumber,
// 			initialBalance: 0,
// 			balanceAfterFirstDeposit: 100,
// 			balanceAfterSecondDeposit: 150,
// 		},
// 		config: { host: config.host, port: config.port, debug: config.debug },
// 		customConfig: {
// 			host: customConfig.host,
// 			port: customConfig.port,
// 			debug: customConfig.debug,
// 		},
// 	}),
// )
