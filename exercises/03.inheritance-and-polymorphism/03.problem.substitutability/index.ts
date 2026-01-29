// Substitutability - Polymorphism

class MediaFile {
	filename: string

	constructor(filename: string) {
		this.filename = filename
	}

	play(): string {
		return `Playing ${this.filename}`
	}
}

class AudioFile extends MediaFile {
	play(): string {
		return `Playing audio: ${this.filename}`
	}
}

class VideoFile extends MediaFile {
	play(): string {
		return `Playing video: ${this.filename}`
	}
}

// 🐨 Create a MediaPlayer class with:
// - Method: playFile(media: MediaFile) returns string
//   - Calls media.play() and returns the result

// Test MediaPlayer (polymorphism)
// const audio = new AudioFile('song.mp3')
// const video = new VideoFile('movie.mp4')
// const player = new MediaPlayer()
// console.log(player.playFile(audio)) // Should work - AudioFile is substitutable for MediaFile
// console.log(player.playFile(video)) // Should work - VideoFile is substitutable for MediaFile

// export { MediaFile, AudioFile, VideoFile, MediaPlayer }
