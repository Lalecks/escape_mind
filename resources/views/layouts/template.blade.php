@if(request()->ajax())
@yield('content')
@else
@include('layouts.app')
@endif