<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr">
	{{-- xmlns:og='og:http://ogp.me/ns#' --}}
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
	</head>
	<!--====== Corps ======-->
	<body>
		<!-- Loader -->
		<div id="overlay">
			<div id="progstat"></div>
			<div id="progress"></div>
		</div>
		<!-- Souris -->
		<div id="souris">
			<div class="cursor"></div>
			<div class="follower"></div>
		</div>
		<!-- Content -->
		<main>
			<div id="fullscreen" style="opacity:0;"></div>
			<div id="content" style="opacity: 0">
				@yield('content')
			</div>
		</main>
		<!--====== Javascripts & Jquery ======-->
		<script src="{{ mix('js/app.js') }}" defer></script>
		<script>
			/* Menu de type onglets pour les différents paramètres */
			function openSetting(evt, settingName) {
				var i, tabcontent, tablinks;
				tabcontent = document.getElementsByClassName("tabcontent");
				for (i = 0; i < tabcontent.length; i++) {
					tabcontent[i].style.display = "none";
				}
				tablinks = document.getElementsByClassName("tablinks");
				for (i = 0; i < tablinks.length; i++) {
					tablinks[i].className = tablinks[i].className.replace(" active", "");
				}
				document.getElementById(settingName).style.display = "block";
				evt.currentTarget.className += " active";
			}
		</script>
	</body>
</html>