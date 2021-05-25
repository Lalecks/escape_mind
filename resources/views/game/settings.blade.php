<div id="settings-panel">
	<div class="burger hoverable fas fa-cog"></div>
	<nav class="settings-menu glass-effect">
		<div id="filter">
			<span class="tablinks active" onclick="openSetting(event,'Mission_setting')"><i class="fas fa-book-open"></i></span>
			<span class="tablinks" onclick="openSetting(event,'Sound_setting')"><i class="fas fa-music"></i></span>
			<span class="tablinks" onclick="openSetting(event,'Info_setting')"><i class="fas fa-info"></i></span>
		</div>

		<div id="tabs" class="glass-effect">
			<div id="Mission_setting" class="tabcontent" style="display: block;">
				<h2>Mission</h2>
				<p>Vous êtes Sacha Ramirez, le concepteur de l’IA dans laquelle vous êtes enfermé ! Trouvez les énigmes et sortez au plus vite, le temps vous est compté !</p>
			</div>

			<div id="Sound_setting" class="tabcontent">
				<h2>Son (à venir)</h2>
				<div>
					<p>Musiques</p>
					<input class="slider glass-effect hoverable" type="range" min="1" max="100" value="50" disabled>
				</div>
				<div>
					<p>Bruitages & effets sonores</p>
					<input class="slider glass-effect hoverable" type="range" min="1" max="100" value="50" disabled>
				</div>
				<div>
					<p>Maître du jeu</p>
					<input class="slider glass-effect hoverable" type="range" min="1" max="100" value="50" disabled>
				</div>
			</div>

			<div id="Info_setting" class="tabcontent">
				<h2>Informations</h2>
				<a href="mailto:escapemind.contact@gmail.com" target="_blank" class="link hoverable"><i class="fas fa-check-double"></i> Un problème ? Contactez‑nous sur <span>escapemind.contact@gmail.com</span></a>
				<a target="_blank" href="{{asset('/legal_notice')}}" class="link hoverable"><i class="fas fa-bug"></i> Informations légales</a>
                <a  href="{{asset('/')}}" class="link hoverable"><i class="fas fa-sign-out-alt"></i> Quitter le jeu</a>
			</div>
		</div>
	</nav>
</div>
