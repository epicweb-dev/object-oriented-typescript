import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('MediaFile class should be exported', () => {
	assert.ok(
		'MediaFile' in solution,
		'🚨 Make sure you export "MediaFile" - add: export { MediaFile, AudioFile, VideoFile, MediaPlayer }',
	)
})

await test('AudioFile class should be exported', () => {
	assert.ok(
		'AudioFile' in solution,
		'🚨 Make sure you export "AudioFile" - add: export { MediaFile, AudioFile, VideoFile, MediaPlayer }',
	)
})

await test('VideoFile class should be exported', () => {
	assert.ok(
		'VideoFile' in solution,
		'🚨 Make sure you export "VideoFile" - add: export { MediaFile, AudioFile, VideoFile, MediaPlayer }',
	)
})

await test('MediaPlayer class should be exported', () => {
	assert.ok(
		'MediaPlayer' in solution,
		'🚨 Make sure you export "MediaPlayer" - add: export { MediaFile, AudioFile, VideoFile, MediaPlayer }',
	)
})

await test('MediaPlayer should accept MediaFile instances', () => {
	const base = new solution.MediaFile('file.mp3')
	const basePlayer = new solution.MediaPlayer()
	assert.strictEqual(
		basePlayer.playFile(base),
		'Playing file.mp3',
		'🚨 playFile() should return "Playing file.mp3" - check your MediaPlayer.playFile method accepts MediaFile type',
	)
})

await test('MediaPlayer should accept AudioFile instances (polymorphism)', () => {
	const audio = new solution.AudioFile('song.mp3')
	const basePlayer = new solution.MediaPlayer()
	assert.strictEqual(
		basePlayer.playFile(audio),
		'Playing audio: song.mp3',
		'🚨 playFile() should return "Playing audio: song.mp3" - check that AudioFile extends MediaFile and playFile accepts the base type',
	)
})

await test('MediaPlayer should accept VideoFile instances (polymorphism)', () => {
	const video = new solution.VideoFile('movie.mp4')
	const basePlayer = new solution.MediaPlayer()
	assert.strictEqual(
		basePlayer.playFile(video),
		'Playing video: movie.mp4',
		'🚨 playFile() should return "Playing video: movie.mp4" - check that VideoFile extends MediaFile and playFile accepts the base type',
	)
})

await test('AudioFile and VideoFile should be substitutable for MediaFile', () => {
	const audio = new solution.AudioFile('song.mp3')
	const video = new solution.VideoFile('movie.mp4')
	const basePlayer = new solution.MediaPlayer()
	const audioResult = basePlayer.playFile(audio)
	const videoResult = basePlayer.playFile(video)

	assert.ok(
		audioResult.includes('audio'),
		'🚨 AudioFile result should contain "audio" - check that AudioFile extends MediaFile and overrides play behavior',
	)
	assert.ok(
		videoResult.includes('video'),
		'🚨 VideoFile result should contain "video" - check that VideoFile extends MediaFile and overrides play behavior',
	)
})
