<div class="glass-effect">
    <form action="/create" method="post">
        @csrf
        <div>
            <h1>Votre score</h1>
            <h2 for="name">{{ __('Pseudo') }}</h2>
            <input type="text" name="name" placeholder="Votre pseudo" value='{{old('name')}}' pattern=".{4,20}" title="Requiert entre 4 et 20 caractères" />
            {{-- @error('name')
                <strong>{{ $message }}</strong>
            @enderror --}}
            <button type="submit" value="Envoyer">Envoyer</button>
        </div>
    </form>

    <a href="{{asset('/')}}" class="btn hoverable glass-effect">Retour à l'accueil</a>
</div>