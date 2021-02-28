<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" xmlns:og='http://ogp.me/ns#' dir="ltr">
	<head>
		<!-- Encodage -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
		<meta http-equiv='X-UA-Compatible' content='IE=edge'>
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<!-- CSRF Token -->
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<!-- Référencement -->
		<title>{{ config('app.name', 'escape_mind') }}</title>
		<!-- Icônes -->
		<!-- Stylesheets -->
		{{-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> --}}
		<link rel="prefetch" href="../game/room1.blade.php">
		<link href="{{ asset('css/sass/app.css') }}" rel="stylesheet">
		<!-- Scripts -->
		{{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}
		<script src='https://kit.fontawesome.com/c51a60e485.js' crossorigin='anonymous' integrity='sha384-NBHAuYUNWKduo4crumSk720p46lSGmSF7SDtoMEmu+SnsanQ94l8NiUhAPI0UIqx'></script>

	</head>
	<body>

		<div class="cursor">
			<div class="cursor__ball cursor__ball--big ">
				<svg height="30" width="30">
					<circle cx="15" cy="15" r="12" stroke-width="0"></circle>
				</svg>
			</div>
			<div class="cursor__ball cursor__ball--small">
				<svg height="10" width="10">
					<circle cx="5" cy="5" r="4" stroke-width="0"></circle>
				</svg>
			</div>
		</div>

		{{--
		<div id="app">
			<nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
				<div class="container">
					<a class="navbar-brand" href="{{ url('/') }}">
						{{ config('app.name', 'Laravel') }}
					</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<!-- Left Side Of Navbar -->
						<ul class="navbar-nav mr-auto">

						</ul>

						<!-- Right Side Of Navbar -->
						<ul class="navbar-nav ml-auto">
							<!-- Authentication Links -->
							@guest
							@if (Route::has('login'))
							<li class="nav-item">
								<a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
							</li>
							@endif

							@if (Route::has('register'))
							<li class="nav-item">
								<a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
							</li>
							@endif
							@else
							<li class="nav-item dropdown">
								<a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
									{{ Auth::user()->name }}
								</a>

								<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
									<a class="dropdown-item" href="{{ route('logout') }}"
									   onclick="event.preventDefault();
												document.getElementById('logout-form').submit();">
										{{ __('Logout') }}
									</a>

									<form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
										@csrf
									</form>
								</div>
							</li>
							@endguest
						</ul>
					</div>
				</div>
			</nav>
			--}}

			<div id="pjax-container" class="py-4">
				@yield('content')
			</div>

			<!--====== Javascripts & Jquery ======-->
			<script src="{{ asset('js/jquery-2.1.4.min.js') }}"></script>
			<script src="{{ asset('js/jquery.pjax.js') }}"></script>
			<script src="{{ asset('js/divers.js') }}"></script>
			<script src="{{ asset('js/scrollBar.js') }}"></script>
			<script src="{{ asset('js/mouse.js') }}"></script>
			<script src="{{ asset('js/zoom.js') }}"></script>
			<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js'></script>
			</body>
		</html>
