<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('css/docSlider.css')}}">

    <style>
        section:nth-child(odd){
            background-color: #eee;
        }
        .inner{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            font-size: 2em;
        }

    </style>
    <title>Sample :: docSlider.js</title>
</head>
<body>

<div class="docSlider">
    <section>
        <div class="inner">Page1</div>
    </section>
    <section>
        <div class="inner">Page2</div>
    </section>
    <section>
        <div class="inner">Page3</div>
    </section>
    <section>
        <div class="inner">Page4</div>
    </section>
</div>

<script src="{{ URL::asset('css/docSlider.js')}}"></script>
<script>docSlider.init();</script>
</body>
</html>
