<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{env('APP_ENV') === 'local'? asset('/css/app.css') : secure_asset('/css/app.css')}}" rel="stylesheet">
        <title>Medication Lookup</title>
    </head>
    <body class="antialiased">
        <div id="app"></div>
        <script src="{{ env('APP_ENV') === 'local'? asset('js/app.js') : secure_asset('js/app.js') }}" defer></script>
    </body>
</html>
