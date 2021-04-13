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
            <div id="Objects"></div>
            <div id="Decors"></div>
        </div>
    </section>
    <section id="Interface" class="Interface">
        <!-- Timer -->
    </section>
</main>



{{--
<div class="grid">
            
            <div class="filterDiv show lien-cliquable web" data-id='m18'>
                <img alt="meetgeek" src="Ressources/real-pro/meetgeek.png">
                <div class="real-over">
                    <p class="tittle-real"><strong>MeetGeek</strong></p>
                    <p class="support">Web</p>
                </div>
            </div>
</div>
 <div id="real-caché" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <div id='content'></div>
            </div>
        </div>

        <div class="cache">

            <div class='hidden' id="m18">
                <h1><strong>MeetGeek</strong></h1>
                <div>
                    <div class="production-realisation">
                        <img alt="meetgeek" src="Ressources/real-pro/meetgeek.png">
                    </div>
                    <div class="description-realisation">L’objectif était de créer et réaliser un mini facebook. En binôme, je me suis occupée de la partie web (front et back), tandis que ma coéquipière a confectionné les maquettes du site.
                        <div>
                            <br>
                            <a href="https://meetgeek.000webhostapp.com/index.php" target="_blank" class="boutton">MeetGeek</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> --}}
@endsection