<?php

namespace App\Http\Controllers;
// use App\User;
use App\Models\User;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function index()
    {
        $user = User::all();
        // ->sortByDesc('id')->take(3)
        return view('components.home')->with('user', $user);; 
    }
}