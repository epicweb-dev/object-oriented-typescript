import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const {
	fileLoggerIsLogger,
	consoleLoggerIsLogger,
	emailService1Defined,
	emailService2Defined,
	sendEmailExists,
	emailService1IsInstance,
	emailService2IsInstance,
} = JSON.parse(jsonLine.replace('Results JSON:', '').trim())

await test('FileLogger should extend Logger (inheritance)', () => {
	assert.ok(
		fileLoggerIsLogger,
		'🚨 FileLogger should be an instance of Logger - check that FileLogger extends Logger',
	)
})

await test('ConsoleLogger should extend Logger (inheritance)', () => {
	assert.ok(
		consoleLoggerIsLogger,
		'🚨 ConsoleLogger should be an instance of Logger - check that ConsoleLogger extends Logger',
	)
})

await test('EmailService should accept any Logger (composition)', () => {
	assert.ok(
		emailService1Defined,
		'🚨 EmailService should be defined when passed FileLogger - check your constructor accepts Logger type',
	)
	assert.ok(
		emailService2Defined,
		'🚨 EmailService should be defined when passed ConsoleLogger - check your constructor accepts Logger type',
	)
})

await test('EmailService should use logger in sendEmail method', () => {
	assert.ok(
		sendEmailExists,
		'🚨 EmailService.sendEmail should be a function - check your method definition',
	)
})

await test('EmailService should work with different logger types', () => {
	assert.ok(
		emailService1IsInstance,
		'🚨 emailService1 should be an instance of EmailService - check your class definition',
	)
	assert.ok(
		emailService2IsInstance,
		'🚨 emailService2 should be an instance of EmailService - check your class definition',
	)
})
