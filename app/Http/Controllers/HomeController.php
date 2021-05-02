<?php

namespace App\Http\Controllers;
// use App\User;
use App\Models\User;
use Illuminate\Support\Facades\DB;
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
        $user = User::orderBy('created_at', 'asc');

        // Classement des 15 premiers utilisateurs par le meilleur temps
        $fifteenFirstUser = $user->take(15)->get();
        // Second score
        $secondUser = $user->skip(1)->first();
        // Troisième score
        $thirdUser = $user->skip(2)->first();

        return view('components.home')->with('user', $fifteenFirstUser)->with('secondUser', $secondUser)->with('thirdUser', $thirdUser); 
    }
}