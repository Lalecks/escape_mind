@extends('layouts.template')
@section('title', __("le jeu en ligne"))

@section('content')
<section id="game-page" class="landscape">
    {{-- <p>zse</p> --}}
    <header id="Header" class="Header">
        <div class="HeaderLogo">
        </div>
        <div class="Mute">
        </div>
    </header>

    <main id="Main" role="main">
        <div id="Cinematic" class="Cinematic">
            <!-- Cinematic -->
        </div>
        <div id="Game" class="Game">
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
{{-- 
<div class="modal glass-effect">
				<!-- Ne pas mettre la modal dans le vidéo overlay, car il est en absolute et par conséquent la modal ne peut pas se fixer -->
				<div class="modal-content glass-effect">
					<span class="close-button hoverable">&times;</span>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/gA03iyI3yEA" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
				</div>
			</div>
								<a class="btn btn-outline-primary trigger hoverable glass-effect">Trailer</a> --}}

@endsection