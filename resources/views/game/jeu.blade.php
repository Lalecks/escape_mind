@extends('layouts.template')
@section('title', __("le jeu en ligne"))

@section('content')
<section id="game-page">

	<header id="Header">
		<a href="/" class="logo logo-title hoverable glass-effect" style="pointer-events: none; cursor: default;">
			<!-- Nécessaire pour le bon fonctionnement du Loading -->
			<img src="./resources/game/Logo.png" alt="logo"/>
		</a>
		{{-- <span class="mute"><i class="fas fa-volume-mute"></i></span> --}}
		<div id="turn-mobile">
			<div class="phone"></div>
			<p class="message">Veuillez pivoter votre appareil !</p>
		</div>
	</header>

	<div id="Main" role="main">
		@include('game.settings')
		@include('game.cinematics')

		<div id="Game" class="Game">
			<div id="ObjectInfo">
				<div class="modal glass-effect hoverable">
					<div class="modal-content glass-effect" >
						<p class="close-btn hoverable">&times;</p>
						<div id="Activity">
							<!-- Activités de chaque jeu -->
						</div>
					</div>
					<div class="glass-effect" id="Inventory">
						<!-- Inventaire -->
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
        <div id="Sound" class="Sound">
            <div id="Foley">
                <!-- Bruitages <audio id="audio" class="Foley"
                src="./resources/game/room1/audios/hit.mp3"
                hidden="true" autoplay="false" ></audio>-->
            </div>
            <div id="Ambiant">
                <!-- Background Music -->
            </div>
        </div>
	</div>

</section>
@endsection
