@extends('errors::errorLayout')

@section('title', __('Page interdite'))
@section('code', '403')
@section('message', __($exception->getMessage() ?: 'Cette page est interdite.'))