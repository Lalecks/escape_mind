<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" xmlns:og='og:http://ogp.me/ns#' dir="ltr">
	<!--====== Entête ======-->
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
		<title>{{ config('app.name') }}&nbsp;-&nbsp;l'escape game en ligne</title>
		<meta name="title" content="{{ config('app.name') }}&nbsp;-&nbsp;l'escape game en ligne"/>
		{{-- <link rel="icon" type="image/png" href=""/> --}}
		<meta name="description" content="Des chercheurs sont sur le point de débrancher l’IA qu’ils ont créée quelques années auparavant, car celle-ci est devenue obsolète.">
		<meta name="keywords" content="escape game, play, artificial intelligence, numeric"/>
		<meta name="copyright" content="© escape_mind"/>
		<meta name="robots" content="index, follow, archive"/>
		<link rel='canonical' href='/'/>
		<!-- OpenGraph -->
		<meta property="og:type" content="website"/>
		<meta property="og:site_name" content="escape_mind"/>
		<meta property="og:url" content="https://escapemind.sarahmauriaucourt.fr/"/>
		<meta property="og:title" content="{{ config('app.name') }}&nbsp;-&nbsp;l'escape game en ligne"/>
		<meta property="og:description" content="Des chercheurs sont sur le point de débrancher l’IA qu’ils ont créée quelques années auparavant, car celle-ci est devenue obsolète."/>
		<meta property="og:locale" content="fr_FR"/>
		<!-- Icônes -->
		<link rel="apple-touch-icon" sizes="57x57" href="{{ asset('ressources/icon/apple-icon-57x57.png')}}">
		<link rel="apple-touch-icon" sizes="60x60" href="{{ asset('ressources/icon/apple-icon-60x60.png')}}">
		<link rel="apple-touch-icon" sizes="72x72" href="{{ asset('ressources/icon/apple-icon-72x72.png')}}">
		<link rel="apple-touch-icon" sizes="76x76" href="{{ asset('ressources/icon/apple-icon-76x76.png')}}">
		<link rel="apple-touch-icon" sizes="114x114" href="{{ asset('ressources/icon/apple-icon-114x114.png')}}">
		<link rel="apple-touch-icon" sizes="120x120" href="{{ asset('ressources/icon/apple-icon-120x120.png')}}">
		<link rel="apple-touch-icon" sizes="144x144" href="{{ asset('ressources/icon/apple-icon-144x144.png')}}">
		<link rel="apple-touch-icon" sizes="152x152" href="{{ asset('ressources/icon/apple-icon-152x152.png')}}">
		<link rel="apple-touch-icon" sizes="180x180" href="{{ asset('ressources/icon/apple-icon-180x180.png')}}">
		<link rel="icon" type="image/png" sizes="192x192"  href="{{ asset('ressources/icon/android-icon-192x192.png')}}">
		<link rel="icon" type="image/png" sizes="32x32" href="{{ asset('ressources/icon/favicon-32x32.png')}}">
		<link rel="icon" type="image/png" sizes="96x96" href="{{ asset('ressources/icon/favicon-96x96.png')}}">
		<link rel="icon" type="image/png" sizes="16x16" href="{{ asset('ressources/icon/favicon-16x16.png')}}">
		<link rel="manifest" href="{{ asset('ressources/icon/manifest.json')}}">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="{{ asset('ressources/icon/ms-icon-144x144.png')}}">
		<meta name="theme-color" content="#ffffff">
		<!-- Stylesheets -->
		<link href="{{ asset('css/app.css') }}" rel="stylesheet">
		{{-- <link href="{{ asset('css/app.min.css') }}" rel="stylesheet"> --}}
		{{-- <link rel="prefetch" href="../game/room1.blade.php"> --}}
		<!-- Scripts -->
		<script src='https://kit.fontawesome.com/c51a60e485.js' crossorigin='anonymous' integrity='sha384-NBHAuYUNWKduo4crumSk720p46lSGmSF7SDtoMEmu+SnsanQ94l8NiUhAPI0UIqx'></script>
	</head>
	<!--====== Corps ======-->
	<body class="modal-open">
		<!-- Souris -->
        <div id="souris">
		<div class="cursor cursor--small"></div>
		<canvas class="cursor cursor--canvas"></canvas>
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
		</div>
		--}}

		<main> <!--id="pjax-container"-->
            @yield("loader")
            <div id="content" style="opacity: 0">
			    @yield('content')
            </div>
		</main>

		<!--====== Javascripts & Jquery ======-->
		<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js'></script>
		<script src='https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.2/paper-full.min.js'></script>
		<script src='https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js'></script>
        <script src="{{ asset('js/app.js') }}" defer></script>
	</body>
</html>
