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
    <section id="Cinematic" class="Cinematic">
        <!-- Cinematic -->
    </section>
    <section id="Game" class="Game">
        <!--Jeu -->
        <div id="Area">
            <!-- Aire de jeu -->
            <div id="Objects"></div>
            <div id="Decors"></div>
        </div>
    </section>
    <section id="Interface" class="Interface">
        <!-- Timer -->
    </section>
</main>
@endsection