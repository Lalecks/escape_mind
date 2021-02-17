@extends('layouts.template')


@section('content')
    <div class="index">
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

        <section id="home">
            <div id ="home_box">home</div>
        </section>
        <section id="story">
            <div id ="story_box">home</div>
        </section>
        <section id="rank">
            <div id ="rank_box">home</div>
        </section>
        <section id="contact">
            <div id ="contact_box">home</div>
        </section>
        <section id="about">
            <div id ="about_box">home</div>
        </section>
    </div>
@endsection
