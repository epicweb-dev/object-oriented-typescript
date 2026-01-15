// When to Use Composition vs Inheritance

// Inheritance: FileLogger and ConsoleLogger ARE types of Logger
class Logger {
	log(message: string): void {
		console.log(`Log: ${message}`)
	}
}

class FileLogger extends Logger {
	// FileLogger IS-A Logger
	log(message: string): void {
		console.log(`File Log: ${message}`)
	}
}

class ConsoleLogger extends Logger {
	// ConsoleLogger IS-A Logger
	log(message: string): void {
		console.log(`Console Log: ${message}`)
	}
}

// Composition: EmailService HAS-A Logger (but isn't a Logger itself)
class EmailService {
	#logger: Logger // EmailService HAS-A Logger

	constructor(logger: Logger) {
		this.#logger = logger
	}

	sendEmail(to: string, subject: string): void {
		this.#logger.log(`Sending email to ${to}: ${subject}`)
		console.log(`Sending email to ${to}: ${subject}`)
	}
}

// Test inheritance
const fileLogger = new FileLogger()
const consoleLogger = new ConsoleLogger()
fileLogger.log('File system initialized')
consoleLogger.log('Console ready')

// Test composition - EmailService can use any Logger
const emailService1 = new EmailService(fileLogger)
const emailService2 = new EmailService(consoleLogger)

emailService1.sendEmail('user@example.com', 'Welcome')
emailService2.sendEmail('admin@example.com', 'Alert')

console.log(
	'Results:',
	JSON.stringify({
		fileLoggerIsLogger: fileLogger instanceof Logger,
		consoleLoggerIsLogger: consoleLogger instanceof Logger,
		emailService1Defined: emailService1 !== undefined,
		emailService2Defined: emailService2 !== undefined,
		sendEmailExists: typeof emailService1.sendEmail === 'function',
		emailService1IsInstance: emailService1 instanceof EmailService,
		emailService2IsInstance: emailService2 instanceof EmailService,
	}),
)
