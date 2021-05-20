<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{secure_asset('/css/app.css')}}" rel="stylesheet">
        <title>Medication Lookup</title>
    </head>
    <body class="antialiased">
        <div id="app"></div>
        <script src="{{ secure_asset('js/app.js') }}" defer></script>
    </body>
</html>
