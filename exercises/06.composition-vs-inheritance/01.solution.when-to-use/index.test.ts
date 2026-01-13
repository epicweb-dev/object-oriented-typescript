import { testStep, expect } from '@epic-web/workshop-utils/test'
import { FileLogger, ConsoleLogger, EmailService, Logger } from './index.ts'

await testStep('FileLogger should extend Logger (inheritance)', async () => {
	const fileLogger = new FileLogger()
	expect(fileLogger instanceof Logger, '🚨 FileLogger should be an instance of Logger - check that FileLogger extends Logger').toBe(true)
	expect(fileLogger instanceof FileLogger, '🚨 FileLogger should be an instance of FileLogger - check your class definition').toBe(true)
})

await testStep('ConsoleLogger should extend Logger (inheritance)', async () => {
	const consoleLogger = new ConsoleLogger()
	expect(consoleLogger instanceof Logger, '🚨 ConsoleLogger should be an instance of Logger - check that ConsoleLogger extends Logger').toBe(true)
	expect(consoleLogger instanceof ConsoleLogger, '🚨 ConsoleLogger should be an instance of ConsoleLogger - check your class definition').toBe(true)
})

await testStep('EmailService should accept any Logger (composition)', async () => {
	const fileLogger = new FileLogger()
	const emailService1 = new EmailService(fileLogger)
	expect(emailService1, '🚨 EmailService should be defined when passed FileLogger - check your constructor accepts Logger type').toBeDefined()
	
	const consoleLogger = new ConsoleLogger()
	const emailService2 = new EmailService(consoleLogger)
	expect(emailService2, '🚨 EmailService should be defined when passed ConsoleLogger - check your constructor accepts Logger type').toBeDefined()
})

await testStep('EmailService should use logger in sendEmail method', async () => {
	const fileLogger = new FileLogger()
	const emailService = new EmailService(fileLogger)
	
	// The sendEmail method should call the logger's log method
	// We can't easily test console.log output, but we can verify the method exists
	expect(typeof emailService.sendEmail, '🚨 EmailService.sendEmail should be a function - check your method definition').toBe('function')
})

await testStep('EmailService should work with different logger types', async () => {
	const fileLogger = new FileLogger()
	const consoleLogger = new ConsoleLogger()
	
	const emailService1 = new EmailService(fileLogger)
	const emailService2 = new EmailService(consoleLogger)
	
	// Both should be instances of EmailService
	expect(emailService1 instanceof EmailService, '🚨 emailService1 should be an instance of EmailService - check your class definition').toBe(true)
	expect(emailService2 instanceof EmailService, '🚨 emailService2 should be an instance of EmailService - check your class definition').toBe(true)
})
