<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/css/app.css" rel="stylesheet">
        <title>Medication Lookup</title>
    </head>
    <body class="antialiased">
        <div id="app"></div>
        <script src="{{ asset('js/app.js') }}" defer></script>
        <script src="{{ secure_assets('js/app.js') }}?time={{ time() }}"></script>
    </body>
</html>
