import { testStep, expect } from '@epic-web/workshop-utils/test'
import { AudioFile, VideoFile, MediaPlayer, MediaFile } from './index.ts'

await testStep('MediaPlayer should accept MediaFile instances', async () => {
	const mediaFile = new MediaFile('file.mp3')
	const player = new MediaPlayer()
	const result = player.playFile(mediaFile)
	expect(result).toBe('Playing file.mp3')
})

await testStep('MediaPlayer should accept AudioFile instances (polymorphism)', async () => {
	const audio = new AudioFile('song.mp3')
	const player = new MediaPlayer()
	const result = player.playFile(audio)
	expect(result).toBe('Playing audio: song.mp3')
})

await testStep('MediaPlayer should accept VideoFile instances (polymorphism)', async () => {
	const video = new VideoFile('movie.mp4')
	const player = new MediaPlayer()
	const result = player.playFile(video)
	expect(result).toBe('Playing video: movie.mp4')
})

await testStep('AudioFile and VideoFile should be substitutable for MediaFile', async () => {
	const audio = new AudioFile('song.mp3')
	const video = new VideoFile('movie.mp4')
	const player = new MediaPlayer()
	
	const audioResult = player.playFile(audio)
	const videoResult = player.playFile(video)
	
	expect(audioResult).toContain('audio')
	expect(videoResult).toContain('video')
	expect(audio instanceof MediaFile).toBe(true)
	expect(video instanceof MediaFile).toBe(true)
})
