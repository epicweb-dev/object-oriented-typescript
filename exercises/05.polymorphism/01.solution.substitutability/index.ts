// Substitutability - Polymorphism

export class MediaFile {
	filename: string

	constructor(filename: string) {
		this.filename = filename
	}

	play(): string {
		return `Playing ${this.filename}`
	}
}

export class AudioFile extends MediaFile {
	play(): string {
		return `Playing audio: ${this.filename}`
	}
}

export class VideoFile extends MediaFile {
	play(): string {
		return `Playing video: ${this.filename}`
	}
}

export class MediaPlayer {
	playFile(media: MediaFile): string {
		// ✅ Works with MediaFile or any subclass (polymorphism)
		return media.play()
	}
}

const audio = new AudioFile('song.mp3')
const video = new VideoFile('movie.mp4')
const player = new MediaPlayer()

// ✅ Both work because AudioFile and VideoFile are substitutable for MediaFile
console.log(player.playFile(audio)) // "Playing audio: song.mp3"
console.log(player.playFile(video)) // "Playing video: movie.mp4"

export {}