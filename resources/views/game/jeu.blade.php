@extends('layouts.template')
@section('title', __("le jeu en ligne"))

@section('content')
<section id="game-page" class="landscape">
    {{-- <p>zse</p> --}}
    <header id="Header" class="Header">
        <div class="HeaderLogo">
            <!-- Nécessaire pour le bon fonctionnement du Loading -->
            <img src="./resources/game/Logo.png" style="display: none;"/>
        </div>
        <div class="Mute">
        </div>
    </header>

    <main id="Main" role="main">
        <div id="Cinematic" class="Cinematic">
            <!-- Cinematic -->
        </div>
        <div id="Game" class="Game">
            <div id="ObjectInfo">
                <div class="modal glass-effect">
                    <div class="modal-content glass-effect" id="Activity">
                        <span class="close-button hoverable">&times;</span>
                    </div>
                </div>
            </div>

            <!--Jeu -->
            <div id="Area">
                <!-- Aire de jeu -->
                <div id="Objects"></div>
                <div id="Decors"></div>
            </div>
        </div>
        <div id="Interface" class="Interface">
            <!-- Timer -->
        </div>
    </main>
</section>

@endsection
