@extends('layouts.template')

@section('content')

    <nav class="navbar">
        <div id="bar_fix"></div>
        <div id="bar_anim"></div>
        <ul>
            <li><a href="#home" class="active">Accueil</a></li>
            <li><a href="#story">Histoire</a></li>
            <li><a href="#rank">Classement</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">A propos</a></li>

        </ul>
    </nav>
    <div class="index">
        <div id="home">
            <div id ="home_box">

                <a id="play" href="/jeu" data-pjax>Jouer</a>

            </div>
        </div>
        <div id="story">
            <div id ="story_box"></div>
        </div>
        <div id="rank">
            <div id ="rank_box"></div>
        </div>
        <div id="contact">
            <div id ="contact_box"></div>
        </div>
        <div id="about">
            <div id ="about_box"></div>
        </div>
    </div>
@endsection
