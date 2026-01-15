import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { base, audio, video, substitutable } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('MediaPlayer should accept MediaFile instances', () => {
	assert.strictEqual(
		base,
		'Playing file.mp3',
		'🚨 playFile() should return "Playing file.mp3" - check your MediaPlayer.playFile method accepts MediaFile type',
	)
})

await test('MediaPlayer should accept AudioFile instances (polymorphism)', () => {
	assert.strictEqual(
		audio,
		'Playing audio: song.mp3',
		'🚨 playFile() should return "Playing audio: song.mp3" - check that AudioFile extends MediaFile and playFile accepts the base type',
	)
})

await test('MediaPlayer should accept VideoFile instances (polymorphism)', () => {
	assert.strictEqual(
		video,
		'Playing video: movie.mp4',
		'🚨 playFile() should return "Playing video: movie.mp4" - check that VideoFile extends MediaFile and playFile accepts the base type',
	)
})

await test('AudioFile and VideoFile should be substitutable for MediaFile', () => {
	assert.ok(
		substitutable.audioIncludes,
		'🚨 AudioFile result should contain "audio" - check that AudioFile extends MediaFile and overrides playFile behavior',
	)
	assert.ok(
		substitutable.videoIncludes,
		'🚨 VideoFile result should contain "video" - check that VideoFile extends MediaFile and overrides playFile behavior',
	)
})
