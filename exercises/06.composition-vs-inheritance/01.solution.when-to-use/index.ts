// When to Use Composition vs Inheritance

// Inheritance: FileLogger and ConsoleLogger ARE types of Logger
export class Logger {
	log(message: string): void {
		console.log(`Log: ${message}`)
	}
}

export class FileLogger extends Logger {
	// FileLogger IS-A Logger
	log(message: string): void {
		console.log(`File Log: ${message}`)
	}
}

export class ConsoleLogger extends Logger {
	// ConsoleLogger IS-A Logger
	log(message: string): void {
		console.log(`Console Log: ${message}`)
	}
}

// Composition: EmailService HAS-A Logger (but isn't a Logger itself)
export class EmailService {
	private logger: Logger // EmailService HAS-A Logger

	constructor(logger: Logger) {
		this.logger = logger
	}

	sendEmail(to: string, subject: string): void {
		this.logger.log(`Sending email to ${to}: ${subject}`)
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
