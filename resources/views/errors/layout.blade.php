{{-- php artisan vendor:publish --tag=laravel-errors --}}
@extends('layouts.template')
@section('content')
@include("layouts.header")
<div class="error center">
	<div class="code" data-text="@yield('code')">@yield('code', __('Oh no'))</div>
	<h2>Aïe ! @yield('message')</h2>
	<p>Vous pouvez revenir à <a class="hoverable link_hover" href="Javascript:history.go(-1)">la page précédente</a> ou aller à <a class="hoverable link_hover" href="{{ app('router')->has('home') ? route('home') : url('/') }}">{{ __("la page d'accueil") }}</a>.</p>
	{{-- <img src="{{ asset('ressources/404.gif') }}" alt="@yield('code')_error"> --}}
</div>
<!--====== Javascripts & Jquery ======-->
<script>dd
	window.setTimeout(function(){
		// Après 2 minutes, rediriger vers l'accueil
		window.location.href = "/";
	}, 20000);
</script>
@endsection