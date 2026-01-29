import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('MockLogger class should be exported', () => {
	assert.ok(
		'MockLogger' in solution,
		'🚨 Make sure you export "MockLogger" - add: export { Logger, EmailService, MockLogger, SilentLogger }',
	)
})

await test('SilentLogger class should be exported', () => {
	assert.ok(
		'SilentLogger' in solution,
		'🚨 Make sure you export "SilentLogger" - add: export { Logger, EmailService, MockLogger, SilentLogger }',
	)
})

await test('MockLogger should store logs', () => {
	const mockLogger = new solution.MockLogger()
	mockLogger.log('Test message 1')
	mockLogger.log('Test message 2')
	const logs = mockLogger.getLogs()

	assert.ok(
		Array.isArray(logs),
		'🚨 getLogs() should return an array - check your MockLogger implementation',
	)
	assert.strictEqual(
		logs.length,
		2,
		'🚨 getLogs() should return 2 logs - check that log() stores messages',
	)
	assert.strictEqual(
		logs[0],
		'Test message 1',
		'🚨 First log should be "Test message 1" - check your log storage',
	)
})

await test('MockLogger should work with EmailService (dependency injection)', () => {
	const mockLogger = new solution.MockLogger()
	const emailService = new solution.EmailService(mockLogger)
	emailService.sendEmail('test@example.com', 'Test Subject')

	const logs = mockLogger.getLogs()
	assert.ok(
		logs.length > 0,
		'🚨 MockLogger should have logs after sendEmail - check that EmailService uses the logger',
	)
	assert.ok(
		logs.some((log) => log.includes('test@example.com')),
		'🚨 Logs should contain email address - check that EmailService logs the email action',
	)
})

await test('SilentLogger should extend Logger', () => {
	const silentLogger = new solution.SilentLogger()
	assert.ok(
		silentLogger instanceof solution.Logger,
		'🚨 SilentLogger should be an instance of Logger - check that SilentLogger extends Logger',
	)
})

await test('SilentLogger should work with EmailService', () => {
	const silentLogger = new solution.SilentLogger()
	const emailService = new solution.EmailService(silentLogger)

	// Should not throw - SilentLogger accepts any message
	assert.doesNotThrow(
		() => emailService.sendEmail('user@example.com', 'Welcome'),
		'🚨 EmailService should work with SilentLogger - check that SilentLogger implements Logger correctly',
	)
})

await test('EmailService should work with different logger implementations', () => {
	const mockLogger = new solution.MockLogger()
	const silentLogger = new solution.SilentLogger()
	const emailService1 = new solution.EmailService(mockLogger)
	const emailService2 = new solution.EmailService(silentLogger)

	assert.ok(
		emailService1 instanceof solution.EmailService,
		'🚨 emailService1 should be an instance of EmailService',
	)
	assert.ok(
		emailService2 instanceof solution.EmailService,
		'🚨 emailService2 should be an instance of EmailService',
	)
	// Both should work - demonstrating dependency injection flexibility
	emailService1.sendEmail('test1@example.com', 'Test 1')
	emailService2.sendEmail('test2@example.com', 'Test 2')

	const logs = mockLogger.getLogs()
	assert.ok(
		logs.length > 0,
		'🚨 MockLogger should capture logs from EmailService - demonstrating dependency injection',
	)
})
