// Dependency Injection - Swapping Implementations

class Logger {
	log(message: string): void {
		console.log(`Log: ${message}`)
	}
}

class EmailService {
	#logger: Logger

	constructor(logger: Logger) {
		this.#logger = logger
	}

	sendEmail(to: string, subject: string): void {
		this.#logger.log(`Sending email to ${to}: ${subject}`)
		console.log(`Sending email to ${to}: ${subject}`)
	}
}

// MockLogger stores logs in memory (useful for testing)
class MockLogger extends Logger {
	#logs: Array<string> = []

	log(message: string): void {
		this.#logs.push(message)
	}

	getLogs(): Array<string> {
		return [...this.#logs] // Return a copy to prevent external mutation
	}
}

// SilentLogger does nothing (useful for production when logging is disabled)
class SilentLogger extends Logger {
	log(_message: string): void {
		// Do nothing - silent logging
	}
}

// Test MockLogger
const mockLogger = new MockLogger()
mockLogger.log('Test message')
console.log(mockLogger.getLogs()) // ['Test message']

// Test EmailService with MockLogger (dependency injection)
const emailService = new EmailService(mockLogger)
emailService.sendEmail('test@example.com', 'Test Subject')
console.log(mockLogger.getLogs()) // Shows the email log

// Test SilentLogger
const silentLogger = new SilentLogger()
const emailService2 = new EmailService(silentLogger)
emailService2.sendEmail('user@example.com', 'Welcome')
// No logs printed - silent logger does nothing

export { Logger, EmailService, MockLogger, SilentLogger }
