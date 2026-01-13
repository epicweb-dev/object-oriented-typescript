// Public and Private Access Modifiers

class User {
	public username: string
	private password: string

	constructor(username: string, password: string) {
		this.username = username
		this.password = password
	}

	login(password: string): boolean {
		return this.password === password
	}
}

const user = new User('alice', 'secret123')
console.log(user.username) // ✅ Works - username is public
// console.log(user.password) // ❌ Error - password is private
console.log(user.login('secret123')) // ✅ Returns true
console.log(user.login('wrong')) // ✅ Returns false

export {}