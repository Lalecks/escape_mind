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
		<span class="bg_txt_bordure">escape_mind</span>
		<span class="bg_txt_fond">escape_mind</span>
	</div>
	<div class="loader-circle">
		<p>chargement<span class="points">...</span></p>
		<div class="circle"></div>
	</div>
</div>

@endsection