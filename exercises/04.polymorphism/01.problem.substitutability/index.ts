// Substitutability - Polymorphism

// 🐨 Create a MediaFile base class with:
// - Field: filename (string)
// - Constructor that takes filename
// - Method: play() returns string "Playing {filename}"

// 🐨 Create an AudioFile class that extends MediaFile:
// - Override play() to return "Playing audio: {filename}"

// Test AudioFile
// const audio = new AudioFile('song.mp3')
// console.log(audio)

// 🐨 Create a VideoFile class that extends MediaFile:
// - Override play() to return "Playing video: {filename}"

// Test VideoFile
// const video = new VideoFile('movie.mp4')
// console.log(video)

// 🐨 Create a MediaPlayer class with:
// - Method: playFile(media: MediaFile) returns string
//   - Calls media.play() and returns the result

// Test MediaPlayer (polymorphism)
// const player = new MediaPlayer()
// console.log(player.playFile(audio)) // Should work - AudioFile is substitutable for MediaFile
// console.log(player.playFile(video)) // Should work - VideoFile is substitutable for MediaFile
// console.log(player)

// export { MediaFile, AudioFile, VideoFile, MediaPlayer }
