// Dependency Injection - Swapping Implementations

// Base Logger class (for reference from step 01)
class Logger {
	log(message: string): void {
		console.log(`Log: ${message}`)
	}
}

// EmailService using composition (for reference from step 01)
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

// 🐨 Create a MockLogger class that extends Logger:
// - Extends Logger
// - Override log() to store messages in an array: #logs (private field)
//   - Stores messages instead of printing them
// - Method: getLogs() returns Array<string> to retrieve stored messages

// Test MockLogger
// const mockLogger = new MockLogger()
// mockLogger.log('Test message')
// console.log(mockLogger.getLogs()) // Should show ['Test message']

// Test EmailService with MockLogger (dependency injection)
// const mockLogger = new MockLogger()
// const emailService = new EmailService(mockLogger)
// emailService.sendEmail('test@example.com', 'Test Subject')
// console.log(mockLogger.getLogs()) // Should show the email log
// console.log(emailService)

// 🐨 Create a SilentLogger class that extends Logger:
// - Extends Logger
// - Override log() to do nothing (silent logging for production)

// Test SilentLogger
// const silentLogger = new SilentLogger()
// const emailService2 = new EmailService(silentLogger)
// emailService2.sendEmail('user@example.com', 'Welcome')
// console.log(emailService2)

// export { Logger, EmailService, MockLogger, SilentLogger }
