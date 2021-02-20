@extends('layouts.template')

{{-- <script type="text/javascript">
    // Redirect the user to where they want to go after 3 seconds.

    {{--setTimeout(function() {--}}
    {{--    window.location.replace("{{ $url }}");--}}
    {{--}, 3000);

</script> --}}

@section('content')

    <div class="loader">
        <div class="bg-txt">
            <span>escape_mind</span>
        </div>
        <div class="loader-circle">
            <p>chargement...</p>
            <div class="circle"></div>
        </div>
    </div>

@endsection