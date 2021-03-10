<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GameController extends Controller
{
    public function game(Request $request)
    {
        $url = $request['url'];
        return view('/game/jeu', compact('url'));
    }
}
