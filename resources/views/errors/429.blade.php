@extends('errors::layout')

@section('title', __('Trop de requêtes'))
@section('code', '429')
@section('message', __('Too Many Requests'))