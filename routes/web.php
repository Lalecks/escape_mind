<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;


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

// Page de l'interface web
Route::get('/', function () {
    return view("components.home");
});
Route::get('/', 'HomeController@index');




Route::get('/play', 'GameController@game');
Route::get('/play', 'GameController@index');

// Pages de l'interface jeu
Route::group(['middleware'=>'auth'], function () {
    // Pages des pièces
    Route::get('/room1', 'GameController@displayRoom1');
    Route::get('/room2', 'GameController@displayRoom2');
    Route::get('/room3', 'GameController@displayRoom3');
    // Pages des cinématiques
    Route::get('/opening', 'CinematicController@opening');
    Route::get('/ending-out', 'CinematicController@ending');
    Route::get('/ending-in', 'CinematicController@ending');
});

//If the URL does not exist, redirection to homepage
/*
Route::any('{query}',
    function() { return redirect('/'); })
    ->where('query', '.*');*/

Auth::routes();
