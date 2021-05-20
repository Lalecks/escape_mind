export default function addSound(url){
    let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'arraybuffer';
    let source = audioCtx.createBufferSource();

    request.onload = function(){
        audioCtx.decodeAudioData(request.response, function(buffer){
                source.buffer = buffer;
                source.connect(audioCtx.destination);
                source.loop=false;
                source.start();
            },
            function(e){"Error with decoding audio data" + e.err});
    }
    request.send();
}
