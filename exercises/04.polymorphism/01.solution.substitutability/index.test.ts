import assert from 'node:assert/strict'
import { test } from 'node:test'
import { AudioFile, VideoFile, MediaPlayer, MediaFile } from './index.ts'

await test('MediaPlayer should accept MediaFile instances', () => {
	const mediaFile = new MediaFile('file.mp3')
	const player = new MediaPlayer()
	const result = player.playFile(mediaFile)
	assert.strictEqual(
		result,
		'Playing file.mp3',
		'🚨 playFile() should return "Playing file.mp3" - check your MediaPlayer.playFile method accepts MediaFile type',
	)
})

await test('MediaPlayer should accept AudioFile instances (polymorphism)', () => {
	const audio = new AudioFile('song.mp3')
	const player = new MediaPlayer()
	const result = player.playFile(audio)
	assert.strictEqual(
		result,
		'Playing audio: song.mp3',
		'🚨 playFile() should return "Playing audio: song.mp3" - check that AudioFile extends MediaFile and playFile accepts the base type',
	)
})

await test('MediaPlayer should accept VideoFile instances (polymorphism)', () => {
	const video = new VideoFile('movie.mp4')
	const player = new MediaPlayer()
	const result = player.playFile(video)
	assert.strictEqual(
		result,
		'Playing video: movie.mp4',
		'🚨 playFile() should return "Playing video: movie.mp4" - check that VideoFile extends MediaFile and playFile accepts the base type',
	)
})

await test('AudioFile and VideoFile should be substitutable for MediaFile', () => {
	const audio = new AudioFile('song.mp3')
	const video = new VideoFile('movie.mp4')
	const player = new MediaPlayer()

	const audioResult = player.playFile(audio)
	const videoResult = player.playFile(video)

	assert.ok(
		audioResult.includes('audio'),
		'🚨 AudioFile result should contain "audio" - check that AudioFile extends MediaFile and overrides playFile behavior',
	)
	assert.ok(
		videoResult.includes('video'),
		'🚨 VideoFile result should contain "video" - check that VideoFile extends MediaFile and overrides playFile behavior',
	)
	assert.ok(
		audio instanceof MediaFile,
		'🚨 AudioFile should be an instance of MediaFile - check that AudioFile extends MediaFile',
	)
	assert.ok(
		video instanceof MediaFile,
		'🚨 VideoFile should be an instance of MediaFile - check that VideoFile extends MediaFile',
	)
})
