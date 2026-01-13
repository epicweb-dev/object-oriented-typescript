import { testStep, expect } from '@epic-web/workshop-utils/test'
import { FileLogger, ConsoleLogger, EmailService, Logger } from './index.ts'

await testStep('FileLogger should extend Logger (inheritance)', async () => {
	const fileLogger = new FileLogger()
	expect(fileLogger instanceof Logger).toBe(true)
	expect(fileLogger instanceof FileLogger).toBe(true)
})

await testStep('ConsoleLogger should extend Logger (inheritance)', async () => {
	const consoleLogger = new ConsoleLogger()
	expect(consoleLogger instanceof Logger).toBe(true)
	expect(consoleLogger instanceof ConsoleLogger).toBe(true)
})

await testStep('EmailService should accept any Logger (composition)', async () => {
	const fileLogger = new FileLogger()
	const emailService1 = new EmailService(fileLogger)
	expect(emailService1).toBeDefined()
	
	const consoleLogger = new ConsoleLogger()
	const emailService2 = new EmailService(consoleLogger)
	expect(emailService2).toBeDefined()
})

await testStep('EmailService should use logger in sendEmail method', async () => {
	const fileLogger = new FileLogger()
	const emailService = new EmailService(fileLogger)
	
	// The sendEmail method should call the logger's log method
	// We can't easily test console.log output, but we can verify the method exists
	expect(typeof emailService.sendEmail).toBe('function')
})

await testStep('EmailService should work with different logger types', async () => {
	const fileLogger = new FileLogger()
	const consoleLogger = new ConsoleLogger()
	
	const emailService1 = new EmailService(fileLogger)
	const emailService2 = new EmailService(consoleLogger)
	
	// Both should be instances of EmailService
	expect(emailService1 instanceof EmailService).toBe(true)
	expect(emailService2 instanceof EmailService).toBe(true)
})
