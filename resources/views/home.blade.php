@extends('layouts.template')

@section('content')
    <nav class="navbar">
        <div id="bar_fix"></div>
        <div id="bar_anim"></div>
        <ul>
            <li><a href="#home" class="active">Accueil</a></li>
            <li><a href="#story">Histoire</a></li>
            <li><a href="#rank">Classement</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <div class="index">

        <div id="home">
            <video class="bg-video" playsinline="" autoplay="" muted="" loop="">
                <source src="{{ asset('ressources/technology.mp4') }}" type="video/mp4">
            </video>

            <div class="video-overlay">
                <div id ="home_box">
                    <a class="btn btn_bordure" id="play" href="/jeu" data-pjax>Trailer</a>
                    <a class="btn btn_fond" id="play" href="/jeu" data-pjax>Jouer</a>
                </div>
            </div> 
        </div>
        
        <div id="story">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-youtube"></i>
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
