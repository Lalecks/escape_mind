@extends('layouts.template')

@section('style')
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
@endsection

@section('content')
    <nav class="navbar">
        <div id="bar_fix"></div>
        <div id="bar_anim"></div>
        <ul>
            <li><a id="test" href="#home" class="active">Accueil</a></li>
            <li><a href="#story">Histoire</a></li>
            <li><a href="#rank">Classement</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">A propos</a></li>

        </ul>
    </nav>

    <section id="home">
        <div id ="home_box">desfrgthyu</div>
    </section>
    <section id="story">

    </section>
    <section id="rank">

    </section>
    <section id="contact">

    </section>
    <section id="about">

    </section>
    
@endsection