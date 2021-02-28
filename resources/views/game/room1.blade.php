@extends('layouts.template')

@section('content')
<div class="bg">
	<a><img id="bg-room1" src={{ asset('ressources/game/objects/image/test_mur.jpg') }}></a>
</div>
<div class="room">
	<a class="hoverable" >
		<img id="img1" class="zoomable" src="{{ asset('ressources/game/objects/image/radio.png') }}"/>
	</a>
	{{--    <a class="hoverable" >--}}
	{{--        <img id="img2" src="{{ asset('ressources/game/objects/image/radio.png') }}"/>--}}
	{{--    </a>--}}
	{{--    <a class="hoverable" >--}}
	{{--        <img id="img3" src="{{ asset('ressources/game/objects/image/radio.png') }}"/>--}}
	{{--    </a>--}}
</div>

@endsection
