class MusikPlayer{


    playGuitar(){


        var x = document.getElementById("GuitarSample.mp3");

        function playAudio() {
            x.play();
        }

        function pauseAudio() {
            x.pause();
        }
        playAudio();
    }

}