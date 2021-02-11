<?php

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

Route::get('/', function () {
    return view("home");
});

Route::get('/histoire', function () {
    return view("story");
});

Route::get('/classement', function () {
    return view("rank");
});

Route::get('/contact', function () {
    return view("contact");
});

Route::get('/a-propos', function () {
    return view("about");
});



Route::any('{query}',
    function() { return redirect('/'); })
    ->where('query', '.*');
//If the URL does not exist, redirection to homepage

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
