var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'dimgray',
    progressColor: 'lightblue'
});

audio_file.onchange = function () {
    let files = this.files;
    let file = URL.createObjectURL(files[0]);

    var slider = document.querySelector('#slider');

    slider.oninput = function () {
        var zoomLevel = Number(slider.value);
        wavesurfer.zoom(zoomLevel);
    };
    wavesurfer.load(file);
};

wavesurfer.on('ready', function () {
    wavesurfer.play();
});

$("#btnStartPause").click(
    play = function () {
        wavesurfer.playPause();
    }
);