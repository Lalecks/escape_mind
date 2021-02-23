@extends('layouts.template')

@section('content')
<div class="index">

    <nav class="navbar">
        <div id="bar_fix"></div>
        <div id="bar_anim"></div>
        <ul>
            <li><a href="#home" class="hoverable active">Accueil</a></li>
            <li><a href="#story"  class="hoverable">Histoire</a></li>
            <li><a href="#rank" class="hoverable">Classement</a></li>
            <li><a href="#about" class="hoverable">À propos</a></li>
            <li><a href="#contact" class="hoverable">Contact</a></li>
        </ul>
    </nav>
    
    <div class="headings">

        <div id="home">
            <video class="bg-video" playsinline="" autoplay="" muted="" loop="">
                <source src="{{ asset('ressources/technology.mp4') }}" type="video/mp4">
            </video>

            <div class="video-overlay">
                <div class="line"></div>
                <div class="circle circle-full"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div id ="home_box">
                    <p>Il y a plusieurs années un scientifique a crée une IA, et aujourd’hui, il doit la débrancher. Pour cela, il se connecte à celle-ci, et se retrouve enfermé dans l’IA qui retrace ses souvenirs.</p>
                    <a class="btn btn_bordure " id="play" href="/jeu" data-pjax>Trailer</a>
                    <a class="btn btn_fond" id="play" href="/jeu" data-pjax>Jouer</a>
                </div>
            </div> 
        </div>

        <div id="story">
            <h1>Histoire</h1>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis, leo eget vestibulum lacinia, odio neque efficitur urna, at tempor augue ligula ut elit. Nulla facilisi. Etiam at justo ut ipsum sagittis consectetur. Nunc aliquam ultrices pulvinar. Praesent in accumsan neque. Praesent vitae arcu fringilla, scelerisque felis ac, eleifend nulla. Quisque sodales, massa vitae bibendum viverra, leo justo malesuada metus, vel aliquet arcu est sed augue. Proin malesuada hendrerit ex.</p>
                <div class="informations">
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
                        <p>45 minutes</p>
                    </div>
                </div>
            </div>
            <div>
                <img src="{{ asset('ressources/web/artificial_intelligence.png') }}" alt="artificial_intelligence"/>
                <div class="circle-yellow"></div>
            </div>
        </div>

        <div id="rank">
            <div class="top3">
                <div>
                    <span>2</span>
                    <img src="{{ asset('ressources/web/model2.png') }}" alt="model2"/>
                    <p>pseudo2</p>
                </div>
                <div>
                    <span>1</span>
                    <img src="{{ asset('ressources/web/model1.png') }}" alt="model1"/>
                    <p>pseudo1</p>
                </div>
                <div>
                    <span>3</span>
                    <img src="{{ asset('ressources/web/model3.png') }}" alt="model3"/>
                    <p>pseudo3</p>
                </div>
            </div>

            <div class="board">
                <table>
                    <thead>
                        <tr>
                            <td>rang_</td>
                            <td>pseudo_</td>
                            <td>temps_</td>
                        </tr>
                    </thead>
                        <tr>
                            <td>1</td>
                            <td>Jack Russell</td>
                            <td>10min</td>
                        </tr>
                </table>
                <img src="{{ asset('ressources/web/cyborg_hand.png') }}" alt="cyborg_hand"/>
            </div>
        </div>

        <div id="about"> 
            <h1>À propos</h1>  
            <div class="project">
                <h2>Quelle est l'origine de ce projet ?</h2>
                <p>Nous sommes cinq étudiants de l’université de Valenciennes. Pour notre projet de fin de licence, nous devions réaliseer un projet. C’est pour ça qu’on a fait un escape game.</p>
            </div> 
            <div class="team">
                <h2>Qui sommes-nous ?</h2>
                <div class="team-img-role">
                    <div>
                        <img src=""/>
                        <span>Sound designer</span>
                    </div>
                    <div>
                        <img src=""/>
                        <span>Sound designer</span>
                    </div>
                    <div>
                        <img src=""/>
                        <span>Infographiste</span>
                    </div>
                    <div>
                        <img src=""/>
                        <span>Webdesigner & développeuse front-end</span>
                    </div>
                    <div>
                        <img src=""/>
                        <span>Développeur frontend & backend</span>
                    </div>
                </div>
                <div class="team-names">
                    <a><span>Antony</span></a>
                    <a><span>Mondine</span></a>
                    <a><span>Camille</span></a>
                    <a><span>Sarah</span></a>
                    <a><span>Alexandre</span></a>
                </div>
            </div>
        </div>

        <div id="contact">
            <div>
            <h1>Conctact</h1>
                <p>Hey ! Tu es à la recherche d’informations ? Ou tu souhaites peut-être donner ton avis sur l’escape game en partageant ton ressenti, d'éventuelles remarques ou suggestions dû à ton expérience ? Tu es sur la bonne page ! Alors, envoie nous un mail, qu’est-ce que tu attends ?</p>
                <div class="socialMedial">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
            <div>
                <a href="mailto:contact@escapemind.fr">contact@escapemind.fr</a>
            </div>
        </div>

    </div>
</div>
@endsection
