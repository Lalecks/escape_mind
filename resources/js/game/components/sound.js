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
    let gainNode = audioCtx.createGain();


    request.onload = function () {
        audioCtx.decodeAudioData(request.response, function (buffer) {
                source.buffer = buffer;
                gainNode.gain.value = 1;
                source.start();
                if (ambiant){
                    source.loop = true;
                    old_source = source;
                    gainNode.gain.value=0.3;
                }
                source.connect(gainNode);
                gainNode.connect(audioCtx.destination);
            },
            function (e) {
                "Error with decoding audio data" + e.err
            });
    }
    request.send();
}
