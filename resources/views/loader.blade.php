@extends('layouts.template')

<link href="{{ asset('css/loader.css') }}" rel="stylesheet">
<script type="text/javascript">
    // Redirect the user to where they want to go after 3 seconds.

    {{--setTimeout(function() {--}}
    {{--    window.location.replace("{{ $url }}");--}}
    {{--}, 3000);--}}

</script>

@section('content')
    <p>loading...</p>

    <div>
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <path id="blob"  d="M59.7,-19.6C66.6,1.8,54,29.4,34.4,42.5C14.7,55.7,-11.9,54.4,-30,41.3C-48,28.2,-57.4,3.2,-51,-17.5C-44.6,-38.3,-22.3,-54.8,2.1,-55.5C26.4,-56.1,52.8,-40.9,59.7,-19.6Z" transform="translate(100 100)" />
        </svg>
    </div>






@endsection
