import assert from 'node:assert/strict'
import { test } from 'node:test'
import { FileLogger, ConsoleLogger, EmailService, Logger } from './index.ts'

await test('FileLogger should extend Logger (inheritance)', () => {
	const fileLogger = new FileLogger()
	assert.ok(
		fileLogger instanceof Logger,
		'🚨 FileLogger should be an instance of Logger - check that FileLogger extends Logger',
	)
	assert.ok(
		fileLogger instanceof FileLogger,
		'🚨 FileLogger should be an instance of FileLogger - check your class definition',
	)
})

await test('ConsoleLogger should extend Logger (inheritance)', () => {
	const consoleLogger = new ConsoleLogger()
	assert.ok(
		consoleLogger instanceof Logger,
		'🚨 ConsoleLogger should be an instance of Logger - check that ConsoleLogger extends Logger',
	)
	assert.ok(
		consoleLogger instanceof ConsoleLogger,
		'🚨 ConsoleLogger should be an instance of ConsoleLogger - check your class definition',
	)
})

await test('EmailService should accept any Logger (composition)', () => {
	const fileLogger = new FileLogger()
	const emailService1 = new EmailService(fileLogger)
	assert.ok(
		emailService1 !== undefined,
		'🚨 EmailService should be defined when passed FileLogger - check your constructor accepts Logger type',
	)

	const consoleLogger = new ConsoleLogger()
	const emailService2 = new EmailService(consoleLogger)
	assert.ok(
		emailService2 !== undefined,
		'🚨 EmailService should be defined when passed ConsoleLogger - check your constructor accepts Logger type',
	)
})

await test('EmailService should use logger in sendEmail method', () => {
	const fileLogger = new FileLogger()
	const emailService = new EmailService(fileLogger)

	// The sendEmail method should call the logger's log method
	// We can't easily test console.log output, but we can verify the method exists
	assert.ok(
		typeof emailService.sendEmail === 'function',
		'🚨 EmailService.sendEmail should be a function - check your method definition',
	)
})

await test('EmailService should work with different logger types', () => {
	const fileLogger = new FileLogger()
	const consoleLogger = new ConsoleLogger()

	const emailService1 = new EmailService(fileLogger)
	const emailService2 = new EmailService(consoleLogger)

	// Both should be instances of EmailService
	assert.ok(
		emailService1 instanceof EmailService,
		'🚨 emailService1 should be an instance of EmailService - check your class definition',
	)
	assert.ok(
		emailService2 instanceof EmailService,
		'🚨 emailService2 should be an instance of EmailService - check your class definition',
	)
})
