import { testStep, expect } from '@epic-web/workshop-utils/test'
import { AudioFile, VideoFile, MediaPlayer, MediaFile } from './index.ts'

await testStep('MediaPlayer should accept MediaFile instances', async () => {
	const mediaFile = new MediaFile('file.mp3')
	const player = new MediaPlayer()
	const result = player.playFile(mediaFile)
	expect(result, '🚨 playFile() should return "Playing file.mp3" - check your MediaPlayer.playFile method accepts MediaFile type').toBe('Playing file.mp3')
})

await testStep('MediaPlayer should accept AudioFile instances (polymorphism)', async () => {
	const audio = new AudioFile('song.mp3')
	const player = new MediaPlayer()
	const result = player.playFile(audio)
	expect(result, '🚨 playFile() should return "Playing audio: song.mp3" - check that AudioFile extends MediaFile and playFile accepts the base type').toBe('Playing audio: song.mp3')
})

await testStep('MediaPlayer should accept VideoFile instances (polymorphism)', async () => {
	const video = new VideoFile('movie.mp4')
	const player = new MediaPlayer()
	const result = player.playFile(video)
	expect(result, '🚨 playFile() should return "Playing video: movie.mp4" - check that VideoFile extends MediaFile and playFile accepts the base type').toBe('Playing video: movie.mp4')
})

await testStep('AudioFile and VideoFile should be substitutable for MediaFile', async () => {
	const audio = new AudioFile('song.mp3')
	const video = new VideoFile('movie.mp4')
	const player = new MediaPlayer()
	
	const audioResult = player.playFile(audio)
	const videoResult = player.playFile(video)
	
	expect(audioResult, '🚨 AudioFile result should contain "audio" - check that AudioFile extends MediaFile and overrides playFile behavior').toContain('audio')
	expect(videoResult, '🚨 VideoFile result should contain "video" - check that VideoFile extends MediaFile and overrides playFile behavior').toContain('video')
	expect(audio instanceof MediaFile, '🚨 AudioFile should be an instance of MediaFile - check that AudioFile extends MediaFile').toBe(true)
	expect(video instanceof MediaFile, '🚨 VideoFile should be an instance of MediaFile - check that VideoFile extends MediaFile').toBe(true)
})
