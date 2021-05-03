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
        <div id="settings-panel">
		    <span id="settings-icon" class="hoverable"><i class="fas fa-cog"></i></span>
        </div>

		<div id="Cinematic" class="Cinematic">
			<!-- Cinematic -->
		</div>
		<div id="Game" class="Game">
			<div id="ObjectInfo">
				<div class="modal glass-effect">
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