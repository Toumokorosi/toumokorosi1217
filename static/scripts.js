document.addEventListener('DOMContentLoaded', function() {
    const playAudioButton = document.getElementById('play-audio-button');
    const horrorAudio = document.getElementById('horror-audio');
    const videoContainer = document.getElementById('video-container');
    const horrorVideo = document.getElementById('horror-video');

    playAudioButton.addEventListener('click', function() {
        // 音声を再生する
        horrorAudio.play();

        // 10秒後に音声を停止し、動画を表示して再生する
        setTimeout(function() {
            // 音声を停止する
            horrorAudio.pause();
            horrorAudio.currentTime = 0; // 再生位置を初期化

            // 動画を表示して再生する
            videoContainer.style.display = 'block';
            horrorVideo.play();
        }, 10000); // 10秒後に実行
    });

    // 音声が停止したときに動画を表示する
    horrorAudio.addEventListener('ended', function() {
        // 動画を表示して再生する
        videoContainer.style.display = 'block';
        horrorVideo.play();
    });
});
