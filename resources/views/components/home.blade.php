@extends('layouts.template')
@section('title', __("l'escape game en ligne"))

@section('content')
@guest

<div id="home-page">
	<span id="bg-noise"></span>

	<header>
		<a class="logo logo-title" href="#">escape_mind</a>
		<!-- Début : menu burger -->
		<input type='checkbox' id='toggle' style='display:none;'/>
		<label class='toggle-btn toggle-btn__cross hoverable' for='toggle'>
			<div class="bar"></div>
			<div class="bar"></div>
			<div class="bar"></div>
		</label>

		<!-- Fin : menu burger -->
		<nav class="navbar">
			<div id="scroll-indicator" class="scroll-indicator">
				<div id="indicator" class="indicator">
					<span></span>
				</div>
			</div>

			<ul id="side-bar">
				<li><a href="#home" class="hoverable active">Accueil</a></li>
				<li><a href="#story"  class="hoverable">Histoire</a></li>
				<li><a href="#top_score" class="hoverable">Top score</a></li>
				<li><a href="#rank" class="hoverable">Classement</a></li>
				<li><a href="#about" class="hoverable">À propos</a></li>
				<li><a href="#contact" class="hoverable">Contact</a></li>
			</ul>
		</nav>
	</header>


	<div class="index">
		<div class="headings container">
			<div class="modal glass-effect hoverable">
				<!-- Ne pas mettre la modal dans le vidéo overlay, car il est en absolute et par conséquent la modal ne peut pas se fixer -->
				<div class="modal-content glass-effect">
					<span class="close-btn hoverable">&times;</span>
					<iframe id="yt_player_iframe" width="560" height="315" src="https://www.youtube.com/embed/fvWlmyezte0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>

			<section id="home">
				<h1 style="display: none">Accueil</h1>
				<video class="bg-video" playsinline="" autoplay="" muted="" loop="">
					<source src="{{ asset('resources/technology.mp4') }}" type="video/mp4">
				</video>
				<div class="video-overlay">
					{{-- <div class="line"></div>
					<div class="glass-effect circle circle-full-cyan_blue"></div>
					<div class="glass-effect circle circle-border-cyan_blue"></div> --}}
					{{-- <div class=" circle circle-border-cyan_blue"></div> --}}
					<div id ="home_box" class="glass-effect">
						<img class="glass-effect" src="{{ asset('resources/web/sacha.png') }}" alt="sacha_scientist">
						{{-- <div class="circle circle-border-cyan_blue"></div> --}}
						<div>
							<p>Il y a plusieurs années un scientifique a crée une IA, et aujourd’hui, il doit la débrancher. Pour cela, il se connecte à celle-ci, et se retrouve enfermé dans l’IA qui retrace ses souvenirs.</p>
							<div>
								<a class="btn btn-outline-primary trigger hoverable glass-effect">Trailer</a>
								<a class="btn btn-fill-primary hoverable glass-effect btn-animation_glitch" id="play" href="/play" data-pjax>Jouer</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="story">
				<h1 class="rellax" data-rellax-speed="2.4">Histoire</h1>
				<div class="story-informations">
					<p>Sacha Ramirez est un développeur travaillant dans le laboratoire NEWT, créateur d’intelligences artificielles. Dans ces débuts, Sacha, a créé KIARA une intelligence capable d'envoyer des pensées positives et des rêves apaisants aux personnes souffrant d’insomnies. Au fil du temps, l’IA KIARA est devenue certifiée et reconnue efficace pour ses bienfaits. Malheureusement, celle-ci a commencé à garder en mémoire les pensées négatives et souvenirs des personnes testées. Le laboratoire NEWT a donc pris la décision de la débrancher définitivement. Sacha, très attaché à cette IA, décide de la tester une dernière fois avant que le laboratoire ne la débranche au bout d’une heure.</p>
					<div class="story-items">
						<div>
							<p>Thème</p>
							<p>Intelligence artificielle</p>
						</div>
						<div>
							<p>Nombre de joueur</p>
							<p>1 joueur</p>
						</div>
						<div>
							<p>Niveau</p>
							<p>Intermédiaire</p>
						</div>
						<div>
							<p>Durée</p>
							<p>20 minutes</p>
						</div>
					</div>
				</div>
				<div class="story-illustration">
					<div class="glass-effect circle circle-yellow"></div>
					<img src="{{ asset('resources/web/artificial_intelligence.png') }}" alt="artificial_intelligence"/>
				</div>
			</section>

			<section id="top_score">
				<h1 class="rellax" data-rellax-speed="1.5">Records</h1>
				<div class="second">
					<div>
						<svg width="154" height="323" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							{{-- <g filter="url(#filter0_bd)"> --}}
							<path d="M1.934 297C1.69 288.704 1.446 282.116 1.202 277.236C1.202 272.112 1.202 266.866 1.202 261.498C1.202 256.13 1.324 248.81 1.568 239.538C2.056 217.578 6.326 200.01 14.378 186.834C22.43 173.414 33.776 162.19 48.416 153.162L68.546 139.986C76.354 134.862 81.356 128.884 83.552 122.052C85.748 115.22 86.968 108.632 87.212 102.288C87.944 86.428 87.944 70.568 87.212 54.708C86.724 47.632 84.528 42.386 80.624 38.97C76.964 35.554 71.108 33.846 63.056 33.846C48.66 33.846 41.34 40.8 41.096 54.708C40.608 63.98 40.364 73.252 40.364 82.524C40.364 91.552 40.608 100.702 41.096 109.974H1.934C1.69 101.678 1.446 93.26 1.202 84.72C0.958001 75.936 0.958001 68.25 1.202 61.662C2.178 39.946 7.424 24.452 16.94 15.18C26.7 5.90799 42.194 1.27199 63.422 1.27199C85.87 1.27199 101.73 5.90799 111.002 15.18C120.518 24.452 125.764 39.946 126.74 61.662C126.984 67.518 127.106 74.35 127.106 82.158C127.106 89.722 126.984 96.432 126.74 102.288C126.252 119.856 122.348 134.252 115.028 145.476C107.952 156.7 97.338 166.704 83.186 175.488L60.494 189.396C53.662 194.276 48.782 201.596 45.854 211.356C42.926 220.872 41.462 230.266 41.462 239.538V261.864H124.178V297H1.934Z" fill="url(#second_linear)" fill-opacity="0.74"/>
							<defs>
								<filter x="-58.9814" y="-58.728" width="246.087" height="415.728" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
									<feFlood flood-opacity="0" result="BackgroundImageFix"/>
									<feGaussianBlur in="BackgroundImage" stdDeviation="29.5"/>
									<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
									<feOffset dx="15" dy="15"/>
									<feGaussianBlur stdDeviation="5"/>
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
									<feBlend mode="normal" in2="effect1_backgroundBlur" result="effect2_dropShadow"/>
									<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
								</filter>
								<linearGradient id="second_linear" x1="139.313" y1="349.33" x2="-72.7574" y2="307.787" gradientUnits="userSpaceOnUse">
									<stop offset="100%" stop-color="#121212" stop-opacity="0.44"/>
									<stop offset="1" stop-opacity="0.25"/>
								</linearGradient>
							</defs>
							{{-- </g> --}}
						</svg>
						<img src="{{ asset('resources/web/model2.png') }}" alt="model2"/>
					</div>
					<p class="logo-title">{{$secondUser->name}}</p>
				</div>
				<div class="first">
					<div>
						<svg width="84" height="320" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							{{-- <g filter="url(#filter0_bd)"> --}}
							<path d="M18.012 294V38.898H2.274L1.176 24.258L26.064 1.2H57.54V294H18.012Z" fill="url(first_linear)" fill-opacity="0.74"/>
							{{-- </g> --}}
							<defs>
								<filter x="-58.8574" y="-58.7998" width="176.397" height="412.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
									<feFlood flood-opacity="0" result="BackgroundImageFix"/>
									<feGaussianBlur in="BackgroundImage" stdDeviation="29.5"/>
									<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
									<feOffset dx="15" dy="15"/>
									<feGaussianBlur stdDeviation="5"/>
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
									<feBlend mode="normal" in2="effect1_backgroundBlur" result="effect2_dropShadow"/>
									<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
								</filter>
								<linearGradient id="first_linear" x1="71.9266" y1="346.33" x2="-45.7491" y2="333.873" gradientUnits="userSpaceOnUse">
									<stop offset="100%" stop-color="#121212" stop-opacity="0.44"/>
									<stop offset="1" stop-opacity="0.25"/>
								</linearGradient>
							</defs>
						</svg>
						<img src="{{ asset('resources/web/model1.png') }}" alt="model1"/>
					</div>
					<p class="logo-title">{{$user->first()->name}}</p>
					{{-- <p class="logo-title">{{$firstUser->id(1)}}</p> --}}
				</div>
				<div class="third">
					<div>
						<svg width="157" height="323"  viewBox="0 0 157 323" xmlns="http://www.w3.org/2000/svg">
							{{-- <g filter="url(#filter0_bd)"> --}}
							<path d="M67.324 296.928C44.632 296.928 28.284 292.292 18.28 283.02C8.276 273.504 2.908 257.888 2.176 236.172C1.932 229.096 1.81 222.752 1.81 217.14C1.81 211.284 1.932 203.842 2.176 194.814H41.704V241.296C41.704 256.668 49.878 264.354 66.226 264.354C82.33 264.354 90.504 256.668 90.748 241.296C90.992 232.268 91.114 222.874 91.114 213.114C91.114 203.11 90.992 193.838 90.748 185.298C90.26 177.002 88.186 170.414 84.526 165.534C80.866 160.41 73.79 157.97 63.298 158.214L35.848 158.58L34.384 124.908L84.16 36.336H4.372V1.2H129.544L129.178 34.872L77.572 123.81C95.384 125.274 108.316 130.886 116.368 140.646C124.664 150.162 129.3 165.046 130.276 185.298C130.764 205.306 130.764 222.264 130.276 236.172C129.3 257.888 123.932 273.504 114.172 283.02C104.412 292.292 88.796 296.928 67.324 296.928Z" fill="url(#third_linear)" fill-opacity="0.74"/>
							{{-- </g> --}}
							<defs>
								<filter x="-58.1904" y="-58.7998" width="248.832" height="415.728" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
									<feFlood flood-opacity="0" result="BackgroundImageFix"/>
									<feGaussianBlur in="BackgroundImage" stdDeviation="29.5"/>
									<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
									<feOffset dx="15" dy="15"/>
									<feGaussianBlur stdDeviation="5"/>
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
									<feBlend mode="normal" in2="effect1_backgroundBlur" result="effect2_dropShadow"/>
									<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
								</filter>
								<linearGradient id="third_linear" x1="143.348" y1="346.33" x2="-67.5013" y2="305.283" gradientUnits="userSpaceOnUse">
									<stop offset="100%" stop-color="#121212" stop-opacity="0.44"/>
									<stop offset="1" stop-opacity="0.25"/>
								</linearGradient>
							</defs>
						</svg>
						<img src="{{ asset('resources/web/model3.png') }}" alt="model3"/>
					</div>
					<p class="logo-title">{{$thirdUser->name}}</p>
				</div>
			</section>

			<section id="rank">
				<h1 style="display: none">Classement</h1>
				<table>
					<thead>
						<tr class="logo-title">
							<td>rang_</td>
							<td>pseudo_</td>
							<td>temps_</td>
						</tr>
					</thead>
					<tbody>
						@foreach ($user as $key => $u)
						<tr>
								@if($key<9)
							<td>0{{$key+1}}</td>
						@else
							<td>{{$key+1}}</td>
							@endif
							<td>{{$u->name}}</td>
							<td>
								{{ ($u->time_game)}}s
							</td>
						</tr>
					@endforeach
					</tbody>
				</table>
				<div class="hand"><img src="{{ asset('resources/web/cyborg_hand.png') }}" alt="cyborg_hand"/></div>
			</section>

			<section id="about">
				<h1 class="rellax" data-rellax-speed=".4">À propos</h1>
				<div class="project">
					<h2>l'origine du projet</h2>
					<p>Nous sommes cinq étudiants de l’université de Valenciennes. Pour notre projet de fin de licence, nous devions réaliseer un projet. C’est pour ça qu’on a fait un escape game.</p>
				</div>
				<div class="team">
					<div class="team-img-role glass-effect">
						<h2>Qui sommes-nous ?</h2>
						<div class="hoverable">
							<img class="hoverable" src="{{ asset('resources/web/team/ant.png') }}" alt="antony_deschodt"/>
							<span class="hoverable team-role">Sound designer</span>
							<span class="team-name logo-title">Antony</span>
						</div>
						<div class="hoverable">
							<img class="hoverable" src="{{ asset('resources/web/team/mon.png') }}" alt="mondine_odin"/>
							<span class="team-role hoverable">Sound designer</span>
							<span class="team-name logo-title">Mondine</span>
						</div>
						<div class="hoverable">
							<img class="hoverable" src="{{ asset('resources/web/team/ca.png') }}" alt="camille_kozack"/>
							<span class="team-role hoverable">Infographiste</span>
							<span class="team-name logo-title">Camille</span>
						</div>
						<div class="hoverable">
							<img class="hoverable" src="{{ asset('resources/web/team/sa.png') }}" alt="sarah_mauriaucourt"/>
							<span class="team-role hoverable">Webdesigner &amp; développeuse front-end</span>
							<span class="team-name logo-title">Sarah</span>
						</div>
						<div class="hoverable">
							<img class="hoverable" src="{{ asset('resources/web/team/ant.png') }}" alt="alexandre_lavaud"/>
							<span class="team-role hoverable">Développeur frontend &amp; backend</span>
							<span class="team-name logo-title">Alexandre</span>
						</div>
					</div>
				</div>
			</section>

			<section id="contact">
				<h1 class="rellax" data-rellax-speed=".4">Conctact</h1>
				<div class="contact-center">
					<div class="contact-txt">
						<p>Hey ! Tu es à la recherche d’informations ? Ou tu souhaites peut-être donner ton avis sur l’escape game en partageant ton ressenti, d'éventuelles remarques ou suggestions dû à ton expérience ? Tu es sur la bonne page ! Alors, envoie nous un mail, qu’est-ce que tu attends&nbsp;?</p>
						<div class="media">
							<a href="#" class="facebook">
								<i class="fab fa-facebook-f hoverable"></i>
							</a>
							<a href="#" class="instagram">
								<i class="fab fa-instagram hoverable"></i>
							</a>
							<a href="#" class="youtube">
								<i class="fab fa-youtube hoverable"></i>
							</a>
						</div>
					</div>
					<div class="take-contact">
						<a href="mailto:escapemind.contact@gmail.com" class="mail hoverable">escapemind.contact@gmail.com</a>
					</div>
				</div>
			</section>
			</div>
		</div>

	<footer>
		<div>
			<span>escape_mind</span>
			{{-- <span>escape_mind</span> --}}
		</div>
		<p>&copy; {{ date('Y') }} {{ config('app.name') }}. <a href="{{asset("./legal_notice")}}" style="color: black">Tous droits réservés.</a></p>
	</footer>
</div>
@endguest
@endsection
