// When to Use Composition vs Inheritance

// 🐨 Create a Logger base class with:
// - Method: log(message: string) returns void
//   - Prints "Log: {message}" to console

// 🐨 Create a FileLogger class using INHERITANCE (is-a):
// - Extends Logger
// - Override log() to print "File Log: {message}"

// 🐨 Create a ConsoleLogger class using INHERITANCE (is-a):
// - Extends Logger
// - Override log() to print "Console Log: {message}"

// 🐨 Create an EmailService class using COMPOSITION (has-a):
// - Field: #logger (Logger) - private field
// - Constructor that takes a Logger
// - Method: sendEmail(to: string, subject: string) returns void
//   - Uses this.#logger.log() to log the email action
//   - Prints "Sending email to {to}: {subject}"

// Test your code
// const fileLogger = new FileLogger()
// const consoleLogger = new ConsoleLogger()
// const emailService = new EmailService(fileLogger)
// fileLogger.log('File system initialized')
// consoleLogger.log('Console ready')
// emailService.sendEmail('user@example.com', 'Welcome')

// 🐨 Export your classes so we can verify your work
// 💰 export { Logger, FileLogger, ConsoleLogger, EmailService }
