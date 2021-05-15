<div id="settings-panel">
	<div class="burger hoverable fas fa-cog"></div>
	<nav class="settings-menu glass-effect">			
		<div id="filter">
			<span class="tablinks active" onclick="openSetting(event,'Story')"><i class="fas fa-book-open"></i></span>
			<span class="tablinks" onclick="openSetting(event,'Sound')"><i class="fas fa-music"></i></span>
			{{-- <span class="tablinks" onclick="openSetting(event,'Languages')"><i class="fas fa-globe-europe"></i></span> --}}
			<span class="tablinks" onclick="openSetting(event,'Info')"><i class="fas fa-info"></i></span>
		</div>

		<div id="tabs" class="glass-effect">
			<div id="Story" class="tabcontent" style="display: block;">
				<h2>Histoire</h2>
			</div>

			<div id="Sound" class="tabcontent">
				<h2>Son</h2>
				<div>
					<p>Musiques</p>
					<input class="slider glass-effect hoverable" type="range" min="1" max="100" value="50">
				</div>
				<div>
					<p>Bruitages & effets sonores</p>
					<input class="slider glass-effect hoverable" type="range" min="1" max="100" value="50">
				</div>
				<div>
					<p>Maître du jeu</p>
					<input class="slider glass-effect hoverable" type="range" min="1" max="100" value="50">
				</div>
			</div>

			{{-- <div id="Languages" class="tabcontent">
				<h2>Langues</h2>
				<div>
					<i class='fas fa-flag-usa'></i>
				</div>
			</div> --}}

			<div id="Info" class="tabcontent">
				<h2>Informations</h2>
				<a href="mailto:contact.escapemind@gmail.com" class="link hoverable"><i class="fas fa-check-double"></i> Un problème ? Contactez‑nous sur <span>contact.escapemind@gmail.com</span></a>
				<a target="_blank" href="{{asset('/legal_notice')}}" class="link hoverable"><i class="fas fa-bug"></i> Informations légales</a>
                <a  href="{{asset('/')}}" class="link hoverable"><i class="fas fa-sign-out-alt"></i> Quitter le jeu</a>
			</div>
		</div>
	</nav>
</div>