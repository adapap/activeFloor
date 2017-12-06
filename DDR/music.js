var Music = {
    curTime: (time) => {
        Music.song.currentTime = time
    },
    loadMusic: (songName) => {
        Music.song.src = 'songs/' + songName.toLowerCase() + '.mp3'
        Music.song.load()
    },
    init: () => {
        Music.song = new Audio('songs/alone.mp3')
    },
    pauseMusic: () => {
        Music.song.pause()
    },
    playMusic: () => {
        Music.song.play()
    }
}