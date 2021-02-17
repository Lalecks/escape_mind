<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoaderController extends Controller
{
    public function redirect(Request $request) 
    {
        $url = $request['url'];
        return view('loader', compact('url'));
    }
}