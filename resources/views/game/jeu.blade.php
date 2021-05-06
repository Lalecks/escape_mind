@extends('layouts.template')
@section('title', __("le jeu en ligne"))

@section('content')
<section id="game-page">
	<header id="Header">
		<a href="/" class="logo logo-title hoverable" style="pointer-events: none; cursor: default;">
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
		<menu id="settings-panel">
			<div class="burger">
				<i class="hoverable fas fa-cog"></i>
			</div>
			<nav class="menu glass-effect">
				{{-- <h1>Paramètres</h1> --}}
			</nav>
		</menu>

		<div class="Cinematic" id="Cinematic">
			<!-- Cinematic -->
			<div class="lds-ring" id=preload></div>
			<video id='media-video' preload> </video>

			<div id="controls">
				<div>
					<div id="btn-controls">
						<button id=play class="hoverable fas fa-pause"></button>
						<button id=audioVolume class="hoverable fas fa-volume-off"></button>
					</div>
					<div id="timer">
						<span id="start">0:00</span>
					</div>
				</div>
				<div id="progressBar" class="glass-effect">
					<div id="progressVideo"  class="glass-effect"></div>
				</div>
			</div>
		</div>

		<div id="Game" class="Game">
			<div id="ObjectInfo">
				<div class="modal glass-effect hoverable">
					<div class="modal-content glass-effect" >
						<p class="close-button hoverable">&times;</p>
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
	</div>
</section>
@endsection
