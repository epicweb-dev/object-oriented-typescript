// When to Use Composition vs Inheritance

// 🐨 Create a Logger base class with:
// - Method: log(message: string) returns void
//   - Prints "Log: {message}" to console

// 🐨 Create a FileLogger class using INHERITANCE (is-a):
// - Extends Logger
// - Override log() to print "File Log: {message}"

// Test FileLogger
// const fileLogger = new FileLogger()
// fileLogger.log('File system initialized')
// console.log(fileLogger)

// 🐨 Create a ConsoleLogger class using INHERITANCE (is-a):
// - Extends Logger
// - Override log() to print "Console Log: {message}"

// Test ConsoleLogger
// const consoleLogger = new ConsoleLogger()
// consoleLogger.log('Console ready')
// console.log(consoleLogger)

// 🐨 Create an EmailService class using COMPOSITION (has-a):
// - Field: #logger (Logger) - private field
// - Constructor that takes a Logger
// - Method: sendEmail(to: string, subject: string) returns void
//   - Uses this.#logger.log() to log the email action
//   - Prints "Sending email to {to}: {subject}"

// Test EmailService
// const emailService = new EmailService(fileLogger)
// emailService.sendEmail('user@example.com', 'Welcome')
// console.log(emailService)

// export { Logger, FileLogger, ConsoleLogger, EmailService }
