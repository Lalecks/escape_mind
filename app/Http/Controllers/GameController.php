<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GameController extends Controller
{
    public function game(Request $request)
    {
        $url = $request['url'];
        return view('/game/jeu', compact('url'));
    }

    public function index()
    {
        $items = Item::all();
        $firstItem = DB::table('objects')->get();

        return view('game.jeu')->with('items', $items);
    }
}
