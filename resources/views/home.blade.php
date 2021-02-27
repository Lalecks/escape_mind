@extends('layouts.template')

@section('content')
<div class="index">
    <header>
        <a class="logo logo-title">escape_mind</a>
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
    </header>
    <div class="headings container">
        <div id="home">
            <video class="bg-video" playsinline="" autoplay="" muted="" loop="">
                <source src="{{ asset('ressources/technology.mp4') }}" type="video/mp4">
            </video>

            <div class="video-overlay">
                <div class="line"></div>
                <div class="circle circle-full"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div id ="home_box" class="glass-effect ">
                    <p>Il y a plusieurs années un scientifique a crée une IA, et aujourd’hui, il doit la débrancher. Pour cela, il se connecte à celle-ci, et se retrouve enfermé dans l’IA qui retrace ses souvenirs.</p>
                    <div>
                        <a class="btn btn_bordure " id="play" href="/jeu" data-pjax>Trailer</a>
                        <a class="btn btn_fond" id="play" href="/jeu" data-pjax>Jouer</a>
                    </div>
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
                <div class="circle circle-yellow"></div>
            </div>
        </div>

        <div id="rank">
            <div class="top3">
                <h1>Records</h1>
                <div class="second">
                    <div>
                        <svg width="154" height="323" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_bd)">
                                <path d="M1.934 297C1.69 288.704 1.446 282.116 1.202 277.236C1.202 272.112 1.202 266.866 1.202 261.498C1.202 256.13 1.324 248.81 1.568 239.538C2.056 217.578 6.326 200.01 14.378 186.834C22.43 173.414 33.776 162.19 48.416 153.162L68.546 139.986C76.354 134.862 81.356 128.884 83.552 122.052C85.748 115.22 86.968 108.632 87.212 102.288C87.944 86.428 87.944 70.568 87.212 54.708C86.724 47.632 84.528 42.386 80.624 38.97C76.964 35.554 71.108 33.846 63.056 33.846C48.66 33.846 41.34 40.8 41.096 54.708C40.608 63.98 40.364 73.252 40.364 82.524C40.364 91.552 40.608 100.702 41.096 109.974H1.934C1.69 101.678 1.446 93.26 1.202 84.72C0.958001 75.936 0.958001 68.25 1.202 61.662C2.178 39.946 7.424 24.452 16.94 15.18C26.7 5.90799 42.194 1.27199 63.422 1.27199C85.87 1.27199 101.73 5.90799 111.002 15.18C120.518 24.452 125.764 39.946 126.74 61.662C126.984 67.518 127.106 74.35 127.106 82.158C127.106 89.722 126.984 96.432 126.74 102.288C126.252 119.856 122.348 134.252 115.028 145.476C107.952 156.7 97.338 166.704 83.186 175.488L60.494 189.396C53.662 194.276 48.782 201.596 45.854 211.356C42.926 220.872 41.462 230.266 41.462 239.538V261.864H124.178V297H1.934Z" fill="url(#paint0_linear)" fill-opacity="0.74"/>
                                <defs>
                                    <filter id="filter0_bd" x="-58.9814" y="-58.728" width="246.087" height="415.728" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
                                    <linearGradient id="paint0_linear" x1="139.313" y1="349.33" x2="-72.7574" y2="307.787" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#121212" stop-opacity="0.44"/>
                                        <stop offset="1" stop-opacity="0.25"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                            <img src="{{ asset('ressources/web/model2.png') }}" alt="model2"/>
                            </div>
                        <p class="logo-title">pseudo2</p>
                    </div>
                    <div class="first">
                        <div>
                            <svg width="84" height="320" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_bd)">
                                    <path d="M18.012 294V38.898H2.274L1.176 24.258L26.064 1.2H57.54V294H18.012Z" fill="url(#paint0_linear)" fill-opacity="0.74"/>
                                </g>
                                <defs>
                                    <filter id="filter0_bd" x="-58.8574" y="-58.7998" width="176.397" height="412.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
                                    <linearGradient id="paint0_linear" x1="71.9266" y1="346.33" x2="-45.7491" y2="333.873" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#121212" stop-opacity="0.44"/>
                                        <stop offset="1" stop-opacity="0.25"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <img src="{{ asset('ressources/web/model1.png') }}" alt="model1"/>
                        </div>
                        <p class="logo-title">pseudo1</p>
                    </div>
                    <div class="third">
                        <div>
                            <svg width="157" height="323"  viewBox="0 0 157 323" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_bd)">
                                    <path d="M67.324 296.928C44.632 296.928 28.284 292.292 18.28 283.02C8.276 273.504 2.908 257.888 2.176 236.172C1.932 229.096 1.81 222.752 1.81 217.14C1.81 211.284 1.932 203.842 2.176 194.814H41.704V241.296C41.704 256.668 49.878 264.354 66.226 264.354C82.33 264.354 90.504 256.668 90.748 241.296C90.992 232.268 91.114 222.874 91.114 213.114C91.114 203.11 90.992 193.838 90.748 185.298C90.26 177.002 88.186 170.414 84.526 165.534C80.866 160.41 73.79 157.97 63.298 158.214L35.848 158.58L34.384 124.908L84.16 36.336H4.372V1.2H129.544L129.178 34.872L77.572 123.81C95.384 125.274 108.316 130.886 116.368 140.646C124.664 150.162 129.3 165.046 130.276 185.298C130.764 205.306 130.764 222.264 130.276 236.172C129.3 257.888 123.932 273.504 114.172 283.02C104.412 292.292 88.796 296.928 67.324 296.928Z" fill="url(#paint0_linear)" fill-opacity="0.74"/>
                                </g>
                                <defs>
                                    <filter id="filter0_bd" x="-58.1904" y="-58.7998" width="248.832" height="415.728" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
                                    <linearGradient id="paint0_linear" x1="143.348" y1="346.33" x2="-67.5013" y2="305.283" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#121212" stop-opacity="0.44"/>
                                        <stop offset="1" stop-opacity="0.25"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <img src="{{ asset('ressources/web/model3.png') }}" alt="model3"/>
                        </div>
                        <p class="logo-title">pseudo3</p>
                    </div>
                </div>
                <div class="board">
                    <table>
                        <thead>
                            <tr class="logo-title">
                                <td>rang_</td>
                                <td>pseudo_</td>
                                <td>temps_</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01 </td> 
                                <td>Bloopy_ez </td> 
                                <td>40:05s </td>
                            </tr>
                            <tr>
                                <td>01 </td> 
                                <td>Bloopy_ez </td> 
                                <td>40 min 05 sec </td>
                            </tr>
                            <tr>
                                <td>01 </td> 
                                <td>Bloopy_ez </td> 
                                <td>40 minutes 24 secondes</td>
                            </tr>
                            <tr>
                                <td>01 </td> 
                                <td>Bloopy_ez </td> 
                                <td>40 minutes et 42 secondes </td>
                            </tr>
                            <tr>
                                <td>01 </td> 
                                <td>Bloopy_ez </td> 
                                <td>40 minutes </td>
                            </tr>
                            <tr>
                                <td>01 </td> 
                                <td>Bloopy_ez </td> 
                                <td>40 minutes </td>
                            </tr>
                            <tr>
                                <td>01 </td> 
                                <td>Bloopy_ez </td> 
                                <td>40 minutes </td>
                            </tr>
                            <tr>
                                <td>01 </td> 
                                <td>Bloopy_ez </td> 
                                <td>40 minutes </td>
                            </tr>
                            <tr>
                                <td>01 </td> 
                                <td>Bloopy_ez </td> 
                                <td>40 minutes </td>
                            </tr>
                            <tr>
                                <td>11fffff f fff frfr frf </td> 
                                <td>Bloopy_ez </td> 
                                <td>40 minutes </td>
                            </tr>
                            <tr>
                                <td>11fffff f fff frfr frf </td> 
                                <td>Bloopy_ez </td> 
                                <td>40 minutes </td>
                            </tr>
                            <tr>
                                <td>11fffff f fff frfr frf </td> 
                                <td>Bloopy_ez </td> 
                                <td>40 minutes </td>
                            </tr>
                            <tr>
                                <td>11fffff f fff frfr frf </td> 
                                <td>Bloopy_ez </td> 
                                <td>40 minutes </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="hand"><img src="{{ asset('ressources/web/cyborg_hand.png') }}" alt="cyborg_hand"/></div>
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
                            <span>Webdesigner &amp; développeuse front-end</span>
                        </div>
                        <div>
                            <img src=""/>
                            <span>Développeur frontend &amp; backend</span>
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
                <h1>Conctact</h1>
                <div class="a">
                    <p>Hey ! Tu es à la recherche d’informations ? Ou tu souhaites peut-être donner ton avis sur l’escape game en partageant ton ressenti, d'éventuelles remarques ou suggestions dû à ton expérience ? Tu es sur la bonne page ! Alors, envoie nous un mail, qu’est-ce que tu attends&nbsp;?</p>
                    <div class="media">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-youtube"></i>
                    </div>
                </div>
                <div class="mail">
                    <a href="mailto:contact@escapemind.fr">contact@escapemind.fr</a>
                </div>
            </div>

            <footer>
                <span>escape_mind</span>
                <span>escape_mind</span>
            </footer>
        </div>
    </div>
    @endsection
