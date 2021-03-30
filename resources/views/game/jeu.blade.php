@extends('layouts.template')
@section('title', __("le jeu"))

@section('content')

<header id="Header" class="Header">
    <div class="HeaderLogo">
        <img class="logo hoverable" id="HeaderLogo" src="{{ asset('ressources/logo.png') }}" alt="Logo"/>
    </div>
    <div class="Mute"></div>
</header>
<main id="Main" role="main">
    <div id="Cinematic" class="Cinematic">

    </div>
    <div id="Game" class="Game" >
        <div id="Background"></div>
    </div>
    <div id="Interface" class="Interface">

    </div>

</main>


<script type="module" src="{{ asset('js/main.js') }}" ></script>

@endsection
