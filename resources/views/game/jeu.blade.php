@extends('layouts.template')
@section('title', __("le jeu"))

@section('content')

<section class="landscape">
    <p>Test paysage portable</p>
    <header class="Header">
        <div class="HeaderLogo"></div>
        <div class="Mute"></div>
    </header>
    <main id="Main" role="main">
        <!-- Loader et Cinematiques -->
        <div id="Game" class="Game" >
            <div id="Background"></div>
        </div>
        <div id="Interface" class="Interface">
        </div>
    </main>
</section>
@endsection
