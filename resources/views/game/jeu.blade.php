@extends('layouts.template')
@section('title', __("le jeu"))

@section('content')

<div id="game-page" class="landscape">
{{-- <p>zse</p> --}}
<header id="Header" class="Header">
    <div class="HeaderLogo">
    </div>
    <div class="Mute">
    </div>
</header>

<main id="Main" role="main">
    <div id="Cinematic" class="Cinematic">
        <!--Cinematic-->
    </div>
    <div id="Game" class="Game">
        <div id="Background">
        
        <div id="Objects"></div>
        </div>
        
    </div>
    <div id="Interface" class="Interface">
        <!--Timer-->
    </div>

</main>
{{--  --}}
@endsection
