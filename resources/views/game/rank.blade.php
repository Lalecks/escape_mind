<div id="Result" class="glass-effect center">
    <h1>Votre score</h1>
    <div class="glass-effect">
        <form data-pjax action="/create" method="post">
            @csrf
            <div>
                <p>Bravo, tu es sorti en <span id="min">XX</span>min<span id="sec">XX</span>, tu peux enregistrer ton score en remplissant ton pseudo dans le formulaire. Merci d'avoir joué à notre jeu, nous espérons qu'il t'a plu !</p>
                {{-- <h2 for="name">{{ __('Pseudo') }}</h2> --}}
                <input class="@error('name') is-invalid @enderror" type="text" name="name" placeholder="Votre pseudo" value='{{old('name')}}' pattern=".{4,20}" title="Requiert entre 4 et 20 caractères" required/>
                <input id="time_game" name="time_game" value='' type="hidden" required>
                <button id="result_button" class="hoverable glass-effect btn-animation_glitch" type="submit" value="Envoyer">Envoyer</button>
                @error('name')
                    <strong>Pseudo déjà existant</strong>
                @enderror
            </div>
        </form>
        <a href="{{asset('/')}}" class="btn hoverable glass-effect">Retour à l'accueil</a>
    </div>
</div>
