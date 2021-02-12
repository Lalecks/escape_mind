@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Vérifiez votre adresse mail.') }}</div>

                <div class="card-body">
                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            {{ __("Un lien d'activation vient d''être envoyé à votre adresse mail.") }}
                        </div>
                    @endif

                    {{ __('Avant de continuer, activez votre compte via le lien envoyé par mail.') }}
                    {{ __('Si vous ne recevez pas le mail') }},
                    <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                        @csrf
                        <button type="submit" class="btn btn-link p-0 m-0 align-baseline">{{ __('cliquez ici pour en recevoir un nouveau') }}</button>.
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
