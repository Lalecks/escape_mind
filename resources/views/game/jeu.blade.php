@extends('layouts.template')
@section('title', __("le jeu en ligne"))

@section('content')
<section id="game-page">
	<h1 style="display: none">escape_mind</h1>
	<header id="Header" class="logo-img">
		<a href="{{asset('/')}}" class="logo logo-title hoverable glass-effect" style="pointer-events: none; cursor: default;">
			<!-- Nécessaire pour le bon fonctionnement du Loading -->
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.7 233.93"><defs><style>.cls-1{fill:#fff;}</style></defs><title>escape_mind logo</title><path class="cls-1" d="M119.09,14.69A5.33,5.33,0,1,0,124.41,20,5.33,5.33,0,0,0,119.09,14.69Z" transform="translate(-19.68 -8.63)"/><path class="cls-1" d="M221.85,66.44a10.53,10.53,0,0,0-10.36,8.72l-19.92-2.45A32.2,32.2,0,0,0,160,34.27,32,32,0,0,0,139.08,42l-12.34-13.6a11.37,11.37,0,1,0-.78.65L138.31,42.7a32.16,32.16,0,0,0,4.52,50.92l-14.28,21.47a16.83,16.83,0,0,0-13.32-2.75l.85,2.62a14.14,14.14,0,0,1,14,5.46l2.83-.74a16.8,16.8,0,0,0-3.81-4.13L143.47,94A32,32,0,0,0,160,98.61a32.44,32.44,0,0,0,5.78-.53l7.72,29.63a28.18,28.18,0,0,0-16.26,15.72l-22.51-9a17.26,17.26,0,0,0,.57-2,17.07,17.07,0,0,0,.28-1.84l-2.88.75c0,.17,0,.35-.08.52a14.15,14.15,0,0,1-21.37,9.08l-2.18,1.86c.45.32.92.61,1.41.89l-8.25,15.77a43.49,43.49,0,0,0-37.65.92l-5-10.61a28.09,28.09,0,0,0,16.15-23.48l26.1,2a16.92,16.92,0,0,0,4.56,12.18l2.08-1.78a14.17,14.17,0,0,1,4.61-22.78l-.85-2.62a16.89,16.89,0,0,0-10.05,12.11c-.1.51-.18,1-.24,1.52l-26.15-2c0-.2,0-.4,0-.61a28,28,0,1,0-18.57,26.43l5.11,10.87a43.48,43.48,0,1,0,64.2,48l18.24,2.25a14.8,14.8,0,1,0,23.08-13.35l7.86-17.39a28.08,28.08,0,1,0,7.5-55.13,28.6,28.6,0,0,0-6.11.67l-7.67-29.46a32.25,32.25,0,0,0,21.5-22l20.39,2.51a10.52,10.52,0,1,0,10.49-11.26ZM119.09,29a9,9,0,1,1,9-9A9,9,0,0,1,119.09,29ZM84.38,232.85a33.78,33.78,0,1,1,33.78-33.78A33.78,33.78,0,0,1,84.38,232.85Zm33.81-61.1a43.45,43.45,0,0,0-15-11.9l8.23-15.75a17.11,17.11,0,0,0,3.86,1.34,17.61,17.61,0,0,0,2.94.36Zm1.26,1.63V145.8a17,17,0,0,0,14-8.47l22.79,9.14a28.16,28.16,0,0,0,1.05,18.23L123.7,180.49A43.54,43.54,0,0,0,119.45,173.38ZM144.77,211l-18-2.22a43.44,43.44,0,0,0-.76-22.29l17.45-8.2,9.13,19.4a14.81,14.81,0,0,0-7.83,13.06A2.29,2.29,0,0,0,144.77,211Zm27.11-.25a12.32,12.32,0,1,1-12.32-12.32A12.33,12.33,0,0,1,171.88,210.74Zm-6.22-13.48a14.7,14.7,0,0,0-11.95-.12l-9.12-19.4,15.78-7.42a28.2,28.2,0,0,0,12.95,10Z" transform="translate(-19.68 -8.63)"/><circle class="cls-1" cx="64.7" cy="190.44" r="25.19"/></svg>
		</a>
		<div id="turn-mobile">
			<div class="phone"></div>
			<p class="message">Veuillez pivoter votre appareil !</p>
		</div>
	</header>

	<div id="Main" role="main">
		@include('game.cinematics')

		<div id="Game" class="Game fadeIn">
			@include('game.settings')
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
            <div id="Music">
                <!-- Background Music -->
            </div>
            <div id="IA">
                <!-- AI Voice -->
            </div>
            <div id="Sacha">
                <!-- AI Voice -->
            </div>
        </div>
	</div>

</section>
@endsection
