<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title> Escape Mind </title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="{{ asset('css/template_style.css') }}" rel="stylesheet" type="text/css" >
</head>
<body>
<h1> Escape Mind, homepage</h1>

<ul id="menu">
    <li><a href="#" title="Accueil du site">Accueil</a></li>
    <li><a href="#" title="L'histoire du jeu">Histoire</a></li>
    <li><a href="#" title="Le classement des joueurs">Classement</a></li>
    <li><a href="#" title="Contactez-nous">Contact</a></li>
    <li><a href="#" title="Qui sommes-nous ?">A propos</a></li>
</ul>





</body>
</html>


{{--
@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Dashboard') }}</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        {{ __('You are logged in!') }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
--}}
