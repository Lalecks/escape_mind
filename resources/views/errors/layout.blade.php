@extends('layouts.template')

<div class="error">
	<div class="code" data-text="@yield('code')">@yield('code', __('Oh no'))</div>
	<p>Aïe ! @yield('message')</p>
	<a class="hoverable btn" href="{{ app('router')->has('home') ? route('home') : url('/') }}">
		{{-- <button> --}}
			{{ __('Accueil') }}
		{{-- </button> --}}
	</a>
</div>

{{-- @yield('image') --}}