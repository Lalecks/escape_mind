@extends('layouts.template')
@section('title', __("le jeu"))

@section('content')

<header class="Header">
    <div class="HeaderLogo"></div>
    <div class="Mute"></div>
</header>
<main id="Main" role="main">
    <div id="Game" class="Game" >
        <div id="Scene" class="Scene">
            <!---->
        </div>
    </div>
    <div id="Interface" class="Interface"></div>
</main>


<script type="module" src="{{ asset('js/main.js') }}" ></script>

@endsection
