@section('loader')

<div id="loader" style="opacity: 0">
    <div id="bg"></div>

    <div id="bg-text" class="bg-txt" >
        <span class="bg_txt_fond">escape_mind</span>
        <span class="bg_txt_bordure">escape_mind</span>
        <span class="bg_txt_fond">escape_mind</span>
        <span class="bg_txt_bordure">escape_mind</span>
        <span class="bg_txt_fond">escape_mind</span>
        <span class="bg_txt_bordure">escape_mind</span>
        <span class="bg_txt_fond">escape_mind</span>
        <span class="bg_txt_bordure">escape_mind</span>
    </div>

    <div class="chargement">
        <p>chargement<span class="points">...</span></p>
    </div>
	<div class="circle loader-circle">
		<div id="c1" class="circle"></div>
        <div id="c2" class="circle"></div>
        <div id="c3" class="circle"></div>
        <div id="c4" class="circle"></div>
	</div>
</div>

@endsection
