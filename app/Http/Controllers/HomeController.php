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

    protected $dates = ['time_game'];

    public function index()
    {
        $user = User::orderBy('time_game', 'asc');

        // Classement des 15 premiers utilisateurs par le meilleur temps
        $fifteenFirstUser = $user->take(15)->get();
        // Second score
        $secondUser = $user->skip(1)->first();
        // Troisième score
        $thirdUser = $user->skip(2)->first();

        return view('components.home')->with('user', $fifteenFirstUser)->with('secondUser', $secondUser)->with('thirdUser', $thirdUser);
    }

    public function legal_notice(){
        return view('components.legal_notice');
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required|max:20|min:4',
            'time_game' => 'required|date|after:start_date'
        ]);
        $c = new User();
        $c->name = $request->input('name');
        $c->time_game = $request->input('time_game');
        $c->save();
        return redirect("/");
    }
}
