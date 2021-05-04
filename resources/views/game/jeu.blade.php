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
				<i class="fas fa-cog"></i>
			</div>
			<nav class="menu glass-effect">
				d
			</nav>
		</menu>


		<div id="Cinematic" class="Cinematic">
			<!-- Cinematic -->
			<div class="container-player">
				<div id="mediaPlayer">
					<div class="lds-ring" id=preload></div>
					<video id='media-video' preload>
{{--						<source id="webm" type="video/webm" src="./resources/cinematic/beginning.webm">--}}
{{--						<source  src="./resources/cinematic/beginning.mp4" type='video/mp4'>--}}
{{--						<source id="ogg" type="video/ogg" src="./resources/cinematic/beginning.ogv">--}}
					</video>
					<div id="controls">
						<button id=play><i class="fas fa-pause"></i></button>
						<button id=audioVolume class="fas fa-volume-off"></button>
						<div id="progressBar">
							<div id="progressVideo" style="width: 40%;"></div>
						</div>
						<div id="timer">
							<span id="start">0 : 00</span>
						</div>
						<button id=expand><i class="fas fa-expand"></i></button>
					</div>
				</div>
				<div id="playlist">
				</div>
			</div>
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
