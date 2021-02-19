<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Page d'attente
//Route::get('/redirect', 'LoaderController@redirect');
// Page de l'interface web
Route::get('/', function () {
    return view("home");
});
// Pages de l'interface jeu
Route::get('/jeu', 'GameController@game');


Auth::routes();

//If the URL does not exist, redirection to homepage
Route::any('{query}',
    function() { return redirect('/'); })
    ->where('query', '.*');

Auth::routes();
