let audioCtx = new(window.AudioContext || window.webkitAudioContext)();
let request = new XMLHttpRequest();
let old_source = null;

export default function addSound(url,ambiant) {

    if (ambiant){
        try{old_source.stop()}catch(e){}
    }

    request.open('GET', url);
    request.responseType = 'arraybuffer';
    let source = audioCtx.createBufferSource();

    request.onload = function () {
        audioCtx.decodeAudioData(request.response, function (buffer) {
                source.buffer = buffer;
                source.connect(audioCtx.destination);
                source.volume = 0.4;
                source.start();
                if (ambiant){
                    source.loop = true;
                    old_source = source;
                    source.volume=0.1;
                }
            },
            function (e) {
                "Error with decoding audio data" + e.err
            });
    }
    request.send();
}
