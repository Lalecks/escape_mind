{{-- php artisan vendor:publish --tag=laravel-errors --}}
@extends('layouts.template')

<div class="error">
	<div class="code" data-text="@yield('code')">@yield('code', __('Oh no'))</div>
	<p>Aïe ! @yield('message')</p>
	<a class="hoverable btn btn-animation_glitch" href="{{ app('router')->has('home') ? route('home') : url('/ ') }}">{{ __('Accueil') }}</a>
    {{-- @yield('image') --}}
</div>

<script>
	window.setTimeout(function(){
		// Après 2 minutes, rediriger vers l'accueil
		window.location.href = "/";
	}, 20000);
</script>
