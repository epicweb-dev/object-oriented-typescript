import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('Logger class should be exported', () => {
	assert.ok(
		'Logger' in solution,
		'🚨 Make sure you export "Logger" - add: export { Logger, FileLogger, ConsoleLogger, EmailService }',
	)
})

await test('FileLogger class should be exported', () => {
	assert.ok(
		'FileLogger' in solution,
		'🚨 Make sure you export "FileLogger" - add: export { Logger, FileLogger, ConsoleLogger, EmailService }',
	)
})

await test('ConsoleLogger class should be exported', () => {
	assert.ok(
		'ConsoleLogger' in solution,
		'🚨 Make sure you export "ConsoleLogger" - add: export { Logger, FileLogger, ConsoleLogger, EmailService }',
	)
})

await test('EmailService class should be exported', () => {
	assert.ok(
		'EmailService' in solution,
		'🚨 Make sure you export "EmailService" - add: export { Logger, FileLogger, ConsoleLogger, EmailService }',
	)
})

await test('FileLogger should extend Logger (inheritance)', () => {
	const fileLogger = new solution.FileLogger()
	assert.ok(
		fileLogger instanceof solution.Logger,
		'🚨 FileLogger should be an instance of Logger - check that FileLogger extends Logger',
	)
})

await test('ConsoleLogger should extend Logger (inheritance)', () => {
	const consoleLogger = new solution.ConsoleLogger()
	assert.ok(
		consoleLogger instanceof solution.Logger,
		'🚨 ConsoleLogger should be an instance of Logger - check that ConsoleLogger extends Logger',
	)
})

await test('EmailService should accept any Logger (composition)', () => {
	const fileLogger = new solution.FileLogger()
	const consoleLogger = new solution.ConsoleLogger()
	const emailService1 = new solution.EmailService(fileLogger)
	const emailService2 = new solution.EmailService(consoleLogger)

	assert.ok(
		emailService1 !== undefined,
		'🚨 EmailService should be defined when passed FileLogger - check your constructor accepts Logger type',
	)
	assert.ok(
		emailService2 !== undefined,
		'🚨 EmailService should be defined when passed ConsoleLogger - check your constructor accepts Logger type',
	)
})

await test('EmailService should use logger in sendEmail method', () => {
	const fileLogger = new solution.FileLogger()
	const emailService1 = new solution.EmailService(fileLogger)
	assert.ok(
		typeof emailService1.sendEmail === 'function',
		'🚨 EmailService.sendEmail should be a function - check your method definition',
	)
})

await test('EmailService should work with different logger types', () => {
	const fileLogger = new solution.FileLogger()
	const consoleLogger = new solution.ConsoleLogger()
	const emailService1 = new solution.EmailService(fileLogger)
	const emailService2 = new solution.EmailService(consoleLogger)

	assert.ok(
		emailService1 instanceof solution.EmailService,
		'🚨 emailService1 should be an instance of EmailService - check your class definition',
	)
	assert.ok(
		emailService2 instanceof solution.EmailService,
		'🚨 emailService2 should be an instance of EmailService - check your class definition',
	)
})
