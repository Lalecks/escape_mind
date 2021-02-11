<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title> Escape Mind - @yield('tab_title')</title>
    <link href="{{ asset('css/template_style.css') }}" rel="stylesheet" type="text/css" >
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
    <h1> Escape Mind, @yield('main_title')</h1>

    <ul id="menu">
        <li><a href="/" title="Accueil du site">Accueil</a></li>
        <li><a href="/histoire" title="L'histoire du jeu">Histoire</a></li>
        <li><a href="/classement" title="Le classement des joueurs">Classement</a></li>
        <li><a href="/contact" title="Contactez-nous">Contact</a></li>
        <li><a href="/a-propos" title="Qui sommes-nous ?">A propos</a></li>
    </ul>





</body>
</html>
