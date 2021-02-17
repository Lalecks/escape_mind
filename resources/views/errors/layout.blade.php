<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title')</title>
    </head>
    <body >  
        @yield('code', __('Oh no'))
        @yield('message')

        <a href="{{ app('router')->has('home') ? route('home') : url('/') }}">
            <button class="bg-transparent text-grey-darkest font-bold uppercase tracking-wide py-3 px-6 border-2 border-grey-light hover:border-grey rounded-lg">
                {{ __('Go Home') }}
            </button>
        </a>
        /*@yield('image')*/
    </body>
</html>


