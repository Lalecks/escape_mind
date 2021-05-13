<menu id="settings-panel">
    <span class="burger hoverable fas fa-cog"></span>
    <nav class="settings-menu glass-effect">			
        <div id="filter">
            <span class="tablinks active" onclick="openSetting(event,'Story')"><i class="fas fa-book-open"></i></span>
            <span class="tablinks" onclick="openSetting(event,'Sound')"><i class="fas fa-music"></i></span>
            <span class="tablinks" onclick="openSetting(event,'Languages')"><i class="fas fa-globe-europe"></i></span>
            <span class="tablinks" onclick="openSetting(event,'Info')"><i class="fas fa-info"></i></span>
            <span class="tablinks" onclick="openSetting(event,'Deconnexion')"><i class="fas fa-sign-out-alt"></i></span>
        </div>

        <div id="tabs" class="glass-effect">
            <div id="Story" class="tabcontent" style="display: block;">
                <h2>Histoire</h2>
            </div>

            <div id="Sound" class="tabcontent">
                <h2>Son</h2>
                <p>Volume des musiques - Sound en %</p>
                <input class="slider glass-effect" type="range" min="1" max="100" value="50">
                <p>Volume des musiques - Music</p>
                <input class="slider glass-effect" type="range" min="1" max="100" value="50">

                <p>Volume des bruitages/effets sonores - Sound fx</p>
                <input class="slider glass-effect" type="range" min="1" max="100" value="50">

                <p>Volume du gamemaster</p>
                <input class="slider glass-effect" type="range" min="1" max="100" value="50">

                <p>Notif</p>
                <input class="slider glass-effect" type="range" min="1" max="100" value="50">
            </div>

            <div id="Languages" class="tabcontent">
                <h2>Langues</h2>
                <div>
                    <i class='fas fa-flag-usa'></i>
                </div>
            </div>

            <div id="Info" class="tabcontent">
                <h2>Information</h2>
                <p>Un problème ?</p>
                <p>Private policy</p>
                <p></p>
                <p><a href="{{asset('/legal_notice')}}">Informations légales</a></p>
            </div>

            <div id="Deconnexion" class="tabcontent">
                <h2>Deconnexion</h2>
                <a href="/">Quitter le jeu</a>
            </div>
        </div>
    </nav>
</menu>