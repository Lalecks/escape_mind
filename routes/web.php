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
Route::post('/create', 'HomeController@store');
Route::get('/play', 'GameController@game');
Route::get('/play', 'GameController@index');
Route::get('/legal_notice', 'HomeController@legal_notice');


//If the URL does not exist, redirection to homepage
/*
Route::any('{query}',
    function() { return redirect('/'); })
    ->where('query', '.*');*/

// Auth::routes();
