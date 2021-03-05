@extends('layouts.template')
@extends("loader")

@section('content')
<div>
    <div class="bg">
        <a><img id="bg-room1" src="{{ asset('ressources/game/objects/image/test_mur.jpg') }}" alt=""></a>
    </div>
    <div class="room">
        <a class="hoverable" >
            <img id="img1" class="zoomable" src="{{ asset('ressources/game/objects/image/radio.png') }}" alt=""/>
        </a>
        {{--    <a class="hoverable" >--}}
        {{--        <img id="img2" src="{{ asset('ressources/game/objects/image/radio.png') }}"/>--}}
        {{--    </a>--}}
        {{--    <a class="hoverable" >--}}
        {{--        <img id="img3" src="{{ asset('ressources/game/objects/image/radio.png') }}"/>--}}
        {{--    </a>--}}
    </div>
</div>
{{-- normalement, le script ne devrait pas etre necessaire ici --}}
<script>

    function wait(){
        setTimeout(function(){
            document.getElementById("loader").style.display="none";
        },2000);
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById("loader").style.transition="opacity 2s linear";
        document.getElementById("loader").style.opacity="0";
        document.getElementById("toload").style.transition="opacity 2s linear";
        document.getElementById("toload").style.opacity="100";
        document.getElementById("souris").style.opacity="100";
        wait();

    });
</script>
@endsection
