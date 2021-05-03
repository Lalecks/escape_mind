<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" xmlns:og='og:http://ogp.me/ns#' dir="ltr">
	<!--====== Entête ======-->
	<head>
		<!-- Encodage -->
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv='X-UA-Compatible' content='IE=edge'>
		<meta name='apple-mobile-web-app-capable' content='yes'>
		<!-- CSRF Token -->
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<!-- Référencement -->
		<title>{{ config('app.name') }}&nbsp;-&nbsp; @yield('title')</title>
		<meta name="title" content="{{ config('app.name') }}&nbsp;-&nbsp;l'escape game en ligne"/>
		{{-- <link rel="icon" type="image/png" href=""/> --}}
		<meta name="description" content="Des chercheurs sont sur le point de débrancher l’IA qu’ils ont créée quelques années auparavant, car celle-ci est devenue obsolète.">
		<meta name="keywords" content="escape game, play, artificial intelligence, numeric"/>
		<meta name="copyright" content="© escape_mind"/>
		<meta name="robots" content="index, follow, archive"/>
		<link rel='canonical' href='https://escapemind.sarahmauriaucourt.fr/'/>
		<!-- OpenGraph -->
		<meta property="og:type" content="website"/>
		<meta property="og:site_name" content="escape_mind"/>
		<meta property="og:url" content="https://escapemind.sarahmauriaucourt.fr/"/>
		<meta property="og:title" content="{{ config('app.name') }}&nbsp;|&nbsp;l'escape game en ligne"/>
		<meta property="og:description" content="Des chercheurs sont sur le point de débrancher l’IA qu’ils ont créée quelques années auparavant, car celle-ci est devenue obsolète."/>
		<meta property="og:locale" content="fr_FR"/>
		<meta property="og:image" content="https://site.com/post.jpg" />
		<meta property="og:image" content="{{ asset('resources/icon/apple-icon-57x57.png')}}"/>
        <meta property="og:image:secure_url" content="{{ asset('resources/icon/apple-icon-57x57.png')}}"/>
        <meta property="og:image:alt" content="escape_mind"/>
        <meta property="og:image:width" content="57"/>
        <meta property="og:image:height" content="57"/>
        {{-- <meta property="og:video" content=""/> --}}
		<!-- Twitter card -->
		<meta name="twitter:card" content="player">
		<meta name="twitter:site" content="@escapemind">
		<meta name="twitter:title" content="@yield('title')">
		<meta name="twitter:description" content="Des chercheurs sont sur le point de débrancher l’IA qu’ils ont créée quelques années auparavant, car celle-ci est devenue obsolète.">
		<meta name="twitter:image" content="{{ asset('resources/icon/apple-icon-57x57.png')}}">
		<!-- Icônes -->
		<link rel="apple-touch-icon" sizes="57x57" href="{{ asset('resources/icon/apple-icon-57x57.png')}}">
		<link rel="apple-touch-icon" sizes="60x60" href="{{ asset('resources/icon/apple-icon-60x60.png')}}">
		<link rel="apple-touch-icon" sizes="72x72" href="{{ asset('resources/icon/apple-icon-72x72.png')}}">
		<link rel="apple-touch-icon" sizes="76x76" href="{{ asset('resources/icon/apple-icon-76x76.png')}}">
		<link rel="apple-touch-icon" sizes="114x114" href="{{ asset('resources/icon/apple-icon-114x114.png')}}">
		<link rel="apple-touch-icon" sizes="120x120" href="{{ asset('resources/icon/apple-icon-120x120.png')}}">
		<link rel="apple-touch-icon" sizes="144x144" href="{{ asset('resources/icon/apple-icon-144x144.png')}}">
		<link rel="apple-touch-icon" sizes="152x152" href="{{ asset('resources/icon/apple-icon-152x152.png')}}">
		<link rel="apple-touch-icon" sizes="180x180" href="{{ asset('resources/icon/apple-icon-180x180.png')}}">
		<link rel="icon" type="image/png" sizes="192x192"  href="{{ asset('resources/icon/android-icon-192x192.png')}}">
		<link rel="icon" type="image/png" sizes="32x32" href="{{ asset('resources/icon/favicon-32x32.png')}}">
		<link rel="icon" type="image/png" sizes="96x96" href="{{ asset('resources/icon/favicon-96x96.png')}}">
		<link rel="icon" type="image/png" sizes="16x16" href="{{ asset('resources/icon/favicon-16x16.png')}}">
		<link rel="manifest" href="{{ asset('resources/icon/manifest.json')}}">
		<meta name="msapplication-TileColor" content="#1A1A1A">
		<meta name="msapplication-TileImage" content="{{ asset('resources/icon/ms-icon-144x144.png')}}">
		<meta name="theme-color" content="#1A1A1A">
		<!-- Stylesheets -->
		<link href="{{ mix('css/app.css') }}" rel="stylesheet">
		<!-- Scripts -->
		<script src='https://kit.fontawesome.com/c51a60e485.js' crossorigin='anonymous' integrity='sha384-NBHAuYUNWKduo4crumSk720p46lSGmSF7SDtoMEmu+SnsanQ94l8NiUhAPI0UIqx'></script>

				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

	</head>
	<!--====== Corps ======-->
	<body>
		<!-- Loader -->
		<div id="overlay"> 
			<div id="progstat"></div>
			<div id="progress"></div>
		</div>
		<!-- Souris -->
		<div id="souris" style="opacity: 0">
			<div class="cursor cursor--small"></div>
			<canvas class="cursor cursor--canvas"></canvas>
		</div>

		<main>
            <div id="fullscreen" style="opacity:0;"></div>
			<div id="content" style="opacity: 0">
				@yield('content')
			</div>
		</main>
		
		<!--====== Javascripts & Jquery ======-->
		<script src="https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@master/rellax.min.js"></script>
		<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js'></script>
		<script src='https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.2/paper-full.min.js'></script>
		<script src='https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js'></script>
		<script src="{{ mix('js/app.js') }}" defer></script>
	</body>
</html>
