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
        $user = User::all();
        // $user = User::all()->orderBy('created_at', 'ASC');
        // $user = User::orderBy('created_at', 'ASC')->all();

        // $user = DB::table('users')->orderBy('created_at', 'desc')->get();
        // $firstUser = DB::table('users')
        
        
        // $first3users = DB::table('foo')->orderBy('bar', 'desc')->take(3)->get();
        // $firstUser = DB::select('select * from users where id = 1');
        // $secondUser = DB::select('select * from users where id = 2');
        // $thirdUser = DB::select('select * from users where id = 3');
        // ->sortByDesc('id')->take(3)
        return view('components.home')->with('user', $user);
        // ->with('firstUser', $firstUser); 
    }
}